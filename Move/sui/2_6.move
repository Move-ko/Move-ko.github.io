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



   
}