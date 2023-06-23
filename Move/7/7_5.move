module example::test {
   fun destroy_resource_via_ref_bad(ten_coins:Coin,c:Coin){
    let ref= &mut ten_coins;
    *ref =c;//허용되지 않음-10개의 코인을 파괴합니다!
   }
}