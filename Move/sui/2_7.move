/*
"Sui Move"에서는 키 능력만으로 정의된 객체는 기본적으로 이전될 수 없습니다. 
이전을 가능하게 하려면 게시자가 사용자 지정 전송 함수를 생성해야 합니다. 
이 함수에는 수수료와 같은 인수를 포함할 수 있으며, 사용자는 전송을 위해 지불해야 하는 금액입니다.
*/

module examples::restructed_transfer {
    use sui::tx_context::{Self,TxContext};
    use sui::balance::{Self,Balance};
    use sui::coin::{Self,Coin};
    use sui::object::{Self,UID};
    use sui::transfer;
    use sui::sui::SUI;

    //지불된 금액이 전송 가격과 같지 않을 때 사용합니다.
    const EWrongAmount:u64= 0;

    //TitleDeed를 생성할 수 있는 능력을 소지한 사용자를 위한 기능입니다.
    struct GovernmentCapability has key {id:UID}
   
   //소유권을 나타내는 개체입니다. 권한이 있는 기관에 의해서만 발행될 수 있습니다.

   struct TitleDeed has key {
    id:UID,
   }
   /// 부동산 소유권 이전을 승인하고 수수료를 징수하는 중앙 레지스트리.
   struct LandRefistry has key {
    id:UID,
    balance,Balance<SUI>,
    fee:u64
   }
   //모듈 초기화 시 LandRegistry를 생성합니다.
   fun init(ctx:&mut TxContext){
    transfer::transfer(GovernmentCapability {
        id:object::new(ctx)
    },tx_context::sender(ctx));

    transfer::share_object(LandRefistry{
        id:object::new(ctx),
        balance:balance::zero<SUI>(),
        fee:10000
    })
   }
   // TitleDeed를 생성하고 소유자에게 이전합니다.
   // 이 작업은 GovernmentCapability의 소유자만 수행할 수 있습니다.
   public entry fun issue_title_deed(
    _:&GovernmentCapability,
    for:address,
    ctx:&mut TxContext
   ){
    transfer::transfer(TitleDeed {
        id:object::new(ctx)
    },for)
   }

   // 사용자 정의 이전 함수입니다. TitleDeed에 store 기능이 없기 때문에 필요합니다.
   //  TitleDeed의 모든 이전은 이 함수를 통해 이루어지며 LandRegistry에 수수료를 지불해야 합니다.
   public entry fun transfer_ownership(
    registry:&mut LandRefistry,
    paper:TitleDeed,
    fee:Coin<SUI>,
    to:address,
   ){
    assert!(coin::value(&fee)==registry.fee,EWrongAmount);
    // LandRegistry의 잔고에 지불을 추가합니다.
    balance::join(&mut registry.balance,coin::into_balance(fee));
    // 마지막으로 transfer 함수를 호출합니다.
    transfer::transfer(paper,to)
   }
}