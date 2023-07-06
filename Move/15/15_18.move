//n.move
address 0x2 {
    module n {
        use 0x2::m;

        struct Wrapper has drop {
            foo: m::Foo
        }

        fun f1(foo: m::Foo){
            let x= foo.x;
            //      ^ 오류! 여기서 foo의 필드에 접근할 수 없습니다.
        }

        fun f2(){
            let foo_wrapper= Wrapper{foo:m::new_foo()}
        }
    }
}