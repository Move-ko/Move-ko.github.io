address 0x2 {
    module m {
        struct Foo {x:u64}

        public fun destroying_resource!_fixed(){
            let foo = Foo {x:100};
            let Foo {x:_}= foo;
        }
    }
}