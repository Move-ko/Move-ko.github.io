/*
Shared Object
- 공유 객체(Shared object)는 sui::transfer::share_object 함수를 사용하여 공유되며 모든 사람이 접근할 수 있는 객체입니다.
*/
//Owned 객체와는 달리, Shared 객체는 네트워크 상의 누구나 접근할 수 있습니다. 이러한 종류의 객체의 확장된 기능과 접근성은 필요에 따라 추가적인 노력을 통해 접근을 보호하는 것이 필요합니다. 
module example::donuts {
    use sui::transfer;
    use sui::sui::SUI;
    use sui::coin::{Self,Coin};
    use sui::object::{Self,UID};
    use sio::balance::{Self,Balance};
    use sui::tx_context::{Self,TxContext};


    // 코인 잔액이 너무 낮을 때 사용합니다.
    const ENotEnough:u64=0;
    
    //이익을 수집하는 권리를 소유자에게 부여하는 능력입니다.
    struct ShopOwnerCap has key {id:UID}

    //구매할 수 있는 도넛입니다. 간단함을 유지하기 위해 구현은 무시합니다. 번역
    struct Donut has key {id:UID}
    // 공유된 객체입니다. key 능력이 필요합니다.
    struct DonutShop has key {
        id:UID,
        price:u64,
        balance:Balance<SUI>
    }
   /*
   초기화 함수는 공유 객체를 초기화하는 데에 이상적인 위치입니다.
   이 함수는 한 번만 호출되기 때문입니다.
   객체를 공유하기 위해 transfer::share_object 함수를 사용합니다.
   */
    fun init(ctx:&mut TxContext){
        transfer::transfer(ShopOwnerCap{
            id:object::new(ctx)
        },tx_context::sender(ctx));
        // 모든 사람이 접근할 수 있도록 객체를 공유합니다! 
        transfer::share_object(DonutShop{
            id :object::new(ctx),
            price:1000,
            balance:balance::zero()
        })
    }
    //코인을 소유한 모든 사람이 이용할 수 있는 엔트리 함수입니다.
    public entry fun buy_donut(
        shop:&mut DonutShop,payment:&mut Coin<SUI>,ctx:&mut TxContext
    ){
        assert!(coin::value(payment) >= shop.price, ENotEnough);
        // Coin<SUI>에서 shop.price 만큼의 금액을 차감합니다.
        let coin_balance= coin::balance_mut(payment);
        let paid= balance::split(coin_balance,shop.price);
        // 코인을 상점의 잔고에 넣습니다.
        balance::join(&mut shop.balance.paid);

        transfer::transfer(Donut{
            id:object::new(ctx)
        },tx_context::sender(ctx)) 
    }
    // 도넛을 소비하고 아무것도 받지 않습니다..
    public entry fun eat_donut(d:Donut){
        let Donut{id}= d;
        object::delete(id);
    }
   // DonutShop에서 코인을 가져와 트랜잭션 송신자에게 이전합니다.
   // ShopOwnerCap 권한으로 인증이 필요합니다. 번역
    public entry fun collect_profits(
        _:&ShopOwnerCap,shop:&mut DonutShop,ctx:&mut TxContext
    ){
        let amount= balance::value(&shop.balance);
        let profits= coin::take(&mut shop.balance);

        transfer::public_transfer(profits,tx_context::sender(ctx))
    }



}