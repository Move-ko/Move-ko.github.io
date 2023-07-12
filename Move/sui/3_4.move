/*
핫 포테이토는 어떤 능력도 갖지 않는 구조체로, 해당 모듈 내에서만 패킹(packing) 및 언패킹(unpacking)할 수 있습니다. 이 구조체에서는 함수 A가 포테이토(potato)를 반환한 경우 함수 B를 호출해야 합니다. 함수 B는 해당 포테이토를 소비(consume)합니다.
*/

module examples::trade_in {
    use sui::transfer;
    use sui::sui::SUI;
    use sui::coin::{Self,Coin};
    use sui::object::{Self,UID};
    use sui::tx_context::{TxContext};


/// 첫 번째 핸드폰 모델의 가격
    const MODEL_ONE_PRICE:u64= 10000;
    /// 두 번째 핸드폰 모델의 가격

    const MODEL_TWO_PRICE:u64 = 20000;
/// 존재하지 않는 모델을 구매하려고 할 때

    const EWrongModel:u64 =1;
/// 지불된 금액이 가격과 일치하지 않을 때

    const EIncorrectAmount:u64= 2;
/// 핸드폰; 구매하거나 새로운 모델로 교환할 수 있음

    struct Phone has key,store{id:UID,model:u8}

/// 지불 가능한 영수증. 직접 지불하거나 교환 옵션으로 지불해야 함.
/// 저장, 소유, 삭제할 수 없음 - `trade_in` 또는 `pay_full` 중 하나를 선택하여 사용해야 함
    struct Receipt{pirce:u64}
/// 핸드폰을 먼저 받고 나중에 지불합니다.
/// 영수증은 `pay_full` 또는 `trade_in`과 같이 영수증을 받는 함수에 전달되어야 합니다.
    public fun buy_phone(model:u8,ctx:&mut TxContext):(phone,Receipt){
        assert!(model==1||model==2,EWrongModel);

        let price = if(model ==1)MODEL_ONE_PRICE else MODEL_TWO_PRICE;

        (
            Phone{id:object::new(ctx)model},
            Receipt{price}
        )
    }
/// 전액 지불하고 영수증을 소비합니다.

    public fun pay_full(rerceipt:Receipt,payment:Coin<SUI>) {
        let Receipt {price}= receipt;
        assert!(coin::value(&payment)==price,EIncorrectAmount);

          // 단순함을 위해 직접 @examples 계정으로 이체합니다.
    transfer::public_transfer(payment, @examples);
    }
/// 기존 핸드폰을 반납하고 새 핸드폰 구매에 50% 할인을 받습니다.

    public fun trade_in(receipt:Receipt,old_phone:Phone,payment:Coin<SUI>) {
        let Receipt{price}= receipt;
        let tradein_price= if(old_phone.model==1)MODEL_ONE_PRICE else MODEL_TWO_PRICE;
        let to_pay= price - (tradein_price/2);

        assert!(coin::value(&payment)==to_pay,EIncorrectAmount);
        transfer::public_transfer(old_name,@examples);
        transfer::public_transfer(payment,@examples);
    }
}    