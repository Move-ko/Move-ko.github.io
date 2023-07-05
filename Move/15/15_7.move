address 0x2 {
    module m {
        struct Foo {
            x:u64,
            y:bool
        }

        struct Bar {
            foo:Foo
        }

        struct Baz {

        }

        fun example_destroy_foo(){
            let foo = Foo { x:3 ,y:false};
            let Foo { x ,y:foo_y} = foo;
            //        ^ x: x와 같은 축약형

            // 두 개의 새로운 바인딩
            //   x: u64 = 3
           //    foo_y: bool = false
        }

        fun example_detroy_foo_wildcard(){
            let foo = Foo{x:3,y:false};
            let Foo {x,y:_}= foo;
            // y가 와일드카드에 바인딩되었으므로 새로운 바인딩은 하나뿐입니다.
            // x: u64 = 3
        }

        fun example_destroy_foo_assignment(){
            let x= u64;
            let y =bool;
            Foo {x,y}= Foo{x:3,y:false};
             // 기존 변수 x와 y를 변경합니다.
             // x = 3, y = false

        }

        fun exmaple_foo_ref(){
            let foo= Foo{x:3,y:false};
            let Foo {x,y}=&foo;

           // 두 개의 새로운 바인딩이 있습니다.
           // x: &u64
           // y: &bool
        }

        fun example_foo_ref_mut(){
            let foo = Foo {x:3,y:false};
            let Foo {x,y}= &mut foo;
            // 두 개의 새로운 바인딩이 있습니다.
            // x: &mut u64
            // y: &mut bool
        }

        fun example_destroy_bar(){
            let bar = Bar {foo:Foo{x:3,y:false}};
            let Bar {foo:Foo {x,y}}= bar;
                       // ^ 중첩된 패턴

          // 두 개의 새로운 바인딩이 있습니다.
          // x: u64 = 3
          // y: bool = false
        }

        fun example_destroy_baz(){
            let baz = Baz{};
            let Baz {}= baz;
        }
    }
}