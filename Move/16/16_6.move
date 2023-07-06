module example::test {
    const DIV_BY_ZERO: u64 = 1 / 0; // 오류!
    const SHIFT_BY_A_LOT: u64 = 1 << 100; // 오류!
    const NEGATIVE_U64: u64 = 0 - 1; // 오류!
}