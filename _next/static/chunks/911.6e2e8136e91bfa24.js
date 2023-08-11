"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{4911:function(n,o,t){t.r(o);var e=t(85893),r=t(41181),i=t(15861),l=t(87357),x=t(38154);o.default=()=>(0,e.jsx)(r.ZP,{container:!0,children:(0,e.jsxs)(r.ZP,{xs:12,children:[(0,e.jsx)(l.Z,{sx:{width:"100%"},children:(0,e.jsx)(i.Z,{variant:"h3",gutterBottom:!0,children:"구조체 와 자원"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"구조체(struct)는 타입화된 필드를 포함하는 사용자 정의 데이터 구조입니다. 구조체는 다른 구조체를 포함하여 모든 비참조(non-reference) 타입을 저장할 수 있습니다."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"구조체 값이 복사될 수 없고 삭제될 수 없는 경우, 우리는 종종 해당 구조체 값을 자원(resource)으로 참조합니다. 이 경우 자원 값은 함수의 종료시에 소유권이 전달되어야 합니다. 이 특성은 자원을 전역 저장 스키마를 정의하거나 중요한 값을 표현하는 데 매우 유용하게 사용됩니다(예: 토큰)."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"기본적으로 구조체는 선형(linear)이고 일시적(ephemeral)입니다. 이는 구조체가 복사될 수 없고 삭제될 수 없으며, 전역 저장소에 저장될 수 없다는 것을 의미합니다. 이는 모든 값이 소유권이 전달되어야 한다는 것을 의미하며, 프로그램의 실행이 끝날 때까지 값들을 처리해야 한다는 것을 의미합니다. 우리는 구조체에 값을 복사하거나 삭제하고 전역 저장소에 저장하거나 전역 저장 스키마를 정의하는 능력을 부여함으로써 이 동작을 완화시킬 수 있습니다."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"구조체(Structs) 정의하기"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"구조체는 모듈 내부에서 정의되어야 합니다."})}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module m {\n        struct Foo {x:u64,y:bool}\n        struct Bar {}\n        struct Baz {foo:Foo,}\n        //                 ^ 참고: 끝에 쉼표(Trailing comma)가 있는 것도 괜찮습니다.\n    }\n}\n"}),(0,e.jsxs)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:[(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"구조체는 재귀적으로 정의될 수 없으므로, 다음과 같은 정의는 올바르지 않습니다."}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    struct Foo {x:Foo}\n   //              ^ 오류! Foo는 Foo를 포함할 수 없습니다.\n}\n"}),(0,e.jsxs)(i.Z,{variant:"body1",gutterBottom:!0,children:["앞서 언급한 대로, 기본적으로 구조체 선언은 선형적이고 일시적입니다. 따라서 값을 복사하거나 삭제하거나 전역 저장소에 저장하거나 저장 스키마로 사용하는 등의 작업에 값을 사용할 수 있도록 하려면, 구조체에 has"," <ability>"," 주석을 추가하여 구조체에 능력을 부여할 수 있습니다."]}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module m {\n        struct Foo has copy,drop {\n            x:u64,\n            y:bool\n        }\n    }\n}\n"})]}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"이름 짓기"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"구조체는 반드시 영문 대문자 A부터 Z까지의 문자로 시작해야 합니다. 첫 글자 다음에는 밑줄(_), 영문 소문자 a부터 z까지의 문자, 영문 대문자 A부터 Z까지의 문자, 또는 숫자 0부터 9까지 포함될 수 있습니다."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    struct Foo {}\n    struct BAR {}\n    struct B_a_z_4_2 {}\n}\n\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"A부터 Z로 시작하는 이름 지정 제한은 향후 언어 기능을 위한 여지를 주기 위해 설정되었습니다. 이 제한은 나중에 제거될 수도 있습니다."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"구조체(Structs) 생성"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'구조체 타입의 값을 생성하려면 구조체 이름을 지정하고, 각 필드에 대한 값들을 지정하여 "패킹"할 수 있습니다.'})}),(0,e.jsx)(x.Z,{code:"  address 0x42 {\n    module m {\n        struct Foo has drop {x:u64,y:bool}\n        struct Baz has drop {foo:Foo}\n\n        fun example(){\n            let foo = Foo {x:0,y:false};\n            let baz = Baz {foo :foo};\n        }\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"만약 필드와 동일한 이름을 가진 로컬 변수를 사용하여 구조체 필드를 초기화하려면 다음과 같은 축약형을 사용할 수 있습니다:"})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        //둘은 동등합니다\n        let baz = Baz {foo:foo};\n    \n        let baz= Baz {foo};\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'이를 종종 "필드 이름 퍼닝"이라고 부릅니다.'})}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module m {\n        struct Foo {\n            x:u64,\n            y:bool\n        }\n\n        struct Bar {\n            foo:Foo\n        }\n\n        struct Baz {\n\n        }\n\n        fun example_destroy_foo(){\n            let foo = Foo { x:3 ,y:false};\n            let Foo { x ,y:foo_y} = foo;\n            //        ^ x: x와 같은 축약형\n\n            // 두 개의 새로운 바인딩\n            //   x: u64 = 3\n           //    foo_y: bool = false\n        }\n\n        fun example_detroy_foo_wildcard(){\n            let foo = Foo{x:3,y:false};\n            let Foo {x,y:_}= foo;\n            // y가 와일드카드에 바인딩되었으므로 새로운 바인딩은 하나뿐입니다.\n            // x: u64 = 3\n        }\n\n        fun example_destroy_foo_assignment(){\n            let x= u64;\n            let y =bool;\n            Foo {x,y}= Foo{x:3,y:false};\n             // 기존 변수 x와 y를 변경합니다.\n             // x = 3, y = false\n\n        }\n\n        fun exmaple_foo_ref(){\n            let foo= Foo{x:3,y:false};\n            let Foo {x,y}=&foo;\n\n           // 두 개의 새로운 바인딩이 있습니다.\n           // x: &u64\n           // y: &bool\n        }\n\n        fun example_foo_ref_mut(){\n            let foo = Foo {x:3,y:false};\n            let Foo {x,y}= &mut foo;\n            // 두 개의 새로운 바인딩이 있습니다.\n            // x: &mut u64\n            // y: &mut bool\n        }\n\n        fun example_destroy_bar(){\n            let bar = Bar {foo:Foo{x:3,y:false}};\n            let Bar {foo:Foo {x,y}}= bar;\n                       // ^ 중첩된 패턴\n\n          // 두 개의 새로운 바인딩이 있습니다.\n          // x: u64 = 3\n          // y: bool = false\n        }\n\n        fun example_destroy_baz(){\n            let baz = Baz{};\n            let Baz {}= baz;\n        }\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"구조체와 필드 빌림"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"& 및 &mut 연산자는 구조체나 필드에 대한 참조를 생성하는 데 사용될 수 있습니다. 이 예시들은 몇 가지 선택적인 타입 어노테이션 (예: : &Foo)을 포함하여 작업의 타입을 보여주기 위해 포함되었습니다."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo = Foo{x:3,y:true};\n        let foo_ref:&Foo = &foo;\n        let y= bool= foo_ref.y; // 구조체에 대한 참조를 통해 필드를 읽는 중입니다.\n        let x_ref:&u64 = &foo.x;\n\n        let x_ref_mut:&mut u64= &mut foo.x;\n        *x_ref_mut= 42;// 가변 참조를 통해 필드를 수정 중입니다.\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"중첩된 구조체의 내부 필드를 빌릴 수 있습니다. ."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo= Foo{x:3,y:true};\n        let bar= Bar{foo};\n        \n        let x_ref= &bar.foo.x;\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"또한 구조체에 대한 참조를 통해 필드를 대여할 수도 있습니다."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo = Foo {x:3,y:true};\n        let foo_ref= &foo;\n        let x_ref= &foo_ref.x;\n        // 이는 let x_ref = &foo.x와 동일한 효과를 가지고 있습니다.\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"필드 읽기와 쓰기"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"만약 필드의 값을 읽고 복사해야 한다면, 대여한 필드를 역참조할 수 있습니다."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo = Foo {x:3,y:true};\n        let bar = Bar {foo:copy foo};\n        let x:u64 = *foo.x;\n        let y:bool = *&foo.y;\n        let foo2:Foo= *&bar.foo;\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"필드가 암시적으로 복사 가능한 경우, 점 연산자를 사용하여 구조체의 필드를 대여하지 않고 읽을 수 있습니다. (복사 가능한 스칼라 값만 암시적으로 복사 가능합니다.)"})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo =Foo{x:3,y:true};\n        let x= foo.x; //x==3\n        let y= foo.y; //y ==true;\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"점 연산자는 연쇄적으로 사용하여 중첩된 필드에 접근할 수 있습니다."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let baz= Baz{ foo:Foo{x:3,y:true}};\n        let x= baz.foo.x;;//x= 3;\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"그러나 이는 벡터나 다른 구조체와 같은 비기본 타입을 포함하는 필드에 대해서는 허용되지 않습니다."})}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo =Foo{x:3,y:true};\n        let bar= Bar {foo};\n        let foo2:Foo= *&bar.foo;\n        let foo3:Foo= bar.foo;// 오류! *&를 사용하여 명시적으로 복사를 추가해야 합니다.\n    }\n}\n"}),(0,e.jsxs)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:[(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이 설계 결정의 이유는 벡터나 다른 구조체를 복사하는 것이 비용이 많이 들 수 있는 작업일 수 있기 때문입니다. 프로그래머는 이 복사 작업을 인식하고 다른 사람들도 명시적인 *& 구문을 통해 인식하도록 주의해야 합니다."}),(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"필드를 읽는 것 외에도, 점 구문을 사용하여 필드를 수정할 수 있습니다. 이는 필드가 기본 타입이든 다른 구조체이든 상관없이 가능합니다."})]}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n       let foo = Foo { x: 3, y: true };\n       foo.x = 42;     // foo = Foo { x: 42, y: true }\n       foo.y = !foo.y; // foo = Foo { x: 42, y: false }\n       let bar = Bar { foo };            // bar = Bar { foo: Foo { x: 42, y: false } }\n       bar.foo.x = 52;                   // bar = Bar { foo: Foo { x: 52, y: false } }\n       bar.foo = Foo { x: 62, y: true }; // bar = Bar { foo: Foo { x: 62, y: true } }\n    }\n}\n"}),(0,e.jsxs)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:[(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이 설계 결정의 이유는 벡터나 다른 구조체를 복사하는 것이 비용이 많이 들 수 있는 작업일 수 있기 때문입니다. 프로그래머는 이 복사 작업을 인식하고 다른 사람들도 명시적인 *& 구문을 통해 인식하도록 주의해야 합니다."}),(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"점 구문은 구조체에 대한 참조를 통해서도 동작합니다. ."})]}),(0,e.jsx)(x.Z,{code:"  module example::test {\n    fun main(){\n        let foo = Foo {x:3,y:true};\n        let foo_ref= &mut foo;\n        foo_ref.x= foo_ref.x+1;\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"특권 있는 구조체 작업"})}),(0,e.jsxs)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:[(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"구조체 타입 T에 대한 대부분의 구조체 작업은 T를 선언한 모듈 내에서만 수행할 수 있습니다:"}),(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'- 구조체 타입은 구조체를 정의한 모듈 내에서만 생성("패킹") 및 해제("언패킹")할 수 있습니다.'}),(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"- 구조체의 필드는 구조체를 정의한 모듈 내에서만 접근할 수 있습니다."}),(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이러한 규칙을 따르면, 모듈 외부에서 구조체를 수정하려면 해당 구조체를 위한 공개 API를 제공해야 합니다. 이 장의 마지막 부분에는 이에 대한 예제가 포함되어 있습니다. 그러나 구조체 타입은 항상 다른 모듈이나 스크립트에서 볼 수 있습니다."})]}),(0,e.jsx)(x.Z,{code:"  //m.move\n  address 0x2 {\n      module m {\n        struct Foo has drop {x:u64}\n  \n        public fun new_foo() : Foo {\n            Foo { x : 42}\n        }\n      }\n  }\n"}),(0,e.jsx)(x.Z,{code:"  //n.move\n  address 0x2 {\n      module n {\n          use 0x2::m;\n  \n          struct Wrapper has drop {\n              foo: m::Foo\n          }\n  \n          fun f1(foo: m::Foo){\n              let x= foo.x;\n              //      ^ 오류! 여기서 foo의 필드에 접근할 수 없습니다.\n          }\n  \n          fun f2(){\n              let foo_wrapper= Wrapper{foo:m::new_foo()}\n          }\n      }\n  }\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"참고로, 구조체에는 가시성 수정자(예: public 또는 private)가 없습니다."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"소유권"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"위에서 언급한 대로, 구조체는 기본적으로 선형적이고 일시적입니다. 이는 구조체가 복사되거나 삭제되지 않는다는 것을 의미합니다. 이 특성은 돈과 같은 실제 세계 자원을 모델링할 때 매우 유용할 수 있습니다. 돈을 복제하거나 유통 중에 잃어버리지 않기를 원하기 때문입니다."})}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module m {\n        struct Foo { x:u64 }\n\n        public fun copying_resource(){\n            let foo = Foo {x:100};\n            let foo_copy= copy foo;//오류! '복사'는 '복사' 능력을 요구합니다.\n            let foo_ref = &foo;\n            let another_copy= *foo_ref//오류! 역참조는 '복사' 능력을 요구합니다.\n        }\n        public fun destroying_resource1(){\n            let foo = Foo{x:100};\n            // 오류! 함수가 반환되었을 때, foo는 여전히 값이 남아 있습니다.\n            // 이 파괴는 'drop' 능력을 요구합니다.\n        }\n        public fun destroying_resource2(f: &mut Foo) {\n           *f = Foo {x:100}//오류\n                           //과거 값을 파괴하기 위해 쓰기를 통해 'drop' 능력이 필요합니다.\n        }\n    }\n\n    \n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'두 번째 예제 (fun destroying_resource1)를 수정하려면 리소스를 수동으로 "언팩(unpack)"해야 합니다.'})}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module m {\n        struct Foo {x:u64}\n\n        public fun destroying_resource!_fixed(){\n            let foo = Foo {x:100};\n            let Foo {x:_}= foo;\n        }\n    }\n}\n"}),(0,e.jsxs)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:[(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"기억하시죠? 정의된 모듈 내에서만 리소스를 해체할 수 있다는 사실입니다. 이는 시스템에서 특정 불변식을 강제하는 데 활용될 수 있습니다. 예를 들어, 돈의 보존 등이 있습니다."}),(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"반대로, 만약 구조체가 가치 있는 것을 나타내지 않는다면, 복사(copy)와 삭제(drop) 능력을 추가하여 다른 프로그래밍 언어에서 익숙한 구조체 값을 얻을 수 있습니다."})]}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module m {\n        struct Foo has copy,drop {x:u64}\n\n        public fun run(){\n            let foo = Foo{x:100};\n            let foo_copy= copy foo;\n            // ^ 이 코드는 foo를 복사합니다. 반면, let x = foo 또는 let x = move foo는 모두 foo를 이동시킵니다.\n            let x= foo.x;//x= 100\n            let x_copy= foo_copy.x; //x=100\n\n            //함수가 반환될 때 foo와 foo_copy 모두 암묵적으로 폐기됩니다.\n        }\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"전역 저장소에 리소스 저장하기"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"영속적인 전역 저장소에 직접 저장할 수 있는 것은 키(key) 능력을 가진 구조체(structs) 뿐입니다. 이러한 키 구조체 내에 저장된 모든 값은 저장(store) 능력을 가져야 합니다. 자세한 내용은 능력(ability)과 전역 저장소(global storage) 장을 참조하십시오."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"예제들"})}),(0,e.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"다음은 가치 있는 데이터를 나타내기 위해 구조체를 사용하는 두 가지 간단한 예시입니다. Coin의 경우 가치 있는 데이터를, Point와 Circle의 경우 더 고전적인 데이터를 나타내는 방법을 보여줍니다."})}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"Example 1: Coin"})}),(0,e.jsx)(x.Z,{code:"  address 0x2{\n    module m {\n        //Coin이 복사되지 않도록 하고자 하기 때문에 \"돈\"을 복제하는 것은 바람직하지 않습니다. 따라서 구조체에 'copy' 능력을 부여하지 않습니다.\n        //마찬가지로, 프로그래머가 코인을 파괴하는 것을 원치 않기 때문에 구조체에 'drop' 능력을 부여하지 않습니다.\n        //그러나, 모듈 사용자가 이 코인을 영속적인 전역 저장소에 저장할 수 있기를 원하기 때문에 구조체에 'store' 능력을 부여합니다. 이 구조체는 전역 저장소 내의 다른 리소스 내에만 존재하게 될 것이므로 'key' 능력은 부여하지 않습니다.\n        struct Coin has store {\n            value:u64,\n        }\n        public fun mint(value:u64):Coin{\n        //누구나 이 모듈을 사용하여 무한한 양의 코인을 발행하는 것을 방지하기 위해, 이 함수에는 액세스 제어(access control) 형태의 게이트(gate)를 구현해야 합니다.\n         Coin{value}\n        }\n        public fun withdraw(coin:&mut Coin,amount:u64):Coin{\n          assert!(coin.balance>=amount,1000);\n          Coin.value = coin.value -amount;\n          Coin {value:amount}\n        }\n        public fun deposit(coin:&mut Coin,other :Coin){\n            let Coin {value}= other;\n            coin.value= coin.value +value;\n        }\n\n        public fun split(coin:Coin,amount:u64):(Coin,Coin){\n            let other= withdraw(&mut coin,amount);\n            (coin,other)\n        }\n        public fun merge(coin1:Coin,coin2:Coin):Coin{\n            deposit(&mut coin1,coin2);\n            coin1\n        }\n        public fun destroy_zero(coin:Coin){\n            let Coin {value}= coin;\n            assert!(value == 0,1001);\n        }\n    }\n}\n"}),(0,e.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,e.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"Example 2: Geometry"})}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module point {\n        struct Point has copy,drop,store {\n            x:u64,\n            x:u64\n        }\n\n        public fun new (x:u64,y:u64):Point {\n            Point {\n                x,y\n            }\n        }\n        public fun x(p:&Point):u64 {\n            p.x\n        }\n        public fun y(p:&Point):u64 {\n            p.y\n        }\n        \n        fun abs_sub(a:u64,b:u64):u64 {\n            if (a>b){\n                b - a\n            }else {\n                a - b\n            }\n        }\n        public fun dist_squared(p1:&Point,p2:&Point):u64 {\n            let dx= abs_sub(p1.x,p2.x);\n            let dy= abs_sub(p1.y,p2.y);\n            dx *dx +dy*dy\n        }\n    }\n}\n"}),(0,e.jsx)(x.Z,{code:"  address 0x2 {\n    module circle {\n        use 0x2::point::{Self,Point};\n\n        struct Circle has copy,drop,store {\n            center:Point,\n            redius:u64\n        }\n        public fun new(center:Point,redius:u64):Circle {\n            Circle{center,redius}\n        }\n\n        public fun overlaps(c1:&Circle,c2:&Circle):bool{\n          let d = point::dist_squared(&c1.center, &c2.center);\n          let r1 = c1.radius;\n          let r2 = c2.radius;\n          d*d <= r1*r1 + 2*r1*r2 + r2*r2\n        }\n    }\n}\n"})]})})},38154:function(n,o,t){t.d(o,{Z:function(){return a}});var e=t(85893),r=t(74855),i=t(34209),l=t(84283),x=t(90066),s=t(67294);function a(n){let{code:o}=n,[t,a]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1),[c,f]=(0,s.useState)(!1);return(0,e.jsxs)("div",{style:{position:"relative"},onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},children:[(0,e.jsx)(i.Z,{language:"javascript",style:l.cL,children:o}),(0,e.jsx)(r.CopyToClipboard,{text:o,children:(0,e.jsx)("button",{onClick:()=>{console.log("코드가 복사되었습니다."),a(!0),f(!0),setTimeout(()=>{a(!1),f(!1)},1e3)},style:{position:"absolute",top:"0",right:"0",margin:"8px",padding:"8px",background:"none",border:"none",cursor:"pointer",opacity:d?1:0,transition:"opacity 0.3s",display:"flex",alignItems:"center"},children:c?(0,e.jsx)(x.Z,{style:{color:"#fff",transition:"color 0.3s"}}):(0,e.jsx)(x.Z,{style:{color:t?"#fff":"#000",transition:"color 0.3s"}})})})]})}}}]);