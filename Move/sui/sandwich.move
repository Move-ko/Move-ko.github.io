module example::sandwich {
    use sui::balance::{Self,Balance};
    use sui::coin::{Self,Coin};
    use sui::object::{Self,UID};
    use sui::sui::SUI;
    use sui::transfer;
    use sui::tx_context::{Self,TxContext};

    struct Ham has key {
        id:UID
    }

    struct Bread has key {
        id:UID
    }
    
    struct Sandwich has key {
        id:UID
    }

    struct GroceryOwnerCapability has key {
        id:UID
    }

    struct Grocery has key {
        id:UID,
        profits:Balance<SUI>
    }
   
   const HAM_PRICE:u64= 10;


   const BREAD_PRICE:u64= 2;

   const EINSUFFICIENT_FUNDS:u64= 0;

   const ENO_PROFITS:u64= 1;


   fun init(ctx:&mut TxContext){
      transfer::share_object(Grocery {
        id:object::new(ctx),
        profits:balance::zero<SUI>()
      });

      transfer::transfer(GroceryOwnerCapability {
        id:object::new(ctx)
      },tx_context::sender(ctx));
   }

   public entry fun buy_ham(
    grocery:&mut Grocery,
    c:Coin<SUI>,
    ctx:&mut TxContext
   ){
    let b= coin::into_balance(c);
    assert!(balance::value(&b) >=HAM_PRICE,EINSUFFICIENT_FUNDS);
    balance::join(&mut grocery.profits,b);
    transfer::transfer(Ham{id:object::new(ctx)},tx_context::sender(ctx))
   }

   public entry fun buy_bread(
    grocery:&mut Grocery,
    c:Coin<SUI>,
    ctx:&mut TxContext
   ){
    let b= coin::into_balance(c);
    assert!(balance::value(&b)>=BREAD_PRICE,EINSUFFICIENT_FUNDS);
    balance::join(&mut grocery.profits,b);
    transfer::transfer(Bread { id: object::new(ctx) }, tx_context::sender(ctx))
   }

   public entry fun make_sandwich(
    ham:Ham,
    bread:Bread,
    ctx:&mut TxContext
   ){
    let Ham{id:ham_id}= ham;
    let Bread{id:bread_id}= bread;
    object::delete(ham_id);
    object::delete(bread_id);
    transfer::transfer(Sandwich{id:object::new(ctx)},tx_context::sender(ctx))
   }



   public fun profits(grocery:&Grocery):u64 {
    balance::value(&grocery.profits)
   }   

   public entry fun collect_profits(_cap:&GroceryOwnerCapability,grocery:&mut Grocery,ctx:&mut TxContext){
    let amount= balance::value(&grocery,profits);

    assert!(amount>0,ENO_PROFITS);

    let coin= coin::take(&mut grocery.profits,amount,ctx);

    transfer::transfer(coin,tx_context::sender(ctx));
   }


   #[test_only]
   public fun init_for_testing(ctx:&mut TxContext){
    init(ctx)
   }
}

  #[test_only]
   module example::test_sandwich {
          use example::sandwich::{Self, Grocery, GroceryOwnerCapability, Bread, Ham};
          use sui::test_scenario;
          use sui::coin::{Self};
          use sui::sui::SUI;
    


       #[test]
       fun test_make_sandwich(){
           let owner= @0x1;
           let the_guy= @0x2;

           let scenario_val = test_scenario::begin(owner);
           let scenario = &mut scenario_val;
            test_scenario::next_tx(scenario, owner);
        {
            sandwich::init_for_testing(test_scenario::ctx(scenario));
        };

     test_scenario::next_tx(scenario, the_guy);
        {
            let grocery_val = test_scenario::take_shared<Grocery>(scenario);
            let grocery = &mut grocery_val;
            let ctx = test_scenario::ctx(scenario);

            sandwich::buy_ham(
                grocery,
                coin::mint_for_testing<SUI>(10, ctx),
                ctx
            );

            sandwich::buy_bread(
                grocery,
                coin::mint_for_testing<SUI>(2, ctx),
                ctx
            );

            test_scenario::return_shared( grocery_val);
        };

        test_scenario::next_tx(scenario, the_guy);
        {
            let ham = test_scenario::take_from_sender<Ham>(scenario);
            let bread = test_scenario::take_from_sender<Bread>(scenario);

            sandwich::make_sandwich(ham, bread, test_scenario::ctx(scenario));
        };

        test_scenario::next_tx(scenario, owner);
        {
            let grocery_val = test_scenario::take_shared<Grocery>(scenario);
            let grocery = &mut grocery_val;
            let capability = test_scenario::take_from_sender<GroceryOwnerCapability>(scenario);

            assert!(sandwich::profits(grocery) == 12, 0);
            sandwich::collect_profits(&capability, grocery, test_scenario::ctx(scenario));
            assert!(sandwich::profits(grocery) == 0, 0);

            test_scenario::return_to_sender(scenario, capability);
            test_scenario::return_shared(grocery_val);
        };
        test_scenario::end(scenario_val);
    }
}