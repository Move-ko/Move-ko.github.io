address 0x2 {
    module m {
        struct Foo { x:u64 }

        public fun copying_resource(){
            let foo = Foo {x:100};
            let foo_copy= copy foo;//오류! '복사'는 '복사' 능력을 요구합니다.
            let foo_ref = &foo;
            let another_copy= *foo_ref//오류! 역참조는 '복사' 능력을 요구합니다.
        }
        public fun destroying_resource1(){
            let foo = Foo{x:100};
            // 오류! 함수가 반환되었을 때, foo는 여전히 값이 남아 있습니다.
            // 이 파괴는 'drop' 능력을 요구합니다.
        }
        public fun destroying_resource2(f: &mut Foo) {
           *f = Foo {x:100}//오류
                           //과거 값을 파괴하기 위해 쓰기를 통해 'drop' 능력이 필요합니다.
        }
    }

    
}