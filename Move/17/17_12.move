module example::test {
    struct S1<phantom T1,T2>{f:u64}
                   // ^^
                   //올바름: T1은 구조체 정의 내에서 나타나지 않습니다.
    struct S2<phantom T1,T2>{f:S1<T1,T2>}
                               // ^^
                               //올바름: T1은 팬텀 위치에 나타납니다.
}