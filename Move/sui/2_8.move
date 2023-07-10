//이벤트는 체인 상에서의 작업을 추적하는 주요 방법입니다.

/// 공유 객체의 확장된 예제입니다. 이제 이벤트도 추가되었습니다!
module example::donuts_with_enents {
    use sui::transfer;
    use sui::sui::SUI;
    use sui::coin::{Self,Coin};
    use sui::object::{self,ID,UID};
    use sui::balance::{Self,Balance};
    use sui::tx_context::{Self,TxContext};
    // 이벤트에 필요한 유일한 종속성입니다.
    use sui::event;
   //코인 잔고가 너무 낮을 때 사용합니다.
    const ENotEnough:u64= 0;
   // 소유자가 이익을 수집하는 권한을 부여하는 기능입니다.
    struct ShopOwnerCap has key {
        id:UID
    }
    // 구매할 수 있는 도넛입니다. 간단함을 위해 구현은 무시합니다.
    struct Dount has key {
        id :UID
    }
    struct DonutShop has key {
        id:UID,
        price:u64,
        balance:Balance<SUI>
    }
    // ====== Events ======

    /// For when someone has purchased a donut.
    struct DonutBouht has copy,drop {
        id:ID
    }

    struct ProditsCollected has copy,drop {
        amount:u64
    }

    // ====== Functions ======
    
  fun init(ctx: &mut TxContext) {
        transfer::transfer(ShopOwnerCap {
            id: object::new(ctx)
        }, tx_context::sender(ctx));

        transfer::share_object(DonutShop {
            id: object::new(ctx),
            price: 1000,
            balance: balance::zero()
        })
    }
    //도넛을 구매합니다.

    public entry fun buy_donut(
        shop:&mut DonutShop,payment:&mut Coin<SUI>,ctx:&mut TxContext
    ){
        assert!(coin::value(payment) >=shop,price,ENotEnough);

        let coin_balance= coin::balance_mut(payment);
        let paid= balance::split(coin_balance,shop.price);
        let id = object::new(ctx);

        balance::join(&mut shop.balance,paid)

        event::emit(DonutBouht{id:object::uid_to_inner(&id)});
        transfer::transfer(Donut{id},tx_context::sender(ctx))
    }

    public entry fun eat_donut(d:Donut){
        let Donut {id}= d;
        object::delete(id);
    }

    //DonutShop에서 코인을 가져와 트랜잭션 보내는 사람에게 이전합니다.
   //ShopOwnerCap의 권한이 필요합니다.
    public entry fun collect_profists(
        _:&ShopOwnerCap,shop:&mut DonutShop,ctx:&mut TxContext
    ){
        let amount = balance::value(&shop.balance);
        let profits= coin::take(&mut shop.balance,amount,ctx);

        event::emit(profitsCollected {amount});

        transfer::public_transfer(profits,tx_context::sender(ctx))
    }
}






