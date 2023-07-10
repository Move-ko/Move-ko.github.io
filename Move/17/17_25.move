module example::test {
    struct A<T>{}

    fun foo<T>(n:u64) {
        if (n>0){
            foo<A<T>>(n-1);
        };
    }
}