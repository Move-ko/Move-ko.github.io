module example:test {
    struct A<T>{}
    // 무한한 수의 타입 -- 허용되지 않습니다.
    // 오류!
    // foo<T> -> foo<A<T>> -> foo<A<A<T>>> -> ...
    fun foo<T>() {
        foo<A<T>>();
    }
}