/*
객체를 자유롭게 이전할 수 있게 하려면 키(key)와 저장(store) 능력의 조합을 사용합니다.
*/
// 사용자 정의 데이터에 대한 자유로운 이전이 가능한 래퍼입니다.
module examples::wrapper {
   use sui::object::{Self,UID};
   use sui::tx_context::TxContext;

   //store를 가진 객체는 사용자 정의 이전 구현 없이 다른 모듈로 이전할 수 있습니다.
   struct Wrapper<T:store>has key,stroe {
    id:UID,
    contents:T
   }

   // Container의 내용을 읽는 뷰(View) 함수입니다. 
   public fun contents<T:store>(c:&Wrapper<T>):&T {
    &c.contents
   }
   //누구나 새로운 객체를 생성할 수 있습니다.
   public fun create<T:store>(
    contents:T,ctx:&mut TxContext
   ):Wrapper<T> {
      Wrapper {
        contents,
        id:object::new(ctx),
      }
   }
   //Wrapper를 파괴하고 T를 반환합니다.
   public fun destroy<T:store>(c:Wrapper<T>):T {
    let Wrapper {id,contents}= c;
    object::delete(id);
    contents
   }
}

module example::profile {
    use sui::transfer;
    use sui::url::{Self,Url};
    use std::string::{Self,String};
    use sui::tx_context::{Self,TxContext};

   //Wrapper 기능 사용하기 
   use 0x0::wrapper;
   //객체가 아닌 프로필 정보는 전송 가능한 컨테이너로 래핑될 수 있습니다.
   struct ProfileInfo has store {
    name:String,
    url:Url,
   }
   //ProfileInfo에서 name 필드를 읽습니다.
   public fun name(info:&profileInfo):&String{
    &info.name
   }
   //ProfileInfo에서 url 필드를 읽습니다.
   public fun url (info:&ProfileInfo):&Url{
    &info.url
   }
   
  //ProfileInfo를 생성하고 Wrapper로 래핑한 다음 송신자에게 전송합니다.
  public fun create_profile(
    name:vector<u8>,url:vector<u8>,ctx:&mut TxContext
  ){
      // 새로운 컨테이너를 생성하고 ProfileInfo를 해당 컨테이너에 래핑합니다.
      let container = Wrapper::create(ProfileInfo{
        name:string::utf8(name),
        url:url::new_unsafe_from_bytes(url)
      },ctx);
     // Wrapper 타입은 자유롭게 전달할 수 있습니다.
     transfer::public_tranfer(container,tx_context::sender(ctx))

  }




 













}