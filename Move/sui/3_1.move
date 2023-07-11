/*
Capability는 객체로 작업을 승인하는 패턴입니다. 가장 일반적인 Capability 중 하나는 TreasuryCap입니다 (sui::coin에서 정의됨).
*/

module examples::item {
    use sui::transfer;
    use sui::object::{Self,UID};
    use std::string::{Self,String};
    use sui::tx_context::{Self,TxContext};
/// 새로운 Item을 생성하는 능력을 표시하는 타입입니다.
    struct AddminCap has key {id :UID}
/// 사용자 정의 NFT와 유사한 타입입니다.
    struct Item has key,store {id :UID ,name:String}
/// 모듈 이니셜라이저는 모듈 게시 시에 한 번 호출됩니다.
/// 여기서는 AdminCap의 하나의 인스턴스만 생성하고 퍼블리셔에게 전송합니다.
    fun init(ctx:&mut TxContext){
        transfer::transfer(AdminCap{
            id:object::new(ctx)
        },tx_context::sender(ctx))
    }
    // AdminCap이 첫 번째 인수로 전달되지 않은 경우에는 진입 함수를 호출할 수 없습니다. 따라서 AdminCap의 소유자만이 이 작업을 수행할 수 있습니다
    public entry fun create_and_send(
        _:&AdminCap,name:vector<u8>,to:address,ctx:&mut TxContext
    ){
        transfer::transfer(Item{
            id:object::new(ctx),
            name:string::utf8(name)
        },to)
    }
}