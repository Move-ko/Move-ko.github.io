
/*
코인을 Sui에서 발행하는 것은 새로운 유형을 발행하는 것과 거의 비슷합니다. 그러나 One Time Witness를 사용하는 것이 약간 까다롭습니다.

*/
module examples::mycoin {
    use std::option;
    use sui::coin;
    use sui::transfer;
    use sui::tx_context::{Self,TxContext};



    /// 코인의 유형 식별자. 코인은 `Coin<package_object::mycoin::MYCOIN>` 형식 태그를 가집니다.
    /// 유형의 이름이 모듈의 이름과 일치하는지 확인하세요.
    struct MYCOIN has drop {}
    // 모듈 초기화는 모듈을 게시할 때 한 번 호출됩니다. 퍼블리셔에게 트레저리 캡(TreasuryCap)이 전송되고,
    /// 이후 퍼블리셔가 코인의 발행 및 소각을 제어합니다.
    fun init(witness:MYCOIN,ctx:&mut TxContext) {
        let (treasury,metadata)= coin::create_currency(witness,6,b"MYCOIN",b"",b"",option::none(),ctx);
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury,tx_context::sender(ctx))
    }
}
/*
Coin<T>은 Sui에서 코인을 제네릭으로 구현한 것입니다. 트레저리 캡(TreasuryCap)의 소유자는 코인의 발행 및 소각을 제어합니다. TreasuryCap 객체를 인증으로 사용하여 직접 sui::coin::Coin으로 전송할 수도 있습니다.
*/