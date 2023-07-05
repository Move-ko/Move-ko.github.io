address 0x2 {
    module m {
        struct Foo {x:u64,y:bool}
        struct Bar {}
        struct Baz {foo:Foo,}
        //                 ^ 참고: 끝에 쉼표(Trailing comma)가 있는 것도 괜찮습니다.
    }
}