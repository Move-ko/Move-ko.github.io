module example::test {
    const RULE:bool = true && false;
    const CAP:u64 = 10* 100+1;
    const SHIFTY:u8= {
        (1 <<1)*(1<<2) * (1 << 3) * (1 << 4)
    };
    const HALF_MAX: u128 = 340282366920938463463374607431768211455 / 2;
    const REM: u256 = 57896044618658097711785492504343953926634992332820282019728792003956564819968 % 654321;
    const EQUAL: bool = 1 == 1;
}