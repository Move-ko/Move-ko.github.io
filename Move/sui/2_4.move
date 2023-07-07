/*
String
- Move에는 문자열을 위한 네이티브 타입은 없지만, 편리한 래퍼(wrapper)가 있습니다!
*/
module example::strings{
    use sui::object::{Self,UID};
    use sui::tx_context::TxContext;
    // UTF-8 문자열에 대한 타입 래퍼를 얻기 위해 이 종속성을 사용하세요.
    use std::string::{Self,String};
    //String 타입을 가지는 더미(dummy) 객체입니다.
    struct Name has key,store {
        id:UID,
        //여기에 있습니다 - String 타입입니다.
        name:String
    }
   //원시 바이트를 전달하여 이름 객체를 생성합니다.
    public fun issue_name_nft (
        name_bytes:vector<u8>,ctx:&mut TxContext
    ):Name {
        Name {
            id:object::new(ctx),
            name:string::utf8(name_bytes)
        }
    }
}







