address 0x2 {
    module m {
        struct Foo has copy,drop {x:u64}

        public fun run(){
            let foo = Foo{x:100};
            let foo_copy= copy foo;
            // ^ 이 코드는 foo를 복사합니다. 반면, let x = foo 또는 let x = move foo는 모두 foo를 이동시킵니다.
            let x= foo.x;//x= 100
            let x_copy= foo_copy.x; //x=100

            //함수가 반환될 때 foo와 foo_copy 모두 암묵적으로 폐기됩니다.
        }
    }
}