/*
원타임 위트니스 (One Time Witness, OTW)는 특정 타입의 특수한 인스턴스로, 모듈 초기화자에서만 생성되며 유일하고 하나의 인스턴스만을 가지도록 보장됩니다. 이는 한 번의 인증된 동작이 단 한 번만 수행되었는지를 확인해야하는 경우에 중요합니다 (예: 새로운 코인 생성). Sui Move에서는 다음과 같은 속성을 갖는 경우 타입을 OTW로 간주합니다:

모듈 이름을 대문자로 지정한 이름
drop 능력만을 갖고 있음
인스턴스가 OTW인지 확인하려면 sui::types::is_one_time_witness(witness)를 사용해야 합니다.

이 타입의 인스턴스를 얻으려면 init() 함수에 첫 번째 인자로 추가해야 합니다. Sui 런타임은 초기화자 인자를 자동으로 제공합니다.
*/

/*
이 예제는 One Time Witness (OTW)가 작동하는 방식을 설명합니다.

One Time Witness (OTW)는 시스템 전체에서 유일함이 보장되는 타입의 인스턴스입니다. 다음과 같은 특성을 갖습니다:

- 모듈 초기화자에서만 생성됨
- 모듈 이름을 따름 (대문자)
- 수동으로 패킹할 수 없음
- drop 능력을 갖고 있음

*/
module examples::one_time_witness_registry {
    use sui::tx_context::TxContext;
    use sui::object::{Self,UID};
    use std::string::String;
    use sui::transfer;
// 이 종속성은 타입이 원타임 위트니스(OTW)인지 확인할 수 있도록 해줍니다.
    use sui::types;
    /// OTW가 아닌 구조체를 전송하려고 할 때 사용합니다.
    const ENotOneTimeWitness:u64= 0;
    /// 이 타입의 객체는 해당 타입이 존재하고, 타입당 레코드는 하나만 존재함을 나타냅니다.
    struct UniqueTypeRecord<phantom T>has key{
        id:UID,
        name:String
    }
   /// 사용자 정의 이름으로 새로운 타입을 등록할 수 있는 공개 함수를 노출합니다.
/// is_one_time_witness 호출을 통해 단일 T에 대해 이 함수가 한 번만 호출될 수 있도록 합니다.
    public fun add_recoed<T:drop>(
        witness:T,
        name:String,
        ctx:&mut TxContext
    ){
        // 이 호출은 타입이 OTW인지 확인할 수 있도록 해줍니다.
        assert!(types::is_one_time_witness(&witness),ENotOneTimeWitness);
        //// 레코드를 전 세계에 공개합니다. :)
        transfer::share_object(UniqueTypeRecord<T>{
            id:object::new(ctx),
            name
        });
    }
}


module examples::my_otw{
    use std::string;
    use sui::tx_context::TxContext;
    use examples::one_time_witness_registry as registry;
    /// 타입은 모듈 이름을 대문자로 지정합니다.
    struct MY_OTW has drop {

    }
    /// 해당 타입을 얻으려면 모듈 초기화자의 첫 번째 인자를 사용하면 됩니다.
    /// 이는 완전한 인스턴스이며 참조 타입이 아닙니다.
    fun init(witness:MY_OTW,ctx:&mut TxContext){
        registry::add_recoed(
            witness,
            string::utf8(b"MY awesome record"),
            ctx
        )
    }
}