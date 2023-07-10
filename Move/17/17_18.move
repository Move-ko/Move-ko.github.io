module example::test {
    struct Foo<T:Key> {x:T}
   
    struct Bar {x:Foo<u8>}
    //                ^ 오류! u8에는 'key' 능력이 없습니다.
    
     struct Baz<T> { x: Foo<T> }
    //                      ^ 오류! T에는 'key' 능력이 없습니다.

}