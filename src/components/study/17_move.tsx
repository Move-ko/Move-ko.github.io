import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    fun id<T>(x:T):T {
        // 이 타입 주석은 필요하지 않지만 유효합니다.
        (x:T)
    }
}
`;
  const code2 = `  module example::test {
    struct Foo<T> has copy,drop{x:T}

    struct Bar<T1,T2>has copy,drop {
        x:T1,
        y:vector<T2>,
    }
}
`;
  const code3 = `  module example::test {
    fun foo(){
        let x = id<bool>(true);
    }
}
`;
  const code4 = `  module example::test {
    fun foo(){
        let foo = Foo<bool>{x:true};
        let Foo<bool>{x}= foo;
    }
}
`;
  const code5 = `  module example::test {
    fun foo(){
        let x= id<u64>(true);//오류입니다! true는 u64 형식이 아닙니다.
    }
}
`;
  const code6 = `  module example::test {
    fun foo(){
        let foo = Foo<bool>{x:0};// 오류입니다! 0은 (bool) 형식이 아닙니다.
        let Foo<address>{x}= foo;// 오류입니다! (bool)은 주소(address)와 호환되지 않습니다.
    }
}
`;
  const code7 = `  module example::test {
    fun foo(){
        let x= id(true);
         //      ^ <bool>가 추론됩니다.
        let foo =Foo {x:true};
           //      ^ <bool>가 추론됩니다.
        let Foo{x}= foo;
      //      ^ <bool>가 추론됩니다.
    }
}
`;
  const code8 = `  module example::test {
    using std::vector;

    fun foo(){
       // let v = vector::new();
       //                   ^ 컴파일러가 원소의 형식을 결정할 수 없습니다.
          let v = vector::new<u64>();
          //                ^~~~~ 수동으로 주석을 추가해야 합니다.
    }
}
`;
  const code9 = `  module example::test {
    using std::vector;

    fun foo (){
       let v= vector::new();
       //               ^ <u64>가 추론됩니다.
       vector::push_back(&mut v,42);
    }
}
`;
  const code10 = `  struct Foo<T> {
    foo: u64
}
`;
  const code11 = `  module example::test {
    /// 통화 지정자
    struct Currency1 {}
    struct Currency2 {}
/// 통화 지정자 타입을 사용하여 인스턴스화할 수 있는 제네릭한 코인 타입입니다.
/// 예: Coin<Currency1>, Coin<Currency2> 등.
    struct Coin<Currency1> has srotre {
        value:u64
    }
// 모든 통화에 대해 일반적으로 코드를 작성하세요.
    public fun mint_generic<Currency>(value:u64):Coin<Currency>{
        Coin {value}
    }
// 한 가지 통화에 대해 구체적으로 코드를 작성하세요.
    public fun mint_concreate(value:u64):Coin<Currency1>{
        Coin {value}
    }
}
`;
  const code12 = `  module example::test {
    struct S1<phantom T1,T2>{f:u64}
                   // ^^
                   //올바름: T1은 구조체 정의 내에서 나타나지 않습니다.
    struct S2<phantom T1,T2>{f:S1<T1,T2>}
                               // ^^
                               //올바름: T1은 팬텀 위치에 나타납니다.
}
`;
  const code13 = `  module example::test {
    struct S1<phantom T>{f:T} 
                         //^ 오류: 팬텀 위치가 아닙니다.

    struct S2<T> { f: T }

    struct S3<phantom T> { f: S2<T> }
                               //^ 오류: 팬텀 위치가 아닙니다.

}
`;
  const code14 = `  module example::test {
    struct S<T1,phantom T2> has copy {f:T1}
    struct NoCopy {}
    struct HasCopy has copy {}
}
`;
  const code15 = `  module exmaple::test {
    struct S <phantom T :copy> {}
}
`;
  const code16 = `  // T는 타입 매개변수의 이름입니다.
  T: <ability> (+ <ability>)*
`;
  const code17 = `  T: copy
  T: copy + drop
  T: copy + drop + store + key
