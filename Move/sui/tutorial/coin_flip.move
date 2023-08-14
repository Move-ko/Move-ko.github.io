/*동전 뒤집기*/
module test_addr::coin_flip {
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};

    struct Coin has key {
        id: UID,
        status:bool
    }
    
    public entry fun create(ctx: &mut TxContext) {
        transfer::share_object(Coin {
            id: object::new(ctx),
            status: true
        })
    }
    public fun get_status(coin: &Coin): bool {
        coin.status
    }
    public entry fun flip(coin: &mut Coin) {

        if (coin.status==true){
           coin.status = false;

        }else {
            coin.status = true;
        }

    }

}
#[test_only]

module test_addr::coin_flip_test {
    use sui::test_scenario;
    use test_addr::coin_flip;

  #[test]
      fun test_coin_flip() {
        let user1 = @0xA1;

        let scenario_val = test_scenario::begin(user1);
        let scenario = &mut scenario_val;


          test_scenario::next_tx(scenario, user1);
        {
            coin_flip::create(test_scenario::ctx(scenario));
        };
             test_scenario::next_tx(scenario, user1);
        {
            let coin_val = test_scenario::take_shared<coin_flip::Coin>(scenario);
            let coin = &mut coin_val;
            assert!(coin_flip::get_status(coin) == true, 0);
            coin_flip::flip(coin);
            assert!(coin_flip::get_status(coin) == false, 0);
            coin_flip::flip(coin);
            assert!(coin_flip::get_status(coin) == true, 0);

            test_scenario::return_shared(coin_val);

        };
        test_scenario::end(scenario_val);

      }
    
}
