/*
Witness는 유형의 소유권을 확인하기 위해 사용되는 패턴입니다. 이를 위해 해당 유형의 drop 인스턴스를 전달합니다. Coin은 이 구현을 기반으로 합니다.
*/
/// 생성 증인과 함께만 인스턴스화할 수 있는 일반적인 유형 Guardian<T>을 정의하는 모듈입니다.

module example::guardian {
    use sui::object::{Self,UID};
    use sui::tx_context::TxContext;
/// Phantom 매개변수 T는 `create_guardian` 함수에서만 초기화할 수 있습니다. 그러나 여기에 전달되는 유형은 반드시 `drop`을 가져야 합니다.

    struct Guardian <phantom T:drop>has key,store {
        id:UID
    }
/// 이 함수의 첫 번째 인수는 실제로 `drop` 능력을 가진 T 유형의 인스턴스입니다. 이는 수신하자마자 삭제됩니다.

    public fun create_guardian<T:drop>(
        -wirhness:T,
        ctx:&mut TxContext
    ):Guardian<T> {
        Guardian{id :object::new(ctx)}
    }
}

/// guardian을 사용하는 커스텀 모듈입니다.

module example::peace_guardian {
    use sui::transfer;
    use sui::tx_context::{Self,TxContext};
// 의존성으로 `guardian` 사용.
    use 0x0::guardian;
    /// 이 유형은 한 번만 사용할 수 있습니다.

     struct PEACE has drop {}
/// 모듈 초기화 함수는 코드가 한 번만 호출되도록 보장하는 가장 좋은 방법입니다. `Witness` 패턴과 함께 사용하는 것이 일반적입니다.

     fun init (ctx:&mut TxContext){
        transfer::public_transfer(
            guardian::create_guardian(PEACE {},ctx),
            tx_context::sender(ctx)
        )
     }
}