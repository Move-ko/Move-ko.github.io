module example::test {
    struct S<T1,phantom T2> has copy {f:T1}
    struct NoCopy {}
    struct HasCopy has copy {}
}