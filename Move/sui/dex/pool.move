module dex_addr::example {
    use sui::object::{Self, UID};
    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Supply, Balance};
    use sui::transfer;
    use sui::math;
    use sui::tx_context::{Self, TxContext};
    
   //공급되는 코인이 0인 경우
    const EZeroAmount: u64 = 0;

    ///풀 요금이 잘못 선정된 경우
    /// 허용되는 값: [0-10000).
    const EWrongFee: u64 = 1;

    /// 누군가 빈 풀에서 스왑을 시도할 때
    const EReservesEmpty: u64 = 2;

    /// 초기 LSP 금액이 0인 경우.
    const EShareEmpty: u64 = 3;

    ///누군가 u128 Math가 허용하는 것보다 더 많은 유동성을 추가하려고 시도하는 경우.
    const EPoolFull: u64 = 4;

    /// 수수료 계산을 위한 정수 스케일링 설정입니다.
    const FEE_SCALING: u128 = 10000;

    /// 다음 잔액 중 하나에 보유할 수 있는 최대 값
    /// a Pool.. U64 MAX / FEE_SCALING
    const MAX_POOL_VALUE: u64 = {
        18446744073709551615 / 10000
    };

    struct LSP<phantom P,phantom A, phantom B> has drop {
        
    }

    strucrt

}