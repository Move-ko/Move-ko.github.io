/*게임에서 동적 NFT가 중요한 이유
- 기존 NFT는 일단 생성되면 변경불가능
- 동적NFT는 외부 입력에 따라 값을 변경하도록 프로그래밍 댐
- 게임에서 동적 NFT를 사용하면 프로그램이 진행하면서 사용자의 기여도에 따라 사용자 항목의 속성을 더욱 강하게 만들수 있음
- SUI의 빠른 속도는 빠르게 진행되는 게임에서 NFT의 실시간 변경을 허용
- 또한 완전한 온체인 NFT에 대한 SUI의 포괄적인 지원은 게임 어플리케이션에서 큰 이점을 제공
*/



module examples::item {
    use sui::url::{Self,Url};
    use std::string;
    use sui::object::{Self, ID, UID};
    use sui::event;
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option::{Self, Option};
    use sui::dynamic_object_field;
    use sui::ecvrf;
    use std::vector;


    //NFT
    struct Item has key,store {
        id:UID,
        name:string::String,
        description: string::String,
        url: Url,

        itemType:u8,
        level:u8
    }

    struct OwnerShip has key {
        id:UID
    }

    struct ConsignedObj has key,store {
        id:UID,
        sender,address,
        item_axe:Option<ID>,
        item_scroll:Option<ID>,
    } 
     fun init(ctx:&mut TxContext) {
        let ownership =OwnerShip {
            id:object::new(ctx)
        }
    transfer::transfer(ownership,tx_context::sender(ctx))
     }
     //====에러코드=============
     const ENotVerified:u64= 0;
     const EItemType:u64 = 1;
     const EItemLevel:u64 = 2;
    

    struct ItemMinted has copy,drop {
        object_id:ID,
        creator:address,
        name:string::String,
    }




    struct ItemUpgrade has copy,drop {
       object_id:ID,
       creator:address,
       name:string::String,
       level:u8
    }

    struct VerifiedEvent has copy,drop {
        is_verified:bool,
    }


    public fun name(item:&Item):&string::String {
        &item.name
    }
}