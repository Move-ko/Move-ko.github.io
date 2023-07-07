module example::test {
    struct Foo<T> has copy,drop{x:T}

    struct Bar<T1,T2>has copy,drop {
        x:T1,
        y:vector<T2>,
    }
}