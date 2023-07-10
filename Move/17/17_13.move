module example::test {
    struct S1<phantom T>{f:T} 
                         //^ 오류: 팬텀 위치가 아닙니다.

    struct S2<T> { f: T }

    struct S3<phantom T> { f: S2<T> }
                               //^ 오류: 팬텀 위치가 아닙니다.

}