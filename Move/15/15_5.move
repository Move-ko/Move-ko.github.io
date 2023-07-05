address 0x42 {
    module m {
        struct Foo has drop {x:u64,y:bool}
        struct Baz has drop {foo:Foo}

        fun example(){
            let foo = Foo {x:0,y:false};
            let baz = Baz {foo :foo};
        }
    }
}