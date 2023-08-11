"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{46809:function(t,e,x){x.r(e),x.d(e,{default:function(){return d}});var n=x(85893),i=x(41181),o=x(15861),s=x(38154),r=x(87357);function l(t){let{text:e}=t;return(0,n.jsx)("span",{style:{color:"purple"},children:e})}var d=()=>(0,n.jsx)(i.ZP,{container:!0,children:(0,n.jsxs)(i.ZP,{xs:12,children:[(0,n.jsx)(r.Z,{sx:{width:"100%"},children:(0,n.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"지역변수에 변수 및 범위"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["Move의 지역 변수는 어휘(",(0,n.jsx)(l,{text:"정적으로"}),") 범위가 지정됩니다. 새 변수는",(0,n.jsx)(l,{text:"let"}),"키워드로 도입되며 동일한 이름을 가진 이전의 지역 변수를 가려버립니다. 지역 변수는 가변(",(0,n.jsx)(l,{text:"mutable"}),")이며, 직접적으로 업데이트하거나 가변 참조를 통해 업데이트할 수 있습니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"let bindings"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["Move는 ",(0,n.jsx)(l,{text:"let"}),"을 사용하여 변수 이름과 값을 바인딩합니다."]})}),(0,n.jsx)(s.Z,{code:"  let x = 1;\n  let y = x + x:\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"let"}),"은 지역변수에 값을 바인딩하지 않고도 사용할 수도 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  let x;\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["그런 다음 ",(0,n.jsx)(l,{text:"지역변수"}),"에 나중에 값을 할당할 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:" let x;\n  if (cond) {\n    x = 1\n  } else {\n    x = 0\n  }\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"이는 기본값을 제공할 수 없는 경우에 루프에서 값을 추출하려고 할 때 매우 유용할 수 있습니다."})}),(0,n.jsx)(s.Z,{code:"  let x;\n  let cond = true;\n  let i = 0;\n  loop {\n      (x, cond) = foo(i);\n      if (!cond) break;\n      i = i + 1;\n  }\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"변수는 사용하기 전에 할당되어야 합니다."})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"Move 언어의 유형 시스템은 지역 변수가 할당되기 전에 사용되는 것을 방지합니다."})}),(0,n.jsx)(s.Z,{code:"  let x;\n  x + x // 에러발생!\n\n"}),(0,n.jsx)(s.Z,{code:"  let x;\n  if (cond) x = 0;\n  x + x // 에러발생!"}),(0,n.jsx)(s.Z,{code:"  let x;\n  while (cond) x = 0;\n  x + x // 에러발생!\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"유효한 변수 이름"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["변수 이름에는 밑줄 ",(0,n.jsx)(l,{text:"_, 문자 a~z, 문자 A~Z, 숫자 0~9"}),"가 포함될 수 있습니다. 변수 이름은 ",(0,n.jsx)(l,{text:"밑줄 _"}),"또는 문자 ",(0,n.jsx)(l,{text:" a~z"}),"로 시작해야 합니다.대문자로 시작할 수는 없습니다."]})}),(0,n.jsx)(s.Z,{code:"  //모두 유효\n  let x = e;\n  let _x = e;\n  let _A = e;\n  let x0 = e;\n  let xA = e;\n  let foobar_123 = e;\n  \n  // 모두 유효하지 않음\n  let X = e; // 에러!\n  let Foo = e; // 에러!\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"유형 주석"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["지역 변수의 유형은 거의 항상 Move의 유형 시스템에 의해 추론될 수 있습니다. 그러나 Move는 ",(0,n.jsx)(l,{text:"가독성, 명확성"})," 또는",(0,n.jsx)(l,{text:"디버깅"}),"가능성을 위해 유용한 명시적인 유형 주석을 허용합니다. 유형 주석을 추가하는 구문은 다음과 같습니다:"]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"center"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:(0,n.jsx)(l,{text:"    *유형주석:변수, 매개변수, 반환 값 등에 대해 유형 정보를 명시적으로 표기하는 것을 의미"})})}),(0,n.jsx)(s.Z,{code:"  let x: T = e; // T 유형의 변수 x는 표현식 e로 초기화됩니다.\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"명시적 유형 주석의 몇 가지 예:"})}),(0,n.jsx)(s.Z,{code:'  address 0x42 {\n    module example {\n    \n        struct S { f: u64, g: u64 }\n    \n        fun annotated() {\n            let u: u8 = 0;\n            let b: vector<u8> = b"hello";\n            let a: address = @0x0;\n            let (x, y): (&u64, &mut u64) = (&0, &mut 1);\n            let S { f, g: f2 }: S = S { f: 0, g: 1 };\n        }\n    }\n}\n'}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"유형 주석은 항상 패턴의 오른쪽에 위치해야 합니다."})}),(0,n.jsx)(s.Z,{code:"  let (x: &u64, y: &mut u64) = (&0, &mut 1); // 오류! (x, y): ... =여야 합니다. "}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"주석이 필요한 경우"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"일부 경우에는 유형 시스템이 유형을 추론할 수 없는 경우 로컬 유형 주석이 필요합니다. 이는 일반적으로 제네릭 유형의 유형 인수를 추론할 수 없는 경우에 발생합니다. 예를 들면:"})}),(0,n.jsx)(s.Z,{code:"  let _v1 = vector::empty(); // 에러가 발생!\n  //        ^^^^^^^^^^^^^^^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요.\n  let v2: vector<u64> = vector::empty(); //에러가 발생하지않음\n  "}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["더 드물게, 유형 시스템은 타입을 추론할 수 없는 비상귀 코드(",(0,n.jsx)(l,{text:"모든 다음 코드는 접근 불가능한 경우"}),")에 대한 타입을 결정할 수 없을 수도 있습니다.",(0,n.jsx)(l,{text:"return"})," 과 ",(0,n.jsx)(l,{text:"abort"}),"는 모두 식(",(0,n.jsx)(l,{text:"expression"}),")이므로 어떤 타입이든 가질 수 있습니다. ",(0,n.jsx)(l,{text:"break"}),"가 있는 경우 loop의 타입은 ()이지만, loop에서 ",(0,n.jsx)(l,{text:"break"}),"가 없는 경우 어떤 타입이든 가질 수 있습니다. 이러한 경우에는 타입 주석이 필요합니다. 예를 들어, 다음 코드:"]})}),(0,n.jsx)(s.Z,{code:"  let a: u8 = return ();\n  let b: bool = abort 0;\n  let c: signer = loop ();\n  \n  let x = return (); // 오류!\n  //  ^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요\n  let y = abort 0; // 오류!\n  //  ^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요\n  let z = loop (); // 오류!\n  //  ^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요\n"})," ",(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"이 코드에 유형 주석을 추가하면 사용되지 않는 지역 변수나 죽은 코드에 대한 다른 오류가 드러날 수 있지만, 이 예시는 이러한 문제를 이해하는 데 도움이 될 수 있습니다."})}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"튜플을 사용한 여러개의 선언"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"let"}),"키워드를 사용하면 튜플을 사용하여 한 번에 여러 개의 지역 변수를 동시에 선언할 수 있습니다. 괄호 내에 선언된 지역 변수들은 튜플에서 해당하는 값으로 ",(0,n.jsx)(l,{text:"초기화"}),"됩니다."]})}),(0,n.jsx)(s.Z,{code:"  let () = ();\n  let (x0, x1) = (0, 1);\n  let (y0, y1, y2) = (0, 1, 2);\n  let (z0, z1, z2, z3) = (0, 1, 2, 3);\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"표현식의 유형은 튜플 패턴의 개수와 정확히 일치해야 합니다. 예를 들어, 다음과 같은 코드를 살펴보겠습니다:"})}),(0,n.jsx)(s.Z,{code:"  let (x, y) = (0, 1, 2); // 오류!\n  let (x, y, z, q) = (0, 1, 2); // 오류!\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["하나의 ",(0,n.jsx)(l,{text:"let"})," 문 내에서 동일한 이름으로 여러 개의 지역 변수를 선언할 수는 없습니다. 예를 들어, 다음과 같은 코드를 살펴보겠습니다:"]})}),(0,n.jsx)(s.Z,{code:"  let (x, x) = 0; // 오류!\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"구조체가 있는 여러개의 선언"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"let"})," 키워드는 구조체를 분해하거나 구조체에 대한 매칭을 할 때 한 번에 여러 개의 로컬 변수를 동시에 선언할 수도 있습니다. 이 형태에서 ",(0,n.jsx)(l,{text:"let"}),"은 구조체의 필드 값으로 초기화된 지역 변수 집합을 생성합니다. 구문은 다음과 같습니다:"]})}),(0,n.jsx)(s.Z,{code:"  struct T { f1: u64, f2: u64 }"}),(0,n.jsx)(s.Z,{code:"  let T { f1: local1, f2: local2 } = T { f1: 1, f2: 2 };\n  // local1: u64\n  // local2: u64\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"다음은 더 복잡한 예입니다."})}),(0,n.jsx)(s.Z,{code:"  address 0x42 {\n    module example {\n        struct X { f: u64 }\n        struct Y { x1: X, x2: X }\n    \n        fun new_x(): X {\n            X { f: 1 }\n        }\n    \n        fun example() {\n            let Y { x1: X { f }, x2 } = Y { x1: new_x(), x2: new_x() };\n            assert!(f + x2.f == 2, 42);\n    \n            let Y { x1: X { f: f1 }, x2: X { f: f2 } } = Y { x1: new_x(), x2: new_x() };\n            assert!(f1 + f2 == 2, 42);\n        }\n    }\n    }\n"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"구조체"}),"의 필드는 변수를 바인딩할 때와 변수의 이름으로 사용될 수 있는 두 가지 역할을 동시에 수행할 수 있습니다. 이는 때때로 ",(0,n.jsx)(l,{text:"punning"}),"이라고도 불립니다."]})}),(0,n.jsx)(s.Z,{code:"  let X { f } = e;"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"다음과 같습니다."})}),(0,n.jsx)(s.Z,{code:"  let X { f: f } = e;"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["튜플과 마찬가지로, 하나의 ",(0,n.jsx)(l,{text:"let"})," 문 내에서 동일한 이름으로 여러 개의 지역 변수를 선언할 수는 없습니다."]})}),(0,n.jsx)(s.Z,{code:"  let Y { x1: x, x2: x } = e; // 오류!"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"참조를 통한 구조분해(Destructuring against references)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["구조체 예제에서 ",(0,n.jsx)(l,{text:"let"})," 문에서 바인딩된 값은 이동(",(0,n.jsx)(l,{text:"move"}),")되어 구조체 값이 파괴되고 그 필드들이 바인딩됩니다."]})}),(0,n.jsx)(s.Z,{code:"  struct T { f1: u64, f2: u64 }"}),(0,n.jsx)(s.Z,{code:"  let T { f1: local1, f2: local2 } = T { f1: 1, f2: 2 };\n  // local1: u64\n  // local2: u64"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["이 경우",(0,n.jsx)(l,{text:" T { f1: 1, f2: 2 }"}),"와 같은 구조체 값은",(0,n.jsx)(l,{text:" let"})," 이후에 더 이상 존재하지 않습니다. 대신 구조체 값을 이동시키지 않고 파괴하지 않고 각 필드를 빌림(",(0,n.jsx)(l,{text:"borrow"}),")하려면 다음과 같이 할 수 있습니다:"]})}),(0,n.jsx)(s.Z,{code:"  let t = T { f1: 1, f2: 2 };\n  let T { f1: local1, f2: local2 } = &t;\n  // local1: &u64\n  // local2: &u64"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["마찬가지로 가변 참조( ",(0,n.jsx)(l,{text:"mutabale references"}),")를 사용하여 비슷한 방식으로 수행할 수 있습니다:"]})}),(0,n.jsx)(s.Z,{code:"  let t = T { f1: 1, f2: 2 };\n  let T { f1: local1, f2: local2 } = &mut t;\n  // local1: &mut u64\n  // local2: &mut u64"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"이러한 동작은 중첩된 구조체에 대해서도 동작할 수 있습니다."})}),(0,n.jsx)(s.Z,{code:"  address 0x42 {\n    module example {\n        struct X { f: u64 }\n        struct Y { x1: X, x2: X }\n    \n        fun new_x(): X {\n            X { f: 1 }\n        }\n    \n        fun example() {\n            let y = Y { x1: new_x(), x2: new_x() };\n    \n            let Y { x1: X { f }, x2 } = &y;\n            assert!(*f + x2.f == 2, 42);\n    \n            let Y { x1: X { f: f1 }, x2: X { f: f2 } } = &mut y;\n            *f1 = *f1 + 1;\n            *f2 = *f2 + 1;\n            assert!(*f1 + *f2 == 4, 42);\n        }\n    }\n    }"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"값 무시 (Ignoring Values)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"let"})," 바인딩에서는 가끔씩 몇 가지 값을 무시하는 것이 유용합니다.",(0,n.jsx)(l,{text:"_"}),"로 시작하는 지역 변수는 무시되며 새로운 변수를 도입하지 않습니다"]})}),(0,n.jsx)(s.Z,{code:"  fun three(): (u64, u64, u64) {\n    (0, 1, 2)\n}"}),(0,n.jsx)(s.Z,{code:"  let (x1, _, z1) = three();\n  let (x2, _y, z2) = three();\n  assert!(x1 + z1 == x2 + z2, 42);"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["이는 때때로 필요할 수 있습니다. 사용되지 않는 지역 변수에 대해서는 컴파일러가 ",(0,n.jsx)(l,{text:"에러"}),"를 발생시킵니다."]})}),(0,n.jsx)(s.Z,{code:"  let (x1, y, z1) = three(); // 오류!\n  //       ^ 미사용 지역 변수 'y'"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"일반적인 let 문법(General let grammar)"})}),(0,n.jsxs)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:[(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["모든 다양한 구조들을 let에서 결합할 수 있습니다! 그렇게 함으로써 let 문에 대한 ",(0,n.jsx)(l,{text:"일반적인 문법"}),"을 얻을 수 있습니다:"]}),(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:" let-binding → let pattern-or-list type-annotationopt\n            initializeropt > pattern-or-list → pattern | ( pattern-list ) >\n            pattern-list → pattern ,opt | pattern , pattern-list >\n            type-annotation → : type initializer → = expression"}),(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["바인딩을 도입하는 항목에 대한 일반적인 용어는 패턴입니다. 패턴은 데이터를 해체하고(",(0,n.jsx)(l,{text:"가능한 경우 재귀적으로"}),") 바인딩을 도입하는 데 사용됩니다. 패턴 문법은 다음과 같습니다:"]}),(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"pattern → local-variable | struct-type { field-binding-list } > field-binding-list → field-binding ,opt | field-binding , field-binding-list > field-binding → field | field : pattern"}),(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"이 문법을 적용한 몇 가지 구체적인 예시를 살펴보겠습니다."})]}),(0,n.jsx)(s.Z,{code:"      let (x, y): (u64, u64) = (0, 1);\n  //       ^                           지역변수\n  //       ^                           패턴\n  //          ^                        지역변수\n  //          ^                        패턴\n  //          ^                        패턴목록\n  //       ^^^^                        패턴목록\n  //      ^^^^^^                       패턴 또는 목록\n  //            ^^^^^^^^^^^^           타입주석\n  //                         ^^^^^^^^  초기화자\n  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-바인딩\n  \n      let Foo { f, g: x } = Foo { f: 0, g: 1 };\n  //      ^^^                                    구조체타입\n  //            ^                                필드\n  //            ^                                필드-binding\n  //               ^                             필드\n  //                  ^                          지역변수\n  //                  ^                          패턴\n  //               ^^^^                          필드-binding\n  //            ^^^^^^^                          필드 바인딩 목록\n  //      ^^^^^^^^^^^^^^^                        패턴\n  //      ^^^^^^^^^^^^^^^                        패턴 또는 목록\n  //                      ^^^^^^^^^^^^^^^^^^^^   초기화자\n  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-바인딩"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"변경(Mutations)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"할당(Assignments)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["지역 변수가 도입된 후 (",(0,n.jsx)(l,{text:"let 또는 함수 매개변수로 도입됨"}),"), 할당을 통해 지역 변수를 수정할 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  x = e"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"let"})," 바인딩과 달리 할당은 표현식입니다. 일부 언어에서는 할당이 할당된 값 자체를 반환하지만, Move에서는 어떤 할당이든 항상",(0,n.jsx)(l,{text:"()"})," 타입을 갖습니다."]})}),(0,n.jsx)(s.Z,{code:"  (x = e: ())"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["실제로, 할당이 ",(0,n.jsx)(l,{text:"표현식"}),"이라는 것은 중괄호",(0,n.jsx)(l,{text:"({ ... })"})," 로 새로운 표현식 블록을 추가하지 않고도 사용할 수 있다는 의미입니다"]})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  if (cond) x = 1 else x = 2;"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["할당은 ",(0,n.jsx)(l,{text:"let"})," 바인딩과 동일한 패턴 구문 체계를 사용합니다."]})}),(0,n.jsx)(s.Z,{code:"  address 0x42 {\n    module example {\n        struct X { f: u64 }\n    \n        fun new_x(): X {\n            X { f: 1 }\n        }\n    \n        //이 예제는 사용되지 않은 변수와 할당에 대한 경고를 발생시킬 것입니다.\n        fun example() {\n           let (x, _, z) = (0, 1, 3);\n           let (x, y, f, g);\n    \n           (X { f }, X { f: x }) = (new_x(), new_x());\n           assert!(f + x == 2, 42);\n    \n           (x, y, z, f, _, g) = (0, 0, 0, 0, 0, 0);\n        }\n    }\n    }"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"지역변수"})," 는 하나의 타입만 가질 수 있으므로, 지역 변수의 타입은 할당 사이에 변경될 수 없습니다."]})}),(0,n.jsx)(s.Z,{code:"  let x;\n  x = 0;\n  x = false; // 오류!"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"참조를 통한 변경(Mutating through a reference)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["할당을 통해 지역 변수를 직접 수정하는 것 외에도, 지역 변수는 가변 참조( ",(0,n.jsx)(l,{text:"&mut"})," )를 통해 수정할 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  let r = &mut x;\n  *r = 1;\n  assert!(x == 1, 42);"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"이 기능은 특히 다음과 같은 경우에 유용합니다:"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"(1) 어떤 조건에 따라 다른 변수를 수정하고 싶은 경우"})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  let y = 1;\n  let r = if (cond) &mut x else &mut y;\n  *r = *r + 1;"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"(2) 다른 함수가 로컬 값을 수정하도록 하려는 경우"})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  modify_ref(&mut x);"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["이러한 수정 작업은 구조체(",(0,n.jsx)(l,{text:"struct"}),")와 벡터(",(0,n.jsx)(l,{text:"vector"}),")를 수정하는 방법입니다."]})}),(0,n.jsx)(s.Z,{code:"  let v = vector::empty();\n  vector::push_back(&mut v, 100);\n  assert!(*vector::borrow(&v, 0) == 100, 42);"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"범위(Scope)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"let"}),"으로 선언된 모든 지역 변수는 해당 범위 내에서 이후의 모든 표현식에서 사용할 수 있습니다. 범위는 표현식 블록",(0,n.jsx)(l,{text:" {...}"}),"으로 선언됩니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"지역 변수는 선언된 범위 외부에서 사용할 수 없습니다."})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  {\n      let y = 1;\n  };\n  x + y // 오류!\n  //  ^ 선언되었지만 어떠한 값에도 바인딩되지 않은 'y'"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["하지만, 외부 범위의 지역 변수는 ",(0,n.jsx)(l,{text:"중첩"}),"된 범위에서 사용할 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  {\n    let x = 0;\n    {\n        let y = x + 1; // 유효\n    }\n}"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"지역 변수는 접근 가능한 모든 범위에서 변경할 수 있습니다. 그 변경은 해당 지역 변수와 함께 유지되며, 변경을 수행한 범위와는 관계없이 유지됩니다."})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  x = x + 1;\n  assert!(x == 1, 42);\n  {\n      x = x + 1;\n      assert!(x == 2, 42);\n  };\n  assert!(x == 2, 42);"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"표현식 블록(Expression Blocks)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"표현식 블록"}),"은 세미콜론 (",(0,n.jsx)(l,{text:";"}),")으로 구분된 일련의 문장들입니다. 표현식 블록의 결과값은 블록 내 마지막 표현식의 값입니다. 표현식 블록은 여러 개의 문장을 순차적으로 실행하고, 각 문장의 결과를 연속적으로 평가할 수 있는 유용한 도구입니다. 또한, 표현식 블록은 논리적인 코드 블록을 구성하고 제어 흐름을 조작하는 데 사용될 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  { let x = 1; let y = 1; x + y }"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["이 예시에서 블록의 결과는 ",(0,n.jsx)(l,{text:"x + y"}),"입니다. 문장은 let 선언이나 표현식이 될 수 있습니다. 기억해 주세요, 할당문 ",(0,n.jsx)(l,{text:"(x = e)"}),"은 ",(0,n.jsx)(l,{text:"()"})," 타입의 표현식입니다."]})}),(0,n.jsx)(s.Z,{code:"  { let x; let y = 1; x = 1; x + y }"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["함수 호출은 ",(0,n.jsx)(l,{text:"()"})," 타입의 또 다른 일반적인 표현식입니다. 데이터를 수정하는 함수 호출은 주로 문장으로 사용됩니다."]})}),(0,n.jsx)(s.Z,{code:"  { let v = vector::empty(); vector::push_back(&mut v, 1); v }"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["이것은 ",(0,n.jsx)(l,{text:"()"}),"유형에만 국한되지 않습니다. 어떤 표현식이든 순서에서 문장으로 사용될 수 있습니다!"]})}),(0,n.jsx)(s.Z,{code:'  {\n    let x = 0;\n    x + 1; // 값이 버려졌습니다\n    x + 2; // 값이 버려졌습니다\n    b"hello"; // 값이 버려졌습니다\n}'}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["하지만! 만약 표현식에 리소스 (",(0,n.jsx)(l,{text:"drop기능이 없는 값"}),")가 포함되어 있다면 오류가 발생합니다. 이는 Move의 유형 시스템이 버림(",(0,n.jsx)(l,{text:"drop"}),")이 있는 모든 값이 drop 기능을 가지고 있다는 것을 보장하기 때문입니다. (",(0,n.jsx)(l,{text:"소유권은 전달되거나 선언된 모듈 내에서 명시적으로 파괴되어야 함을 보장합니다."}),")"]})}),(0,n.jsx)(s.Z,{code:"  {\n    let x = 0;\n    Coin { value: x }; // 오류!\n//  ^^^^^^^^^^^^^^^^^ 삭제(drop) 기능 없이 사용되지 않는 값\n    x\n}"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["만약 블록 안에 최종 표현식이 없는 경우 - 즉, 후행 세미콜론",(0,n.jsx)(l,{text:";"})," 이 있는 경우 - 암시적으로 단위",(0,n.jsx)(l,{text:"()"})," 값이 존재합니다. 마찬가지로, 표현식 블록이 비어있는 경우에도 암시적으로 단위 ",(0,n.jsx)(l,{text:"()"})," 값이 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  // 두 번역은 동등합니다\n  { x = x + 1; 1 / x; }\n  { x = x + 1; 1 / x; () }"}),(0,n.jsx)(s.Z,{code:"  // 두 번역은 동등합니다\n  { }\n  { () }"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"표현식블록"}),"은 그 자체로 표현식이며, 표현식이 사용되는 모든 곳에서 사용할 수 있습니다. (참고:",(0,n.jsx)(l,{text:"함수의 본문도 표현식 블록이지만, 함수 본문은 다른 표현식으로 대체할수 없습니다."}),")"]})}),(0,n.jsx)(s.Z,{code:'  let my_vector: vector<vector<u8>> = {\n    let v = vector::empty();\n    vector::push_back(&mut v, b"hello");\n    vector::push_back(&mut v, b"goodbye");\n    v\n};'}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"(이 예시에서는 타입 주석이 필요하지 않지만, 명확성을 위해 추가되었습니다.)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"섀도잉(shadowing)"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["만약 let을 사용하여 이미 ",(0,n.jsx)(l,{text:"scope"}),"에 존재하는 이름의 지역 변수를 도입한다면, 해당 이전 변수는 이후에 해당 스코프에서 더 이상 접근할 수 없습니다. 이를 ",(0,n.jsx)(l,{text:"shadowing"}),"이라고 합니다."]})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  assert!(x == 0, 42);\n  \n  let x = 1; // x 가 가려졌습니다\n  assert!(x == 1, 42);\n  \n  "}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["지역 변수가 ",(0,n.jsx)(l,{text:"shadowing"}),"되면, 이전과 동일한 타입을 유지할 필요는 없습니다."]})}),(0,n.jsx)(s.Z,{code:'  let x = 0;\n  assert!(x == 0, 42);\n  \n  let x = b"hello"; // x 가 가려졌습니다\n  assert!(x == b"hello", 42);\n  \n  '}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["지역 변수가 ",(0,n.jsx)(l,{text:"shadowing"}),"된 후에도 해당 변수에 저장된 값은 여전히 존재하지만 더 이상 접근할 수 없습니다. 이는",(0,n.jsx)(l,{text:"drop"})," 기능이 없는 타입의 값들에 대해 유의해야 하는 중요한 사항입니다. 해당 값의 ",(0,n.jsx)(l,{text:"소유권"}),"은 함수가 끝나기 전에 전달되어야 합니다."]})}),(0,n.jsx)(s.Z,{code:"  address 0x42 {\n    module example {\n        struct Coin has store { value: u64 }\n\n        fun unused_resource(): Coin {\n            let x = Coin { value: 0 }; // 오류!\n//              ^ 이 지역 변수는 여전히 삭제 기능이 없는 값을 포함하고 있습니다.\n            x.value = 1;\n            let x = Coin { value: 10 };\n            x\n//          ^ 잘못된 반환\n        }\n    }\n}"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["지역 변수가 ",(0,n.jsx)(l,{text:"scope"})," 내에서",(0,n.jsx)(l,{text:"shadowing"}),"된 경우, 해당 ",(0,n.jsx)(l,{text:"shadowing"}),"은 그 ",(0,n.jsx)(l,{text:"scope"})," 내에서만 유지됩니다. 해당 scope가 종료되면 ",(0,n.jsx)(l,{text:"shadowing"}),"은 사라집니다."]})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  {\n      let x = 1;\n      assert!(x == 1, 42);\n  };\n  assert!(x == 0, 42);"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["기억해 주세요, 지역 변수는 ",(0,n.jsx)(l,{text:"shadowing"}),"될 때 타입이 변경될 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:'  let x = 0;\n  {\n      let x = b"hello";\n      assert!(x = b"hello", 42);\n  };\n  assert!(x == 0, 42);'}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"이동 및 복사"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["Move 언어에서는 모든 지역 변수를 ",(0,n.jsx)(l,{text:"move"})," 또는",(0,n.jsx)(l,{text:"copy"}),"의 두 가지 방법으로 사용할 수 있습니다. 둘 중 하나가 명시되지 않은 경우, Move 컴파일러는 복사(",(0,n.jsx)(l,{text:"copy"}),") 또는 이동( ",(0,n.jsx)(l,{text:"move"}),")을 사용해야 하는지를 추론할 수 있습니다. 이는 위의 모든 예제에서 컴파일러가 ",(0,n.jsx)(l,{text:"move"})," 또는 ",(0,n.jsx)(l,{text:"copy"}),"를 삽입한다는 것을 의미합니다. 지역변수 변수는 ",(0,n.jsx)(l,{text:"move"}),"또는",(0,n.jsx)(l,{text:"copy"})," 없이 사용할 수 없습니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:[(0,n.jsx)(l,{text:"copy"}),"는 다른 프로그래밍 언어에서 익숙할 것입니다. 변수 내부의 값을 새로 복사하여 해당 표현식에서 사용합니다.",(0,n.jsx)(l,{text:"copy"}),"를 사용하면 로컬 변수를 한 번 이상 사용할 수 있습니다."]})}),(0,n.jsx)(s.Z,{code:"  let x = 0;\n  let y = copy x + 1;\n  let z = copy x + 2;"}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["copy와 달리, ",(0,n.jsx)(l,{text:"move"}),"는 데이터를 복사하지 않고 지역 변수에서 값을 가져옵니다. Move가 발생한 후에는 해당 지역 변수를 사용할 수 없습니다. move는 지역 변수에서 값을 가져오는 동시에",(0,n.jsx)(l,{text:"변수를 비웁니다."})]})}),(0,n.jsx)(s.Z,{code:"  let x = 1;\n  let y = move x + 1;\n  //      ------ \b지역 변수가 여기로 이동되었습니다\n  let z = move x + 2; // 오류!\n  //      ^^^^^^\"지역 변수 'x'의 잘못된 사용\"\n  y + z"}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"안전"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["Move의 타입 시스템은 값을 ",(0,n.jsx)(l,{text:"move"}),"한 후에 사용되는 것을 방지합니다. 이는 let 선언에서 설명한 것과 동일한 안전성 검사입니다. 이는 로컬 변수가 값을 할당하기 전에 사용되는 것을 방지하는 기능입니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"추론"})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["앞서 언급한대로, Move 컴파일러는 명시적으로 복사(",(0,n.jsx)(l,{text:"copy"}),") 또는 이동( ",(0,n.jsx)(l,{text:"move"}),")가 지정되지 않은 경우에도 자동으로 ",(0,n.jsx)(l,{text:"복사"})," 또는",(0,n.jsx)(l,{text:"이동"}),"을 추론합니다. 이를 위한 알고리즘은 매우 간단합니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["﹥복사( ",(0,n.jsx)(l,{text:"copy"}),") 능력을 갖는 스칼라 값은 복사(",(0,n.jsx)(l,{text:"copy"}),")로 처리됩니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["    ⇥참조자 ( ",(0,n.jsx)(l,{text:"가변 &mut 및 불변 &"}),") 는 복사( ",(0,n.jsx)(l,{text:"copy"}),")로 처리됩니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"﹥ 다만, 예측 가능한 대여 검사 오류를 위해 특수한 상황에서 이동(move)으로 처리될 수 있습니다."})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["﹥다른 모든 값은 이동( ",(0,n.jsx)(l,{text:"move"}),")으로 처리됩니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsxs)(o.Z,{variant:"body1",gutterBottom:!0,children:["    ⇥이는 다른 값들이 복사( ",(0,n.jsx)(l,{text:"copy"}),") 능력을 가질지라도, 프로그래머가 명시적으로 복사를 해주어야 한다는 것을 의미합니다."]})}),(0,n.jsx)(r.Z,{sx:{width:"100%",textAlign:"left",marginTop:"30px"},children:(0,n.jsx)(o.Z,{variant:"body1",gutterBottom:!0,children:"    ⇥이는 실수로 큰 데이터 구조체를 복사하는 것을 방지하기 위한 것입니다."})}),(0,n.jsx)(s.Z,{code:'  let s = b"hello";\n  let foo = Foo { f: 0 };\n  let coin = Coin { value: 0 };\n  \n  let s2 = s; // move\n  let foo2 = foo; // move\n  let coin2 = coin; // move\n  \n  let x = 0;\n  let b = false;\n  let addr = @0x42;\n  let x_ref = &x;\n  let coin_ref = &mut coin2;\n  \n  let x2 = x; // copy\n  let b2 = b; // copy\n  let addr2 = @0x42; // copy\n  let x_ref2 = x_ref; // copy\n  let coin_ref2 = coin_ref; // copy'})]})})},38154:function(t,e,x){x.d(e,{Z:function(){return d}});var n=x(85893),i=x(74855),o=x(34209),s=x(84283),r=x(90066),l=x(67294);function d(t){let{code:e}=t,[x,d]=(0,l.useState)(!1),[a,c]=(0,l.useState)(!1),[j,h]=(0,l.useState)(!1);return(0,n.jsxs)("div",{style:{position:"relative"},onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:[(0,n.jsx)(o.Z,{language:"javascript",style:s.cL,children:e}),(0,n.jsx)(i.CopyToClipboard,{text:e,children:(0,n.jsx)("button",{onClick:()=>{console.log("코드가 복사되었습니다."),d(!0),h(!0),setTimeout(()=>{d(!1),h(!1)},1e3)},style:{position:"absolute",top:"0",right:"0",margin:"8px",padding:"8px",background:"none",border:"none",cursor:"pointer",opacity:a?1:0,transition:"opacity 0.3s",display:"flex",alignItems:"center"},children:j?(0,n.jsx)(r.Z,{style:{color:"#fff",transition:"color 0.3s"}}):(0,n.jsx)(r.Z,{style:{color:x?"#fff":"#000",transition:"color 0.3s"}})})})]})}}}]);