`;
  const code18 = `  module example::test {
    struct Foo<T:Key> {x:T}
   
    struct Bar {x:Foo<u8>}
    //                ^ 오류! u8에는 'key' 능력이 없습니다.
    
     struct Baz<T> { x: Foo<T> }
    //                      ^ 오류! T에는 'key' 능력이 없습니다.

}
`;
  const code19 = `  module example::test {
    struct R {}
 
    fun unsafe_consume<T>(x: T) {
     // 오류! x에는 'drop' 능력이 없습니다.
    }
 
    fun consume<T: drop>(x: T) {
     // 유효합니다!
     // x는 자동으로 드롭됩니다.
    }
 
    fun foo() {
     let r = R {};
     consume<R>(r);
     //      ^ 오류! R에는 'drop' 능력이 없습니다.
 }
`;
  const code20 = `  module example::test {
    struct R {}

    fun unsafe_double<T>(x:T) {
        (copy x,x)
        // 오류! x에는 'copy' 능력이 없습니다.
    }

    fun double<T:copy>(x:T) {
        (copy x,x)= //유효
    } 
    
    fun foo():(R,R) {
        let r= R {};
        double<R>(r)
        //     ^ 오류! R에는 'copy' 능력이 없습니다.
    }
}
`;
  const code21 = `  module example::test {
    struct Foo<T> {
        x:Foo<u64>// 오류! 'Foo'가 'Foo'를 포함하고 있습니다.
    }

    struct Bar<T> {
        x:Bar<T>// 오류! 'Bar'가 'Bar'를 포함하고 있습니다.
    }
  // 오류! 'A'와 'B'는 사이클을 형성하여 허용되지 않습니다.
    struct A<T> {
        x:B<T,u64>
    }

    struct B<T1,T2>{
        x:A<T1>
        y:A<T2>
    }
}
`;
  const code22 = `  module example::test {
    struct A<T>{}

   // 유한한 수의 타입 -- 허용됩니다.
   // foo<T> -> foo<T> -> foo<T> -> ...는 유효합니다.
   fun foo<T>() {
        foo<T>();
    }
    // 유한한 수의 타입 -- 허용됩니다.
    // foo<T> -> foo<A<u64>> -> foo<A<u64>> -> ...는 유효합니다.
     fun foo<T>() {
        foo<A<u64>>();
    }
}
`;
  const code23 = `  module example:test {
    struct A<T>{}
    // 무한한 수의 타입 -- 허용되지 않습니다.
    // 오류!
    // foo<T> -> foo<A<T>> -> foo<A<A<T>>> -> ...
    fun foo<T>() {
        foo<A<T>>();
    }
}
`;
  const code24 = `  module example::test {
    struct A<T> {}
    // 무한한 수의 타입 -- 허용되지 않습니다.
    // 오류!
    // foo<T1, T2> -> bar<T2, T1> -> foo<T2, A<T1>>
    // -> bar<A<T1>, T2> -> foo<A<T1>, A<T2>>
    // -> bar<A<T2>, A<T1>> -> foo<A<T2>, A<A<T1>>>
    // -> ...
   fun foo<T1, T2>() {
        bar<T2, T1>();
    }

    fun bar<T1, T2> {
        foo<T1, A<T2>>();
    }
}
`;
  const code25 = `  module example::test {
    struct A<T>{}

    fun foo<T>(n:u64) {
        if (n>0){
            foo<A<T>>(n-1);
        };
    }
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            일반화(Generics)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제네릭(Generic)은 서로 다른 입력 데이터 유형에 대해 함수와 구조체를
            정의하는 데 사용될 수 있습니다. 이 언어 기능은 때때로 파라미터
            다형성(parametric polymorphism)으로도 참조됩니다. Move에서는 종종
            일반적으로 타입 매개변수(type parameter)와 타입 인자(type
            argument)와 같은 용어를 상호 교환하여 사용합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            제네릭은 주로 벡터(vector)와 같은 라이브러리 코드에서 사용되며, 특정
            제약 조건을 만족하는 모든 인스턴스에 대해 작동하는 코드를 선언하는
            데 사용됩니다. 다른 프레임워크에서는 제네릭 코드를 사용하여 여러
            가지 다른 방식으로 전역 저장소와 상호 작용할 수도 있지만, 그들은
            여전히 동일한 구현을 공유합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            타입 매개변수(Type Parameters) 선언
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            함수와 구조체 모두 시그니처 내에서 각각의 타입 매개변수(Type
            Parameters) 목록을 받을 수 있습니다. 이는 각각의 타입 매개변수를
            각괄호 {"<...>"}로 감싸서 표현합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Generic 함수
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            함수의 타입 매개변수는 함수 이름 뒤에 오고 (값) 매개변수 목록 앞에
            위치합니다. 다음 코드는 제네릭한 항등 함수(identity function)를
            정의합니다. 이 함수는 어떤 타입의 값을 받아들이고 그 값을 변경하지
            않고 반환합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일단 정의되면, 타입 매개변수 T는 매개변수 유형(parameter types),
            반환 유형(return types), 그리고 함수 본문 내에서 사용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일단 정의된 형식 매개변수 T는 매개변수 유형, 반환 유형 및 함수 본문
            내에서 사용할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            제네릭 구조체(Generic Structs)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체의 형식 매개변수는 구조체 이름 뒤에 배치되며, 필드의 형식을
            지정하는 데 사용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            형식 인수(Type Arguments)
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            제네릭 함수 호출
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제네릭 함수를 호출할 때는 각 형식 매개변수에 대한 형식 인수를 각괄호
            {"(< >)"}로 묶은 목록으로 지정할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            형식 인수를 지정하지 않으면 Move의 형식 추론 기능이 대신 형식 인수를
            제공합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            제네릭 구조체 사용
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제네릭 구조체의 값 생성 또는 해체 시에도, 제네릭 타입의 형식
            매개변수에 대한 형식 인수 목록을 첨부할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            형식 인수를 지정하지 않으면 Move의 형식 추론 기능이 대신 형식 인수를
            제공합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            형식 인수 불일치
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            형식 인수를 지정하고 제공된 실제 값과 충돌하는 경우에는 오류가
            발생합니다:
          </Typography>
        </Box>
        <Copy code={code5} />
        <Copy code={code6} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            형식 추론
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            대부분의 경우, Move 컴파일러는 형식 인수를 추론하여 명시적으로
            작성하지 않아도 됩니다. 아래 예시에서 형식 인수를 생략한 경우를
            보여드리겠습니다:
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            참고: 컴파일러가 형식을 추론할 수 없는 경우에는 수동으로 형식을
            주석으로 지정해야 합니다. 일반적인 시나리오는 반환 위치에서만 형식
            매개변수가 나타나는 함수를 호출하는 경우입니다.
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            그러나 만약 해당 반환 값이 함수 내에서 나중에 사용된다면, 컴파일러는
            형식을 추론할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            사용되지 않는 타입 매개변수
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체 정의에서 사용되지 않는 타입 매개변수란 구조체에서 정의된
            필드에 나타나지 않지만 컴파일 시 정적으로 확인되는 매개변수를
            말합니다. Move는 사용되지 않는 타입 매개변수를 허용하므로 다음과
            같은 구조체 정의가 유효합니다:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            특정 개념을 모델링할 때 이는 편리할 수 있습니다. 다음은 예시입니다:
          </Typography>
        </Box>
        <Copy code={code11} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 예제에서, 구조체 Coin{"<Currency>"}은 Currency 타입 매개변수에
            대해 제네릭하게 정의되어 있으며, 코인의 통화를 지정하고 코드를
            통화에 관계없이 일반적으로 작성하거나 특정한 통화에 대해 구체적으로
            작성할 수 있도록 합니다. 이 제네릭성은 Currency 타입 매개변수가
            Coin에서 정의된 어떤 필드에도 사용되지 않더라도 적용됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            팬텀 타입 매개변수
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            위의 예시에서는 struct Coin이 저장 능력을 요구하지만 Coin
            {"<Currency1>"}이나 Coin{"<Currency2>"}는 저장 능력을 갖지 않습니다.
            이는 조건부 능력과 제네릭 타입의 규칙, 그리고 Currency1과
            Currency2가 저장 능력을 갖지 않기 때문입니다. 심지어 Currency1과
            Currency2가 struct Coin의 본문에서 사용되지 않는다고 해도
            그렇습니다. 이는 일부 불편한 결과를 초래할 수 있습니다. 예를 들어,
            우리는 Coin{"<Currency1>"}을 전역 저장소의 지갑에 넣을 수 없게
            됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            한 가지 해결책은 Currency1과 Currency2에 불필요한 능력 주석을
            추가하는 것입니다 (즉, struct Currency1 has store {}). 그러나 이는
            불필요한 능력 선언으로 인해 타입을 약화시킬 수 있는 버그나 보안
            취약점을 초래할 수 있습니다. 예를 들어, 우리는 전역 저장소의
            리소스가 Currency1 타입의 필드를 가질 것을 기대하지 않지만, 불필요한
            저장 능력으로 이는 가능해질 수 있습니다. 게다가, 불필요한 주석은
            전염성을 가지며, 사용되지 않는 타입 매개변수에 대해 일반화된 많은
            함수들도 필요한 제약 조건을 포함해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            팬텀 타입 매개변수는 이 문제를 해결합니다. 사용되지 않는 타입
            매개변수를 팬텀 타입 매개변수로 표시할 수 있으며, 이는 구조체의 능력
            유도에 참여하지 않습니다. 이렇게 함으로써 팬텀 타입 매개변수의
            인수는 제네릭 타입의 능력 유도에 고려되지 않으므로 불필요한 능력
            주석이 필요하지 않게 됩니다. 이 완화된 규칙이 올바르게 적용되기
            위해서는 Move의 타입 시스템이 팬텀으로 선언된 매개변수가 구조체 정의
            내에서 전혀 사용되지 않거나, 팬텀으로 선언된 다른 타입 매개변수의
            인수로만 사용된다는 것을 보장합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            구조체 정의에서 타입 매개변수 앞에 phantom 키워드를 추가하여 타입
            매개변수를 팬텀으로 선언할 수 있습니다. 타입 매개변수가 팬텀으로
            선언되면 팬텀 타입 매개변수라고 합니다. Move의 타입 체커는 구조체를
            정의할 때, 모든 팬텀 타입 매개변수가 구조체 정의 내에서 사용되지
            않거나, 팬텀 타입 매개변수에만 인수로 사용되는지를 확인합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            더 정확히 말하면, 타입이 팬텀 타입 매개변수의 인수로 사용되면 해당
            타입은 팬텀 위치에 나타난다고 말합니다. 이 정의에 따라 팬텀
            매개변수를 올바르게 사용하기 위한 규칙은 다음과 같이 명시될 수
            있습니다: 팬텀 타입 매개변수는 팬텀 위치에만 나타날 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            다음 두 가지 예시는 팬텀 매개변수의 올바른 사용법을 보여줍니다. 첫
            번째 예시에서는 매개변수 T1이 구조체 정의 내에서 전혀 사용되지
            않습니다. 두 번째 예시에서는 매개변수 T1이 팬텀 타입 매개변수에 대한
            인수로만 사용됩니다.
          </Typography>
        </Box>
        <Copy code={code12} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음 코드는 규칙을 위반하는 예시를 보여줍니다:
          </Typography>
        </Box>
        <Copy code={code13} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            인스턴스화: 구조체를 인스턴스화할 때, 팬텀 매개변수에 대한 인수는
            구조체의 능력 유도에서 제외됩니다. 예를 들어, 다음 코드를 살펴봅시다{" "}
          </Typography>
        </Box>
        <Copy code={code14} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이제 타입 {"S<HasCopy, NoCopy>"}를 살펴봅시다. S는 복사를 갖고 있고,
            모든 팬텀이 아닌 인자는 복사를 갖고 있기 때문에
            {"S<HasCopy, NoCopy>"}도 복사를 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            능력 제약 조건이 있는 팬텀 타입: 매개변수 능력 제약 조건과 팬텀 타입
            매개변수는 직교하는 기능입니다. 즉, 팬텀 매개변수는 능력 제약 조건과
            함께 선언될 수 있습니다. 팬텀 타입 매개변수에 능력 제약 조건을
            사용하여 인스턴스화할 때, 타입 인수는 해당 제약 조건을 만족해야
            합니다. 예를 들어, 다음 정의는 완전히 유효합니다:
          </Typography>
        </Box>
        <Copy code={code15} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일반적인 제약 조건이 적용되며, T는 복사를 갖는 인자로만 인스턴스화될
            수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            제약 조건
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            위의 예제에서는 호출자가 나중에 삽입할 수 있는 "알 수 없는" 타입을
            정의하기 위해 타입 매개변수를 사용하는 방법을 보여주었습니다. 그러나
            이는 타입 시스템이 해당 타입에 대해 매우 보수적인 방식으로 검사를
            수행해야 한다는 것을 의미합니다. 어떤 의미에서는, 타입 시스템은
            제약이 없는 일반적인 타입 매개변수에 대해 최악의 경우를 가정해야
            합니다. 간단히 말해서, 기본적으로 제네릭 타입 매개변수는 어떠한
            능력도 가지지 않습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            여기에서 제약 조건이 필요한 이유가 나타납니다. 제약 조건을 사용하면
            이러한 알 수 없는 타입이 어떤 속성을 갖고 있는지를 지정할 수
            있으므로, 타입 시스템은 그렇지 않으면 안전하지 않을 수 있는 작업을
            허용할 수 있습니다.
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" gutterBottom>
              제약 조건 선언
            </Typography>
          </Box>
          <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
            <Typography variant="body1" gutterBottom>
              다음 구문을 사용하여 타입 매개변수에 제약 조건을 설정할 수
              있습니다.
            </Typography>
          </Box>
          <Copy code={code16} />
          <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
            <Typography variant="body1" gutterBottom>
              {"<ability>"}는 네 가지 능력 중 하나일 수 있으며, 타입 매개변수는
              동시에 여러 능력으로 제약 조건을 받을 수 있습니다. 따라서 다음과
              같은 모든 타입 매개변수 선언은 유효합니다:
            </Typography>
          </Box>
          <Copy code={code17} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            제약 조건 확인
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제약 조건은 호출 지점에서 확인되므로 다음 코드는 컴파일되지
            않습니다.
          </Typography>
        </Box>
        <Copy code={code18} />
        <Copy code={code19} />
        <Copy code={code20} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            재귀에 대한 제한
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            재귀적인 구조체
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제네릭 구조체는 동일한 타입의 필드를 직접 또는 간접적으로 포함할 수
            없습니다. 심지어 다른 타입 인수를 사용하더라도 동일한 타입의 필드를
            포함하는 모든 다음 구조체 정의는 잘못된 것입니다:
          </Typography>
        </Box>
        <Copy code={code21} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            고급 주제: 타입 수준의 재귀
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 언어는 제네릭 함수를 재귀적으로 호출할 수 있게 허용합니다.
            그러나 이를 제네릭 구조체와 함께 사용할 경우 특정한 경우에는 무한한
            수의 타입이 생성될 수 있으며, 이를 허용하는 것은 컴파일러, 가상 머신
            및 다른 언어 구성 요소에 불필요한 복잡성을 추가하는 것을 의미합니다.
            따라서 이러한 재귀는 금지되어 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            허용되는 것:
          </Typography>
        </Box>
        <Copy code={code22} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            허용되지 않는 것:
          </Typography>
        </Box>
        <Copy code={code23} />
        <Copy code={code24} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            참고로, 타입 수준의 재귀에 대한 체크는 호출 지점에 대한 보수적인
            분석을 기반으로 하며, 제어 흐름이나 런타임 값은 고려하지 않습니다.
          </Typography>
        </Box>
        <Copy code={code25} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            위의 예시에서 함수는 기술적으로는 주어진 입력에 대해 종료되며,
            따라서 유한한 수의 타입만 생성됩니다. 그러나 Move의 타입
            시스템에서는 여전히 이를 유효하지 않은 것으로 간주합니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
