module example::test {
  fun copy_resource_via_ref_bad(c:Coin){
    let c_ref= &c;
    let counterfeit:Coin= *c_ref;//허용되지 않습니다!
    pay(c);
    pay(counterfeit);
  }
}