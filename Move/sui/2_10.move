
/*
Publisher 객체는 출판자 권한을 나타내는 방법으로 사용됩니다. 객체 자체는 특정한 사용 사례를 의미하지 않으며, 주로 두 가지 주요 함수를 가지고 있습니다: package::from_module<T> 및 package::from_package<T>는 T 타입이 Publisher 객체가 생성된 모듈 또는 패키지에 속하는지 확인하는 기능을 제공합니다.

새로운 객체를 정의하는 대부분의 패키지에 대해 Publisher 객체를 발급하는 것을 강력히 권장합니다. 이는 "Display"를 설정하고 "Kiosk" 생태계에서 해당 타입을 거래할 수 있도록 하기 위해 필요합니다.

Publisher 자체는 유틸리티일지라도 "소유 증명" 기능을 가능하게 합니다. 예를 들어, 객체 디스플레이에 중요한 역할을 합니다.

Publisher를 설정하려면 One-Time-Witness (OTW)가 필요합니다. 이를 통해 특정 모듈에 대해 Publisher 객체가 한 번만 초기화되고 (패키지의 경우 여러 개일 수 있음) 생성 함수가 게시 트랜잭션에서 호출되는 것을 보장합니다.


*/
//OTW를 정의하고 발신자에게 Publisher 객체를 요청하는 간단한 패키지.
module example::owner {
    use sui::tx_context::TxContext;
    use sui::package;
    /// OTW는 drop 능력만을 가진 구조체로, 모듈의 이름을 따르되 대문자로 표기됩니다. 자세한 내용은 "One Time Witness" 페이지를 참조하십시오.
    struct OWNER has drop {}

    // 더미 체크에 사용할 다른 타입
    struct ThisType {}
   /// 모듈이 게시된 후, 발신자는 Publisher 객체를 받게 됩니다. 이 객체는 Display를 설정하거나 Kiosk 시스템에서 전송 정책을 관리하는 데 사용할 수 있습니다.
    fun init(otw:OWNER,ctx:&mut TxContext){
        package::claim_and_keep(otw,ctx)
    }
}
/// Publisher 객체를 활용하여 감사의 표시로 토큰을 제공하고 소유한 타입에 대한 TypeOwnerCap을 제공하는 모듈
module example::type_owner {
    use sui::object::{Self,UID};
    use sui::tx_context::TxContext;
    use sui::package::{Self,Publisher};

/// 잘못된 Publisher로 타입의 소유권을 요청하는 시도.
    const EnoOwner:u64=0;
    /// "객관적인" 소유 확인을 원하는 사람들에게 부여되는 능력 :)
    struct TypeOwnerCap<phantom T> has key,store {
        id:UID
    }
    /// 호출자가 타입 T를 소유하고 있는지 확인하기 위해 Publisher 객체를 사용합니다
    public fun prove_ownership<T>(
        Publisher:&Publisher,ctx:&mut TxContext
    ):TypeOwnerCap<T>{
        assert!(package::from_package<T>(Publisher),EnoOwner);
        TypeOwnerCap<T>{id:object::new(ctx)}
    }

}