
/*
Init 함수는 연관된 모듈이 게시될 때에만 한 번 실행되는 특별한 함수입니다. 항상 동일한 형식을 가지며 인자는 하나뿐입니다
*/

module example::one_timer {
    use sui::transfer;
    use sui::object::{Self,UID};
    use sui::tx_context::{Self,TxContext};
    /// 유일무이한 - 모듈 초기화자에서 생성됩니다.
    struct Creatorcapability has key {
        id :UID
    }
    /*
    이 함수는 모듈 게시 시에만 한 번 호출됩니다.
    이 함수를 사용하여 한 번만 발생해야 하는 작업을 수행합니다. 예를 들어,
    여기에서는 모듈 작성자만이 CreatorCapability 구조체의 버전을 소유할 수 있습니다.
    

    "move"의 "init" 함수와 Solidity 언어의 "constructor"는 비슷한 개념을 나타냅니다. 이 두 가지 개념은 모두 객체나 스마트 계약을 초기화하는 데 사용됩니다.

    "move" 언어에서 "init" 함수는 객체를 초기화하는 역할을 합니다. 객체는 "init" 함수를 호출하여 필요한 상태를 설정하고 초기화합니다. 일반적으로 객체가 생성된 후에 "init" 함수를 호출하여 사용자 지정 초기화 로직을 수행합니다.

    반면 Solidity 언어에서 "constructor"는 스마트 계약을 배포할 때 실행되는 특수한 함수입니다. "constructor" 함수는 스마트 계약의 상태 변수를 초기화하고 다른 초기화 작업을 수행합니다. 스마트 계약을 배포할 때 한 번만 실행되며, 계약의 상태를 설정하는 데 사용됩니다.

    둘 다 초기화 작업을 수행하는 함수이지만, "move"의 "init" 함수는 객체의 메서드로 호출되는 반면, Solidity의 "constructor"는 계약 배포 시 자동으로 실행되는 특수한 함수입니다.
    */
    fun init (ctx:&mut TxContext){
        transfer::transfer(CreatorCapbility {
            id:object::new(ctx),
        },tx_context::sender(ctx))
    }
}