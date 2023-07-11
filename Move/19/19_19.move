address 0x42 {
module data {
    struct S {}
}
module example {
    use 0x42::data::S;

    struct S { value: u64 } // 오류!
//         ^ 상위의 별칭 'S'와 충돌합니다
}
}