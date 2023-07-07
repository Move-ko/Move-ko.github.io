/*
Shared Object
- 공유 객체(Shared object)는 sui::transfer::share_object 함수를 사용하여 공유되며 모든 사람이 접근할 수 있는 객체입니다.
*/
//Owned 객체와는 달리, Shared 객체는 네트워크 상의 누구나 접근할 수 있습니다. 이러한 종류의 객체의 확장된 기능과 접근성은 필요에 따라 추가적인 노력을 통해 접근을 보호하는 것이 필요합니다. 
module example::donuts {
    use sui::transfer;
    use sui::sui::SUI;
    use sui::coin::{Self,Coin};
    use sui::object::{Self,UID};
    use sio::balance::{Self,Balance};
    use sui::tx_context::{Self,TxContext};

    const ENotEnough:u64=0;
}