import Grid from "@mui/material/Unstable_Grid2";
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
      </Grid>
    </Grid>
  ); //
};

export default study_1;
