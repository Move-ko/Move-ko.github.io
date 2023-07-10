module example::test {
    struct Foo<T> {
        x:Foo<u64>// 오류! 'Foo'가 'Foo'를 포함하고 있습니다.
    }

    struct Bar<T> {
        x:Bar<T>// 오류! 'Bar'가 'Bar'를 포함하고 있습니다.
    }
  // 오류! 'A'와 'B'는 사이클을 형성하여 허용되지 않습니다.
    struct A<T> {
        x:B<T,u64>
    }

    struct B<T1,T2>{
        x:A<T1>
        y:A<T2>
    }
}