
/// 이 패턴은 Capability와 Witness의 조합에 기반합니다.
/// Witness는 조심해야 할 요소이므로 스폰하는 것은
/// 권한이 있는 사용자에게만 허용되어야 합니다(이상적으로는 한 번만).
/// 그러나 일부 시나리오에서는 모듈 X의 유형 인증이 다른 모듈 Y에서 사용되어야 하는 경우가 있습니다.
/// 또는 아마도 일정 시간 후에 인증을 수행해야 하는 경우가 있을 수 있습니다.
///
/// 이러한 드물지만 특별한 시나리오를 위해 저장 가능한 witness가 완벽한 해결책입니다.
module examples::transferble::witness {
    use sui::transfer;
    use sui::object::{Self,UID};
    use sui::tx_context::{Self,TxContext};

   /// 이제 Witness에는 래퍼 내부에 저장할 수 있는 `store`가 있습니다.
    struct WITNESS has store,drop {}
/// Witness의 유형을 운반합니다. Witness를 가져오기 위해 한 번만 사용할 수 있습니다.

    struct WitnessCarrier has key {id:UID,witness:WITNESS}


/// `WitnessCarrier`를 모듈 게시자에게 전송합니다.
    fun init (ctx:&mut TxContext) {
        transfer::transfer (
            WitnessCarrier {id:object::new(ctx),witness:WITNESS {}},
            tx_context::sender(ctx)
        )
    }
    /// 운반자를 풀고 내부의 WITNESS 유형을 얻습니다.

    public fun get_witness(carrier:WitnessCarrier):WITNESS {
        let WitnessCarrier {id,witness}= carrier;
        object::delete(id);
        witness
    }
}   