
/*
엔트리 함수의 가시성 수정자는 함수가 직접 호출될 수 있도록 합니다
(예: 트랜잭션 내에서). 이는 public과 같은 다른 가시성 수정자와 조합하여 
사용할 수 있습니다. 
public은 다른 모듈에서 호출할 수 있도록 허용하며,
public(friend)는 친구 모듈에서 호출할 수 있도록 허용합니다
*/
module example::object {
    use sui::transfer;
    use sui::object::{Self,UID};
    use sui::tx_context::TxContext;

    struct Object has key {
        id:UID
    }
    /*
    - 함수가 public으로 정의된 경우 어떤 모듈이든 호출할 수 있습니다.
    - 엔트리포인트가 아닌 함수들은 반환 값을 가질 수도 있습니다. 번역
    */

    public fun create(ctx:&mut TxContext):Object{
        Object {id:object::new(ctx)}
    }
    /*
    - 엔트리포인트는 반환 값을 가질 수 없습니다. 왜냐하면 트랜잭션 내에서만 직접 호출되며 반환된 값은 사용할 수 없습니다.
    - 그러나 public 없이 entry를 사용하면 다른 Move 모듈에서 이 메서드를 호출할 수 없습니다.
    */
    entry fun creatr_and_transfer(to:address,ctx:&mut TxContext){
        transfer::transfer(create(ctx,to))
    }
}