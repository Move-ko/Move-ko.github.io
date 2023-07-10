module example::test {
    struct A<T>{}

   // 유한한 수의 타입 -- 허용됩니다.
   // foo<T> -> foo<T> -> foo<T> -> ...는 유효합니다.
   fun foo<T>() {
        foo<T>();
    }
    // 유한한 수의 타입 -- 허용됩니다.
    // foo<T> -> foo<A<u64>> -> foo<A<u64>> -> ...는 유효합니다.
     fun foo<T>() {
        foo<A<u64>>();
    }
}