address 0x42 {
module example {
    // 이 세 가지 기능은 모두 동일합니다.

//반환 유형이 제공되지 않으면 `()`로 간주됩니다.
    fun returns_unit_1() { }


// 빈 표현식 블록에 암시적() 값이 있습니다.
    fun returns_unit_2(): () { }


// `returns_unit_1` 및 `returns_unit_2`의 명시적 버전
    fun returns_unit_3(): () { () }


    fun returns_3_values(): (u64, bool, address) {
        (0, false, @0x42)
    }
    fun returns_4_values(x: &u64): (&u64, u8, u128, vector<u8>) {
        (x, 0, 1, b"foobar")
    }
}
}