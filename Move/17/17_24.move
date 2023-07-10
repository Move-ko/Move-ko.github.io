module example::test {
    struct A<T> {}
    // 무한한 수의 타입 -- 허용되지 않습니다.
    // 오류!
    // foo<T1, T2> -> bar<T2, T1> -> foo<T2, A<T1>>
    // -> bar<A<T1>, T2> -> foo<A<T1>, A<T2>>
    // -> bar<A<T2>, A<T1>> -> foo<A<T2>, A<A<T1>>>
    // -> ...
   fun foo<T1, T2>() {
        bar<T2, T1>();
    }

    fun bar<T1, T2> {
        foo<T1, A<T2>>();
    }
}