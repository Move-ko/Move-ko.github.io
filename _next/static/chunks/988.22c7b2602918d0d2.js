"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{59988:function(n,t,e){e.r(t);var o=e(85893),r=e(41181),i=e(15861),l=e(87357),x=e(38154);t.default=()=>(0,o.jsx)(r.ZP,{container:!0,children:(0,o.jsxs)(r.ZP,{xs:12,children:[(0,o.jsx)(l.Z,{sx:{width:"100%"},children:(0,o.jsx)(i.Z,{variant:"h3",gutterBottom:!0,children:"함수"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"Move에서의 함수 구문은 모듈 함수와 스크립트 함수 간에 공유됩니다. 모듈 내부의 함수는 재사용 가능한 함수로 사용되며, 스크립트 함수는 트랜잭션을 호출하는 데 한 번만 사용됩니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"선언"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수는 fun 키워드를 사용하여 선언됩니다. 함수 선언은 함수 이름, 타입 매개변수, 매개변수, 반환 타입, 어카이어(획득) 어노테이션들, 그리고 마지막으로 함수 본문으로 구성됩니다."})}),(0,o.jsx)(x.Z,{code:"  fun <identifier><[type_parameters: constraint],*>([identifier: type],*): <return_type> <acquires [identifier],*> <function_body>\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"예를들어"})}),(0,o.jsx)(x.Z,{code:"  fun foo<T1, T2>(x: u64, y: T1, z: T2): (T2, T1, u64) { (z, y, x) }\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"가시성"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"모듈 함수는 기본적으로 동일한 모듈 내에서만 호출할 수 있습니다. 이러한 내부 함수(가끔은 private 함수라고도 함)는 다른 모듈이나 스크립트에서 호출할 수 없습니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module m {\n        fun foo(): u64 { 0 }\n        fun calls_foo(): u64 { foo() } // 유효\n    }\n    \n    module other {\n        fun calls_m_foo(): u64 {\n            0x42::m::foo() // 오류!\n    //      ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.\n        }\n    }\n    }\n    \n    script {\n        fun calls_m_foo(): u64 {\n            0x42::m::foo() // 오류!\n    //      ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.\n        }\n    }\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"다른 모듈이나 스크립트에서 접근할 수 있도록 하려면 함수를 public 또는 public(friend)로 선언해야 합니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"public: 가시성 public 함수는 어떤 모듈이나 스크립트에서든지 호출할 수 있습니다. 다음 예시에서와 같이, public 함수는 다음과 같은 경우에 호출될 수 있습니다:"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"동일한 모듈에서 정의된 다른 함수에서,"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"다른 모듈에서 정의된 함수에서,"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"스크립트에서 정의된 함수에서."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"또한 public 함수는 인수의 타입과 반환 타입에 대한 제한이 없습니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module m {\n        public fun foo():u64 {0}\n        fun calls_foo():u64 {foo()}//유효\n    \n    }\n\n    module other {\n        fun calls_m_foo():u64 {\n            0x42::m::foo()//유효\n        }\n    }\n}\nscript {\n    fun calls_m_foo():u64 {\n        0x42::m::foo() //유효\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"public(friend) 가시성 public(friend) 가시성 한정자는 함수를 사용할 수 있는 위치를 더 정밀하게 제어하기 위한 public 한정자의 제한된 형태입니다. public(friend) 함수는 다음과 같은 경우에 호출될 수 있습니다:"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"동일한 모듈에서 정의된 다른 함수에서,"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"친구 목록에 명시적으로 지정된 모듈에서 정의된 함수에서 (친구 목록의 지정 방법은 Friends 문서를 참조하십시오)."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"모듈을 친구로 지정하는 것은 스크립트를 친구로 지정할 수 없으므로, 스크립트에서 정의된 함수는 public(friend) 함수를 호출할 수 없습니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module m {\n        friend 0x42::n;  // friend 선언\n        public(friend) fun foo(): u64 { 0 }\n        fun calls_foo(): u64 { foo() } // 유효\n    }\n    \n    module n {\n        fun calls_m_foo(): u64 {\n            0x42::m::foo() // 유효\n        }\n    }\n    \n    module other {\n        fun calls_m_foo(): u64 {\n            0x42::m::foo() // 오류!\n    //       ^^^^^^^^^^^^ 'foo'는 모듈 '0x42::m'의 'friend'에서만 호출할 수 있습니다.\n    \n    \n    \n    \n        }\n    }\n    }\n    \n    script {\n        fun calls_m_foo(): u64 {\n            0x42::m::foo() // 오류!\n    //       ^^^^^^^^^^^^ 'foo'는 모듈 '0x42::m'의 'friend'에서만 호출할 수 있습니다.\n        }\n    }\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"entry 한정자"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"entry 한정자는 모듈 함수를 스크립트와 마찬가지로 안전하고 직접적으로 호출할 수 있도록 설계되었습니다. 이를 통해 모듈 작성자는 어떤 함수가 실행을 시작할 수 있는지를 지정할 수 있습니다. 모듈 작성자는 비-entry 함수가 이미 실행 중인 Move 프로그램에서 호출될 것임을 알 수 있습니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'기본적으로, entry 함수는 모듈의 "main" 함수로 생각할 수 있으며, Move 프로그램이 실행을 시작하는 지점을 지정합니다.'})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"하지만, entry 함수는 여전히 다른 Move 함수에 의해 호출될 수 있습니다. 따라서 Move 프로그램의 시작점으로 사용될 수는 있지만, 이에 제한되지는 않습니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"예를 들어:"})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module m {\n        public entry fun foo():u64 {0}\n        fun calls_foo():u64 {foo()}//유효\n    }\n    \n    module n {\n        fun calls_m_foo():u64 {\n            0x42::m::foo()//유효\n        }\n    }\n\n\n    module other {\n        public entry fun calls_m_foo():u64 {\n            0x42::m::foo()//유효\n        }\n    }\n\n}\n\nscript {\n    fun calls_m_foo():u64 {\n        0x42::m::foo()//유효\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"심지어 내부 함수도 entry로 표시할 수 있습니다! 이를 통해 해당 함수가 실행의 시작 부분에서만 호출되는 것을 보장할 수 있습니다 (모듈 내 다른 곳에서 호출하지 않는다고 가정할 경우). 예를 들어:"})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module m {\n        entry fun foo():u64 {0}//// 유효! entry 함수는 public이 필요하지 않습니다.\n    }\n\n    module n {\n        fun calls_m_foo():u64 {\n            0x42::m::foo()//오류 \n            // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.\n        }\n    }\n    \n    module other {\n        public entry fun calls_m_foo():u64 {\n            0x42::m::foo()//오류 \n            // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.\n        }\n    }\n}\nscript {\n    fun calls_m_foo():u64 {\n        0x42::m::foo()//오류 \n     // ^^^^^^^^^^^^ 'foo'는 '0x42::m' 내부에서만 사용 가능합니다.\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"entry 함수는 원시 타입, String, vector와 같은 인수를 받을 수 있지만, Struct (예: Option)는 받을 수 없습니다. 또한, entry 함수는 반환값을 가져서는 안 됩니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"Name"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수 이름은 첫 번째 문자로 a부터 z까지의 소문자 또는 A부터 Z까지의 대문자를 사용할 수 있습니다. 첫 번째 문자 이후에는 밑줄 _, a부터 z까지의 소문자, A부터 Z까지의 대문자 또는 숫자 0부터 9까지의 문자를 포함할 수 있습니다."})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun FOO(){}\n    fun bar_42(){}\n    fun _bAZ19(){}\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"타입 매개변수 (Type Parameters)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이름 이후에 함수에는 타입 매개변수(Type Parameters)가 올 수 있습니다."})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun id<T>(x:T):T {x}\n    fun example<T1:copy,T2>(x:T1,y:T2):(T1,T1,T2){(copy,x,x,y)}\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"매개변수 (Parameters)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수 파라미터는 로컬 변수 이름 다음에 타입 어노테이션을 사용하여 선언됩니다."})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun add(x:u64,y:u64):u64 {x+y}\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'이것을 "x는 u64 타입을 갖는다"로 읽습니다. 함수는 전혀 파라미터를 가지지 않을 수도 있습니다.'})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun useless(){}\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이것은 새로운 데이터 구조를 생성하거나 비어있는 데이터 구조를 만드는 함수에서 매우 흔히 사용됩니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example{\n        struct Counter {\n            count:u64\n        }\n        fun new_counter():Counter {\n            Counter {count:0}\n        }\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"획득자"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수가 move_from, borrow_global 또는 borrow_global_mut을 사용하여 리소스에 접근할 때, 함수는 해당 리소스를 획득(acquires)한다고 표시해야 합니다. 이는 Move의 타입 시스템에서 전역 저장소로의 참조가 안전하다는 것을 보장하기 위해 사용됩니다. 특히, 전역 저장소로의 끊어진 참조가 없는지 확인합니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example {\n        struct Balance has key {\n            value :u64\n        }\n        public fun add_balance(s:&signer, value :u64){\n            move_to(s,Balance{value})\n        }\n\n        public fun extract_balance(addr:address ) :u64 acquires Balance {\n            let Balance {value}= move_from(addr);//acquires 필요\n            value\n        }\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"모듈 내에서 전이적인 호출(transitive calls)에 대해서도 acquires 어노테이션을 추가해야 합니다. 다른 모듈에서 이러한 함수를 호출할 때는 이러한 acquires 어노테이션을 추가할 필요가 없습니다. 왜냐하면 한 모듈은 다른 모듈에서 선언된 리소스에 접근할 수 없기 때문에 참조 안전성을 보장하기 위해 어노테이션이 필요하지 않습니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example {\n        struct Balance has key {\n            value:u64\n        }\n       public fun add_balance(s:&signer) {\n        move_to(s,Balance{value})\n       }\n\n\n       public fun extract_balance(addr:address):u64 acquires Balance {\n            let Balance { value}= move_from(addr);//acquires 필요\n            value\n        }  \n        public fun extract_and_add(sender:address,receiver:&signer)acquires Balance {\n            let value = extract_balance(sender);//여기에서는 acquires가 필요합니다.\n            add_balance(receiver, value)\n\n        }\n    }\n}\naddress 0x42 {\n    module other {\n        fun extract_balance(addr:address):u64 {\n            0x42::example::extract_balance(addr)//acquires이 필요하지 않습니다.\n        }\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수는 필요한 만큼 많은 리소스를 획득할 수 있습니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example {\n        use std::vector;\n\n        struct Balance has key { \n            value:u64\n        }\n\n        struct Box<T> has key {\n            items:vector<T>\n        }\n\n        public fun store_two<Item1:store,Item2:store>(\n            addr:address,\n            item1:Item1,\n            item2:Item2,\n        )acquires Balance ,Box {\n            let balance = borrow_global_mut<Balance>(addr);//acquires 필요\n            balance.value= balance.value - 2;\n            let box1=borrow_global_mut<Box<Item1>>(addr);//acquires 필요\n            vector::push_back(&mut box1.items,item1);\n            let box2= borrow_global_mut<Box<Item2>>(addr);//acquires 필요\n            vector::push_back(&mut box2,items,item2);\n        }\n\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"반환 유형"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"파라미터 이후에 함수는 반환 타입을 지정합니다."})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun zero():u64 {0}\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"여기서 : u64는 함수의 반환 타입이 u64임을 나타냅니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"팁 함수는 입력 참조에서 유도된 경우 불변한 & 또는 가변한 &mut 참조를 반환할 수 있습니다. 주의해야 할 점은 이것은 함수가 인라인 함수인 경우가 아니라면 전역 저장소에 대한 참조를 반환할 수 없다는 것입니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"튜플을 사용하여 함수는 여러 개의 값을 반환할 수 있습니다:"})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun one_two_three(): (u64, u64, u64) {\n         (0, 1, 2) \n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"만약 반환 타입이 명시되지 않은 경우, 함수의 암묵적인 반환 타입은 unit ()입니다. 다음 함수들은 동등합니다:"})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun just_unit(): () { () }\n    fun just_unit() { () }\n    fun just_unit() { }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"스크립트 함수는 반드시 unit () 타입의 반환 타입을 가져야 합니다:"})}),(0,o.jsx)(x.Z,{code:"  script {\n    fun do_nothing(){\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'앞서 튜플 섹션에서 언급한 대로, 이러한 튜플 "값"은 가상적이며 실제 실행 시 존재하지 않습니다. 따라서 unit ()을 반환하는 함수는 실행 중에 어떤 값도 반환하지 않습니다. unit ()은 반환되지 않는다는 것을 나타내는 특별한 타입입니다.'})}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"함수본문"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수의 본문은 표현식 블록(expression block)입니다. 함수의 반환 값은 시퀀스에서 마지막 값입니다."})}),(0,o.jsx)(x.Z,{code:"  module examples::test {\n    fun example(): u64 {\n    let x = 0;\n    x = x + 1;\n    x // returns 'x'\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"네이티브 함수"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"일부 함수는 본문이 명시되지 않고, 대신 가상 머신(VM)에서 본문을 제공하는 경우가 있습니다. 이러한 함수는 native로 표시됩니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"VM 소스 코드를 수정하지 않는 이상, 프로그래머는 새로운 네이티브 함수를 추가할 수 없습니다. 또한, 네이티브 함수는 표준 라이브러리 코드 또는 해당 Move 환경에서 필요한 기능에 사용되는 것이 의도되어 있습니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"아마도 가장 많이 볼 수 있는 네이티브 함수는 vector와 같은 표준 라이브러리 코드에 있을 것입니다."})}),(0,o.jsx)(x.Z,{code:"  module std::vector {\n    native public fun empty<Element>(): vector <Element>;\n    ...\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"함수 호출 (Calling)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수를 호출할 때, 이름은 별칭(alias)이나 완전한 정규 이름(fully qualified name)을 통해 지정할 수 있습니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example {\n        public fun zero():u64 {0}\n    }\n}\n\nscript {\n    use 0x42::example::{Self,zero};\n    fun call_zero(){\n        0x42::example::zero();\n        example::zero();\n        zero();\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수를 호출할 때는 매개변수마다 인수를 제공해야 합니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example {\n        public fun takes_none():u64{0}\n        public fun takes_one(x:u64):u64 {x}\n        public fun takes_two(x:u64,y:u64):u64{x+y}\n        public fun takes_three(x:u64,y:u64,z:u64):u64 {x+y+z}\n    }\n}\n\nscript {\n    use 0x42::example;\n    fun call_all(){\n        example::takes_none();\n        example::takes_one(0);\n        example::takes_two(0,1);\n        example::takes_three(0,1,2);\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"타입 인수는 명시적으로 지정하거나 추론될 수 있습니다. 두 가지 호출은 동일합니다."})}),(0,o.jsx)(x.Z,{code:"  address 0x42 {\n    module example {\n       public fun id<T>(x:T):T{x}\n    }\n   }\n   script {\n       use 0x42::example;\n       fun call_all() {\n           example::id(0);\n           example::id<u64>(0);\n       }\n   }\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"반환 값 (Returning Values)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:'함수의 결과, 즉 "반환 값"은 함수 본문의 마지막 값입니다. 예를 들어, 다음과 같습니다:'})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun add(x:u64,y:u64):u64 {\n        x+y\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"앞서 언급한 대로, 함수의 본문은 표현식 블록(expression block)입니다. 표현식 블록은 여러 문장을 순차적으로 나열할 수 있으며, 블록의 마지막 표현식은 해당 블록의 값이 됩니다."})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun double_and_add(x:u64,yPu64):u64 {\n        let double_x = x*2;\n        let double_y = y*2;\n        double_x + double_y\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"여기서 반환 값은 double_x + double_y입니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"return 표현식 (Return Expression)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"함수는 본문이 평가한 값을 암묵적으로 반환합니다. 그러나 함수는 명시적인 return 표현식을 사용할 수도 있습니다:"})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun f1():u64 {return 0}\n    fun f2():u64 {0}\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이 두 함수는 동등합니다. 약간 더 복잡한 예제에서는 함수가 두 개의 u64 값 차감하고, 두 번째 값이 너무 크면 일찍 0을 반환합니다:"})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun safe_sub(x:u64,y:u64):u64 {\n        if(x>y)return 0;\n        x-y\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsxs)(i.Z,{variant:"body1",gutterBottom:!0,children:["참고로, 이 함수의 본문은 ","if (y > x) 0 else x - y","와 같이 작성할 수도 있습니다. 그러나 return이 정말 빛을 발하는 것은 다른 제어 흐름 구조 내부에서 깊숙이 종료할 때입니다. 다음 예제에서는 함수가 벡터를 반복하여 주어진 값의 인덱스를 찾습니다:"]})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    use std::vector;\n    use std::option::{Self,Option};\n    fun index_of<T>(v: &vector<T>, target: &T): Option<u64> {\n        let i = 0;\n        let n = vector::legnth(v);\n        while (i < n) {\n            if (vector::borrow(v,i) == target)return option::some(i);\n            i = i +1\n        };\n\n        option::none(i)\n    }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"return 키워드를 인자 없이 사용하는 것은 return ()의 약식 표현입니다. 즉, 다음 두 함수는 동일합니다:"})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    fun foo() { return }\n    fun foo() { return () }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"인라인 함수(Inline functions)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"인라인 함수(Inline functions)는 Move 바이트코드로 컴파일되는 대신 호출하는 쪽에서 확장되는 함수입니다. 이는 가스를 절약하고 실행 속도를 높일 수 있게 해줍니다. 예를 들어, 다음과 같이 인라인 함수를 정의할 수 있습니다."})}),(0,o.jsx)(x.Z,{code:"  module example::test {\n    inline fun percent(x: u64, y: u64):u64 { x * 100 / y }\n}\n"}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"이제 percent(2, 200)을 호출할 때, 컴파일러는 사용자가 2 * 100 / 200으로 작성한 것처럼 함수 정의를 인라인으로 처리합니다."})}),(0,o.jsx)(l.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:"함수 파라메타(Function Parameters)"})}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"인라인 함수는 함수 매개변수를 지원합니다. 이를 통해 Move에서 일반적인 프로그래밍 패턴을 이해할 수 있는 고계 함수(higher-order functions)를 정의할 수 있습니다. 인라인 함수는 컴파일 시간에 확장되므로, 함수 매개변수의 이러한 기능을 Move 바이트코드에서 직접 지원하지 않더라도 지원할 수 있습니다. 다음은 vector 모듈에서 가져온 다음 함수를 고려해 봅시다. 번역"})}),(0,o.jsx)(x.Z,{code:'  module example::test {\n    //주어진 코드는 주어진 컬렉션의 요소에 함수를 "접어"나가는 개념을 나타냅니다. 예를 들어, fold(vector[1,2,3], 0, f)는 f(f(f(0, 1), 2), 3)와 같이 실행됩니다.\n    public inline fun fold<Accumulator, Element>(\n        v:vector<Element>,\n        init:Accumulator,\n        f:|Accumulator,Element|Accumulator\n    ):Accumulator{\n        let accu = init;\n        foreach(v, |elem| accu = g(accu, elem));\n        accu\n    }\n}\n'}),(0,o.jsx)(l.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,o.jsx)(i.Z,{variant:"body1",gutterBottom:!0,children:"여기서 foreach는 인라인 함수입니다. 일반적으로, 함수 매개변수로는 람다 표현식만 전달할 수 있습니다. 인라인 함수와 마찬가지로, 이러한 람다 표현식은 호출자 측에서 확장됩니다. 예시에서와 같이 람다는 컨텍스트 내의 변수에 접근할 수 있다는 점에 유의하세요. 예제에서는 변수 accu에 접근하고 있습니다."})})]})})},38154:function(n,t,e){e.d(t,{Z:function(){return d}});var o=e(85893),r=e(74855),i=e(34209),l=e(84283),x=e(90066),a=e(67294);function d(n){let{code:t}=n,[e,d]=(0,a.useState)(!1),[s,u]=(0,a.useState)(!1),[c,m]=(0,a.useState)(!1);return(0,o.jsxs)("div",{style:{position:"relative"},onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},children:[(0,o.jsx)(i.Z,{language:"javascript",style:l.cL,children:t}),(0,o.jsx)(r.CopyToClipboard,{text:t,children:(0,o.jsx)("button",{onClick:()=>{console.log("코드가 복사되었습니다."),d(!0),m(!0),setTimeout(()=>{d(!1),m(!1)},1e3)},style:{position:"absolute",top:"0",right:"0",margin:"8px",padding:"8px",background:"none",border:"none",cursor:"pointer",opacity:s?1:0,transition:"opacity 0.3s",display:"flex",alignItems:"center"},children:c?(0,o.jsx)(x.Z,{style:{color:"#fff",transition:"color 0.3s"}}):(0,o.jsx)(x.Z,{style:{color:e?"#fff":"#000",transition:"color 0.3s"}})})})]})}}}]);