import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Copy from "../util/copy";
import Box from "@mui/material/Box";
import Span from "../util/span";
const study_1 = () => {
  const code1 = `  let x = 1;
  let y = x + x:
`;
  const code2 = `  let x;
`;
  const code3 = ` let x;
  if (cond) {
    x = 1
  } else {
    x = 0
  }
`;
  const code4 = `  let x;
  let cond = true;
  let i = 0;
  loop {
      (x, cond) = foo(i);
      if (!cond) break;
      i = i + 1;
  }
`;
  const code5 = `  let x;
  x + x // 에러발생!

`;
  const code6 = `  let x;
  if (cond) x = 0;
  x + x // 에러발생!`;
  const code7 = `  let x;
  while (cond) x = 0;
  x + x // 에러발생!
`;
  const code8 = `  //모두 유효
  let x = e;
  let _x = e;
  let _A = e;
  let x0 = e;
  let xA = e;
  let foobar_123 = e;
  
  // 모두 유효하지 않음
  let X = e; // 에러!
  let Foo = e; // 에러!
`;
  const code9 = `  let x: T = e; // T 유형의 변수 x는 표현식 e로 초기화됩니다.
`;
  const code10 = `  address 0x42 {
    module example {
    
        struct S { f: u64, g: u64 }
    
        fun annotated() {
            let u: u8 = 0;
            let b: vector<u8> = b"hello";
            let a: address = @0x0;
            let (x, y): (&u64, &mut u64) = (&0, &mut 1);
            let S { f, g: f2 }: S = S { f: 0, g: 1 };
        }
    }
}
`;

  const code11 = `  let (x: &u64, y: &mut u64) = (&0, &mut 1); // 오류! (x, y): ... =여야 합니다. `;

  const code12 = `  let _v1 = vector::empty(); // 에러가 발생!
  //        ^^^^^^^^^^^^^^^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요.
  let v2: vector<u64> = vector::empty(); //에러가 발생하지않음
  `;
  const code13 = `  let a: u8 = return ();
  let b: bool = abort 0;
  let c: signer = loop ();
  
  let x = return (); // 오류!
  //  ^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요
  let y = abort 0; // 오류!
  //  ^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요
  let z = loop (); // 오류!
  //  ^ 이 유형을 추론할 수 없습니다. 주석을 추가해 보세요
`;
  const code14 = `  let () = ();
  let (x0, x1) = (0, 1);
  let (y0, y1, y2) = (0, 1, 2);
  let (z0, z1, z2, z3) = (0, 1, 2, 3);
`;
  const code15 = `  let (x, y) = (0, 1, 2); // 오류!
  let (x, y, z, q) = (0, 1, 2); // 오류!
`;
  const code16 = `  let (x, x) = 0; // 오류!
`;
  const code17 = `  struct T { f1: u64, f2: u64 }`;
  const code18 = `  let T { f1: local1, f2: local2 } = T { f1: 1, f2: 2 };
  // local1: u64
  // local2: u64
`;
  const code19 = `  address 0x42 {
    module example {
        struct X { f: u64 }
        struct Y { x1: X, x2: X }
    
        fun new_x(): X {
            X { f: 1 }
        }
    
        fun example() {
            let Y { x1: X { f }, x2 } = Y { x1: new_x(), x2: new_x() };
            assert!(f + x2.f == 2, 42);
    
            let Y { x1: X { f: f1 }, x2: X { f: f2 } } = Y { x1: new_x(), x2: new_x() };
            assert!(f1 + f2 == 2, 42);
        }
    }
    }
`;
  const code20 = `  let X { f } = e;`;
  const code21 = `  let X { f: f } = e;`;
  const code22 = `  let Y { x1: x, x2: x } = e; // 오류!`;
  //여기부터
  const code23 = `  struct T { f1: u64, f2: u64 }`;
  const code24 = `  let T { f1: local1, f2: local2 } = T { f1: 1, f2: 2 };
  // local1: u64
  // local2: u64`;
  const code25 = `  let t = T { f1: 1, f2: 2 };
  let T { f1: local1, f2: local2 } = &t;
  // local1: &u64
  // local2: &u64`;
  const code26 = `  let t = T { f1: 1, f2: 2 };
  let T { f1: local1, f2: local2 } = &mut t;
  // local1: &mut u64
  // local2: &mut u64`;
  const code27 = `  address 0x42 {
    module example {
        struct X { f: u64 }
        struct Y { x1: X, x2: X }
    
        fun new_x(): X {
            X { f: 1 }
        }
    
        fun example() {
            let y = Y { x1: new_x(), x2: new_x() };
    
            let Y { x1: X { f }, x2 } = &y;
            assert!(*f + x2.f == 2, 42);
    
            let Y { x1: X { f: f1 }, x2: X { f: f2 } } = &mut y;
            *f1 = *f1 + 1;
            *f2 = *f2 + 1;
            assert!(*f1 + *f2 == 4, 42);
        }
    }
    }`;
  const code28 = `  fun three(): (u64, u64, u64) {
    (0, 1, 2)
}`;
  const code29 = `  let (x1, _, z1) = three();
  let (x2, _y, z2) = three();
  assert!(x1 + z1 == x2 + z2, 42);`;
  const code30 = `  let (x1, y, z1) = three(); // 오류!
  //       ^ 미사용 지역 변수 'y'`;
  const code31 = `      let (x, y): (u64, u64) = (0, 1);
  //       ^                           지역변수
  //       ^                           패턴
  //          ^                        지역변수
  //          ^                        패턴
  //          ^                        패턴목록
  //       ^^^^                        패턴목록
  //      ^^^^^^                       패턴 또는 목록
  //            ^^^^^^^^^^^^           타입주석
  //                         ^^^^^^^^  초기화자
  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-바인딩
  
      let Foo { f, g: x } = Foo { f: 0, g: 1 };
  //      ^^^                                    구조체타입
  //            ^                                필드
  //            ^                                필드-binding
  //               ^                             필드
  //                  ^                          지역변수
  //                  ^                          패턴
  //               ^^^^                          필드-binding
  //            ^^^^^^^                          필드 바인딩 목록
  //      ^^^^^^^^^^^^^^^                        패턴
  //      ^^^^^^^^^^^^^^^                        패턴 또는 목록
  //                      ^^^^^^^^^^^^^^^^^^^^   초기화자
  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-바인딩`;
  const code32 = `  x = e`;
  const code33 = `  (x = e: ())`;
  const code34 = `  let x = 0;
  if (cond) x = 1 else x = 2;`;
  const code35 = `  address 0x42 {
    module example {
        struct X { f: u64 }
    
        fun new_x(): X {
            X { f: 1 }
        }
    
        //이 예제는 사용되지 않은 변수와 할당에 대한 경고를 발생시킬 것입니다.
        fun example() {
           let (x, _, z) = (0, 1, 3);
           let (x, y, f, g);
    
           (X { f }, X { f: x }) = (new_x(), new_x());
           assert!(f + x == 2, 42);
    
           (x, y, z, f, _, g) = (0, 0, 0, 0, 0, 0);
        }
    }
    }`;
  const code36 = `  let x;
  x = 0;
  x = false; // 오류!`;
  const code37 = `  let x = 0;
  let r = &mut x;
  *r = 1;
  assert!(x == 1, 42);`;
  const code38 = `  let x = 0;
  let y = 1;
  let r = if (cond) &mut x else &mut y;
  *r = *r + 1;`;
  const code39 = `  let x = 0;
  modify_ref(&mut x);`;
  const code40 = `  let v = vector::empty();
  vector::push_back(&mut v, 100);
  assert!(*vector::borrow(&v, 0) == 100, 42);`;
  const code41 = `  let x = 0;
  {
      let y = 1;
  };
  x + y // 오류!
  //  ^ 선언되었지만 어떠한 값에도 바인딩되지 않은 'y'`;
  const code42 = `  {
    let x = 0;
    {
        let y = x + 1; // 유효
    }
}`;
  const code43 = `  let x = 0;
  x = x + 1;
  assert!(x == 1, 42);
  {
      x = x + 1;
      assert!(x == 2, 42);
  };
  assert!(x == 2, 42);`;
  const code44 = `  { let x = 1; let y = 1; x + y }`;

  const code45 = `  { let x; let y = 1; x = 1; x + y }`;
  const code46 = `  { let v = vector::empty(); vector::push_back(&mut v, 1); v }`;
  const code47 = `  {
    let x = 0;
    x + 1; // 값이 버려졌습니다
    x + 2; // 값이 버려졌습니다
    b"hello"; // 값이 버려졌습니다
}`;
  const code48 = `  {
    let x = 0;
    Coin { value: x }; // 오류!
//  ^^^^^^^^^^^^^^^^^ 삭제(drop) 기능 없이 사용되지 않는 값
    x
}`;
  const code49 = `  // 두 번역은 동등합니다
  { x = x + 1; 1 / x; }
  { x = x + 1; 1 / x; () }`;
  const code50 = `  // 두 번역은 동등합니다
  { }
  { () }`;
  const code51 = `  let my_vector: vector<vector<u8>> = {
    let v = vector::empty();
    vector::push_back(&mut v, b"hello");
    vector::push_back(&mut v, b"goodbye");
    v
};`;
  const code52 = `  let x = 0;
  assert!(x == 0, 42);
  
  let x = 1; // x 가 가려졌습니다
  assert!(x == 1, 42);
  
  `;
  const code53 = `  let x = 0;
  assert!(x == 0, 42);
  
  let x = b"hello"; // x 가 가려졌습니다
  assert!(x == b"hello", 42);
  
  `;
  const code54 = `  address 0x42 {
    module example {
        struct Coin has store { value: u64 }

        fun unused_resource(): Coin {
            let x = Coin { value: 0 }; // 오류!
//              ^ 이 지역 변수는 여전히 삭제 기능이 없는 값을 포함하고 있습니다.
            x.value = 1;
            let x = Coin { value: 10 };
            x
//          ^ 잘못된 반환
        }
    }
}`;
  const code55 = `  let x = 0;
  {
      let x = 1;
      assert!(x == 1, 42);
  };
  assert!(x == 0, 42);`;
  const code56 = `  let x = 0;
  {
      let x = b"hello";
      assert!(x = b"hello", 42);
  };
  assert!(x == 0, 42);`;
  const code57 = `  let x = 0;
  let y = copy x + 1;
  let z = copy x + 2;`;
  const code58 = `  let x = 1;
  let y = move x + 1;
  //      ------ 지역 변수가 여기로 이동되었습니다
  let z = move x + 2; // 오류!
  //      ^^^^^^"지역 변수 'x'의 잘못된 사용"
  y + z`;
  const code59 = `  let s = b"hello";
  let foo = Foo { f: 0 };
  let coin = Coin { value: 0 };
  
  let s2 = s; // move
  let foo2 = foo; // move
  let coin2 = coin; // move
  
  let x = 0;
  let b = false;
  let addr = @0x42;
  let x_ref = &x;
  let coin_ref = &mut coin2;
  
  let x2 = x; // copy
  let b2 = b; // copy
  let addr2 = @0x42; // copy
  let x_ref2 = x_ref; // copy
  let coin_ref2 = coin_ref; // copy`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            지역변수에 변수 및 범위
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move의 지역 변수는 어휘(
            <Span text={"정적으로"} />) 범위가 지정됩니다. 새 변수는
            <Span text={"let"} />
            키워드로 도입되며 동일한 이름을 가진 이전의 지역 변수를
            가려버립니다. 지역 변수는 가변(
            <Span text={"mutable"} />
            )이며, 직접적으로 업데이트하거나 가변 참조를 통해 업데이트할 수
            있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            let bindings
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move는 <Span text={"let"} />을 사용하여 변수 이름과 값을
            바인딩합니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} />은 지역변수에 값을 바인딩하지 않고도 사용할
            수도 있습니다.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            그런 다음 <Span text={"지역변수"} />에 나중에 값을 할당할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이는 기본값을 제공할 수 없는 경우에 루프에서 값을 추출하려고 할 때
            매우 유용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            변수는 사용하기 전에 할당되어야 합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 언어의 유형 시스템은 지역 변수가 할당되기 전에 사용되는 것을
            방지합니다.
          </Typography>
        </Box>
        <Copy code={code5} />
        <Copy code={code6} />
        <Copy code={code7} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            유효한 변수 이름
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            변수 이름에는 밑줄 <Span text={"_, 문자 a~z, 문자 A~Z, 숫자 0~9"} />
            가 포함될 수 있습니다. 변수 이름은 <Span text={"밑줄 _"} />
            또는 문자 <Span text={" a~z"} />로 시작해야 합니다.대문자로 시작할
            수는 없습니다.
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            유형 주석
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수의 유형은 거의 항상 Move의 유형 시스템에 의해 추론될 수
            있습니다. 그러나 Move는 <Span text={"가독성, 명확성"} /> 또는
            <Span text={"디버깅"} />
            가능성을 위해 유용한 명시적인 유형 주석을 허용합니다. 유형 주석을
            추가하는 구문은 다음과 같습니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="body1" gutterBottom>
            <Span
              text={
                "    *유형주석:변수, 매개변수, 반환 값 등에 대해 유형 정보를 명시적으로 표기하는 것을 의미"
              }
            />
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            명시적 유형 주석의 몇 가지 예:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            유형 주석은 항상 패턴의 오른쪽에 위치해야 합니다.
          </Typography>
        </Box>
        <Copy code={code11} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            주석이 필요한 경우
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일부 경우에는 유형 시스템이 유형을 추론할 수 없는 경우 로컬 유형
            주석이 필요합니다. 이는 일반적으로 제네릭 유형의 유형 인수를 추론할
            수 없는 경우에 발생합니다. 예를 들면:
          </Typography>
        </Box>
        <Copy code={code12} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            더 드물게, 유형 시스템은 타입을 추론할 수 없는 비상귀 코드(
            <Span text={"모든 다음 코드는 접근 불가능한 경우"} />
            )에 대한 타입을 결정할 수 없을 수도 있습니다.
            <Span text={"return"} /> 과 <Span text={"abort"} />는 모두 식(
            <Span text={"expression"} />
            )이므로 어떤 타입이든 가질 수 있습니다. <Span text={"break"} />가
            있는 경우 loop의 타입은 ()이지만, loop에서 <Span text={"break"} />가
            없는 경우 어떤 타입이든 가질 수 있습니다. 이러한 경우에는 타입
            주석이 필요합니다. 예를 들어, 다음 코드:
          </Typography>
        </Box>
        <Copy code={code13} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 코드에 유형 주석을 추가하면 사용되지 않는 지역 변수나 죽은 코드에
            대한 다른 오류가 드러날 수 있지만, 이 예시는 이러한 문제를 이해하는
            데 도움이 될 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            튜플을 사용한 여러개의 선언
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} />
            키워드를 사용하면 튜플을 사용하여 한 번에 여러 개의 지역 변수를
            동시에 선언할 수 있습니다. 괄호 내에 선언된 지역 변수들은 튜플에서
            해당하는 값으로 <Span text={"초기화"} />
            됩니다.
          </Typography>
        </Box>
        <Copy code={code14} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            표현식의 유형은 튜플 패턴의 개수와 정확히 일치해야 합니다. 예를
            들어, 다음과 같은 코드를 살펴보겠습니다:
          </Typography>
        </Box>
        <Copy code={code15} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            하나의 <Span text={"let"} /> 문 내에서 동일한 이름으로 여러 개의
            지역 변수를 선언할 수는 없습니다. 예를 들어, 다음과 같은 코드를
            살펴보겠습니다:
          </Typography>
        </Box>
        <Copy code={code16} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            구조체가 있는 여러개의 선언
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} /> 키워드는 구조체를 분해하거나 구조체에 대한
            매칭을 할 때 한 번에 여러 개의 로컬 변수를 동시에 선언할 수도
            있습니다. 이 형태에서 <Span text={"let"} />은 구조체의 필드 값으로
            초기화된 지역 변수 집합을 생성합니다. 구문은 다음과 같습니다:
          </Typography>
        </Box>
        <Copy code={code17} />
        <Copy code={code18} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음은 더 복잡한 예입니다.
          </Typography>
        </Box>
        <Copy code={code19} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"구조체"} />의 필드는 변수를 바인딩할 때와 변수의
            이름으로 사용될 수 있는 두 가지 역할을 동시에 수행할 수 있습니다.
            이는 때때로 <Span text={"punning"} />
            이라고도 불립니다.
          </Typography>
        </Box>
        <Copy code={code20} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음과 같습니다.
          </Typography>
        </Box>
        <Copy code={code21} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            튜플과 마찬가지로, 하나의 <Span text={"let"} /> 문 내에서 동일한
            이름으로 여러 개의 지역 변수를 선언할 수는 없습니다.
          </Typography>
        </Box>
        <Copy code={code22} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            참조를 통한 구조분해(Destructuring against references)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체 예제에서 <Span text={"let"} /> 문에서 바인딩된 값은 이동(
            <Span text={"move"} />
            )되어 구조체 값이 파괴되고 그 필드들이 바인딩됩니다.
          </Typography>
        </Box>
        <Copy code={code23} />
        <Copy code={code24} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 경우
            <Span text={" T { f1: 1, f2: 2 }"} />와 같은 구조체 값은
            <Span text={" let"} /> 이후에 더 이상 존재하지 않습니다. 대신 구조체
            값을 이동시키지 않고 파괴하지 않고 각 필드를 빌림(
            <Span text={"borrow"} />
            )하려면 다음과 같이 할 수 있습니다:
          </Typography>
        </Box>
        <Copy code={code25} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            마찬가지로 가변 참조( <Span text={"mutabale references"} />
            )를 사용하여 비슷한 방식으로 수행할 수 있습니다:
          </Typography>
        </Box>
        <Copy code={code26} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 동작은 중첩된 구조체에 대해서도 동작할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code27} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            값 무시 (Ignoring Values)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} /> 바인딩에서는 가끔씩 몇 가지 값을 무시하는 것이
            유용합니다.
            <Span text={"_"} />로 시작하는 지역 변수는 무시되며 새로운 변수를
            도입하지 않습니다
          </Typography>
        </Box>
        <Copy code={code28} />
        <Copy code={code29} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이는 때때로 필요할 수 있습니다. 사용되지 않는 지역 변수에 대해서는
            컴파일러가 <Span text={"에러"} />를 발생시킵니다.
          </Typography>
        </Box>
        <Copy code={code30} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            일반적인 let 문법(General let grammar)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            모든 다양한 구조들을 let에서 결합할 수 있습니다! 그렇게 함으로써 let
            문에 대한 <Span text={"일반적인 문법"} />을 얻을 수 있습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {` let-binding → let pattern-or-list type-annotationopt
            initializeropt > pattern-or-list → pattern | ( pattern-list ) >
            pattern-list → pattern ,opt | pattern , pattern-list >
            type-annotation → : type initializer → = expression`}
          </Typography>
          <Typography variant="body1" gutterBottom>
            바인딩을 도입하는 항목에 대한 일반적인 용어는 패턴입니다. 패턴은
            데이터를 해체하고(
            <Span text={"가능한 경우 재귀적으로"} />) 바인딩을 도입하는 데
            사용됩니다. 패턴 문법은 다음과 같습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {`pattern → local-variable | struct-type { field-binding-list } > field-binding-list → field-binding ,opt | field-binding , field-binding-list > field-binding → field | field : pattern`}
          </Typography>
          <Typography variant="body1" gutterBottom>
            이 문법을 적용한 몇 가지 구체적인 예시를 살펴보겠습니다.
          </Typography>
        </Box>
        <Copy code={code31} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h3" gutterBottom>
            변경(Mutations)
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            할당(Assignments)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수가 도입된 후 (
            <Span text={"let 또는 함수 매개변수로 도입됨"} />
            ), 할당을 통해 지역 변수를 수정할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code32} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} /> 바인딩과 달리 할당은 표현식입니다. 일부
            언어에서는 할당이 할당된 값 자체를 반환하지만, Move에서는 어떤
            할당이든 항상
            <Span text={"()"} /> 타입을 갖습니다.
          </Typography>
        </Box>
        <Copy code={code33} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            실제로, 할당이 <Span text={"표현식"} />
            이라는 것은 중괄호
            <Span text={"({ ... })"} /> 로 새로운 표현식 블록을 추가하지 않고도
            사용할 수 있다는 의미입니다
          </Typography>
        </Box>
        <Copy code={code34} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            할당은 <Span text={"let"} /> 바인딩과 동일한 패턴 구문 체계를
            사용합니다.
          </Typography>
        </Box>
        <Copy code={code35} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"지역변수"} /> 는 하나의 타입만 가질 수 있으므로, 지역
            변수의 타입은 할당 사이에 변경될 수 없습니다.
          </Typography>
        </Box>
        <Copy code={code36} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            참조를 통한 변경(Mutating through a reference)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            할당을 통해 지역 변수를 직접 수정하는 것 외에도, 지역 변수는 가변
            참조( <Span text={"&mut"} /> )를 통해 수정할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code37} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 기능은 특히 다음과 같은 경우에 유용합니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            (1) 어떤 조건에 따라 다른 변수를 수정하고 싶은 경우
          </Typography>
        </Box>
        <Copy code={code38} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            (2) 다른 함수가 로컬 값을 수정하도록 하려는 경우
          </Typography>
        </Box>
        <Copy code={code39} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 수정 작업은 구조체(
            <Span text={"struct"} />
            )와 벡터(
            <Span text={"vector"} />
            )를 수정하는 방법입니다.
          </Typography>
        </Box>
        <Copy code={code40} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            범위(Scope)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} />
            으로 선언된 모든 지역 변수는 해당 범위 내에서 이후의 모든 표현식에서
            사용할 수 있습니다. 범위는 표현식 블록
            <Span text={" {...}"} />
            으로 선언됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수는 선언된 범위 외부에서 사용할 수 없습니다.
          </Typography>
        </Box>
        <Copy code={code41} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            하지만, 외부 범위의 지역 변수는 <Span text={"중첩"} />된 범위에서
            사용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code42} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수는 접근 가능한 모든 범위에서 변경할 수 있습니다. 그 변경은
            해당 지역 변수와 함께 유지되며, 변경을 수행한 범위와는 관계없이
            유지됩니다.
          </Typography>
        </Box>
        <Copy code={code43} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            표현식 블록(Expression Blocks)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"표현식 블록"} />은 세미콜론 (<Span text={";"} />
            )으로 구분된 일련의 문장들입니다. 표현식 블록의 결과값은 블록 내
            마지막 표현식의 값입니다. 표현식 블록은 여러 개의 문장을 순차적으로
            실행하고, 각 문장의 결과를 연속적으로 평가할 수 있는 유용한
            도구입니다. 또한, 표현식 블록은 논리적인 코드 블록을 구성하고 제어
            흐름을 조작하는 데 사용될 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code44} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 예시에서 블록의 결과는 <Span text={"x + y"} />
            입니다. 문장은 let 선언이나 표현식이 될 수 있습니다. 기억해 주세요,
            할당문 <Span text={"(x = e)"} />은 <Span text={"()"} /> 타입의
            표현식입니다.
          </Typography>
        </Box>
        <Copy code={code45} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            함수 호출은 <Span text={"()"} /> 타입의 또 다른 일반적인
            표현식입니다. 데이터를 수정하는 함수 호출은 주로 문장으로
            사용됩니다.
          </Typography>
        </Box>
        <Copy code={code46} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이것은 <Span text={"()"} />
            유형에만 국한되지 않습니다. 어떤 표현식이든 순서에서 문장으로 사용될
            수 있습니다!
          </Typography>
        </Box>
        <Copy code={code47} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            하지만! 만약 표현식에 리소스 (<Span text={"drop기능이 없는 값"} />
            )가 포함되어 있다면 오류가 발생합니다. 이는 Move의 유형 시스템이
            버림(
            <Span text={"drop"} />
            )이 있는 모든 값이 drop 기능을 가지고 있다는 것을 보장하기
            때문입니다. (
            <Span
              text={
                "소유권은 전달되거나 선언된 모듈 내에서 명시적으로 파괴되어야 함을 보장합니다."
              }
            />
            )
          </Typography>
        </Box>
        <Copy code={code48} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 블록 안에 최종 표현식이 없는 경우 - 즉, 후행 세미콜론
            <Span text={";"} /> 이 있는 경우 - 암시적으로 단위
            <Span text={"()"} /> 값이 존재합니다. 마찬가지로, 표현식 블록이
            비어있는 경우에도 암시적으로 단위 <Span text={"()"} /> 값이
            있습니다.
          </Typography>
        </Box>
        <Copy code={code49} />
        <Copy code={code50} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"표현식블록"} />은 그 자체로 표현식이며, 표현식이
            사용되는 모든 곳에서 사용할 수 있습니다. (참고:
            <Span
              text={
                "함수의 본문도 표현식 블록이지만, 함수 본문은 다른 표현식으로 대체할수 없습니다."
              }
            />
            )
          </Typography>
        </Box>
        <Copy code={code51} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            (이 예시에서는 타입 주석이 필요하지 않지만, 명확성을 위해
            추가되었습니다.)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            섀도잉(shadowing)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 let을 사용하여 이미 <Span text={"scope"} />에 존재하는 이름의
            지역 변수를 도입한다면, 해당 이전 변수는 이후에 해당 스코프에서 더
            이상 접근할 수 없습니다. 이를 <Span text={"shadowing"} />
            이라고 합니다.
          </Typography>
        </Box>
        <Copy code={code52} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수가 <Span text={"shadowing"} />
            되면, 이전과 동일한 타입을 유지할 필요는 없습니다.
          </Typography>
        </Box>
        <Copy code={code53} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수가 <Span text={"shadowing"} />된 후에도 해당 변수에 저장된
            값은 여전히 존재하지만 더 이상 접근할 수 없습니다. 이는
            <Span text={"drop"} /> 기능이 없는 타입의 값들에 대해 유의해야 하는
            중요한 사항입니다. 해당 값의 <Span text={"소유권"} />은 함수가
            끝나기 전에 전달되어야 합니다.
          </Typography>
        </Box>
        <Copy code={code54} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수가 <Span text={"scope"} /> 내에서
            <Span text={"shadowing"} />된 경우, 해당 <Span text={"shadowing"} />
            은 그 <Span text={"scope"} /> 내에서만 유지됩니다. 해당 scope가
            종료되면 <Span text={"shadowing"} />은 사라집니다.
          </Typography>
        </Box>
        <Copy code={code55} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            기억해 주세요, 지역 변수는 <Span text={"shadowing"} />될 때 타입이
            변경될 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code56} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            이동 및 복사
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 언어에서는 모든 지역 변수를 <Span text={"move"} /> 또는
            <Span text={"copy"} />의 두 가지 방법으로 사용할 수 있습니다. 둘 중
            하나가 명시되지 않은 경우, Move 컴파일러는 복사(
            <Span text={"copy"} />) 또는 이동( <Span text={"move"} />
            )을 사용해야 하는지를 추론할 수 있습니다. 이는 위의 모든 예제에서
            컴파일러가 <Span text={"move"} /> 또는 <Span text={"copy"} />를
            삽입한다는 것을 의미합니다. 지역변수 변수는 <Span text={"move"} />
            또는
            <Span text={"copy"} /> 없이 사용할 수 없습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"copy"} />는 다른 프로그래밍 언어에서 익숙할 것입니다.
            변수 내부의 값을 새로 복사하여 해당 표현식에서 사용합니다.
            <Span text={"copy"} />를 사용하면 로컬 변수를 한 번 이상 사용할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code57} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            copy와 달리, <Span text={"move"} />는 데이터를 복사하지 않고 지역
            변수에서 값을 가져옵니다. Move가 발생한 후에는 해당 지역 변수를
            사용할 수 없습니다. move는 지역 변수에서 값을 가져오는 동시에
            <Span text={"변수를 비웁니다."} />
          </Typography>
        </Box>
        <Copy code={code58} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            안전
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move의 타입 시스템은 값을 <Span text={"move"} />한 후에 사용되는
            것을 방지합니다. 이는 let 선언에서 설명한 것과 동일한 안전성
            검사입니다. 이는 로컬 변수가 값을 할당하기 전에 사용되는 것을
            방지하는 기능입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            추론
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            앞서 언급한대로, Move 컴파일러는 명시적으로 복사(
            <Span text={"copy"} />) 또는 이동( <Span text={"move"} />
            )가 지정되지 않은 경우에도 자동으로 <Span text={"복사"} /> 또는
            <Span text={"이동"} />을 추론합니다. 이를 위한 알고리즘은 매우
            간단합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            ﹥복사( <Span text={"copy"} />) 능력을 갖는 스칼라 값은 복사(
            <Span text={"copy"} />
            )로 처리됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            &emsp; &emsp; ⇥참조자 ( <Span text={"가변 &mut 및 불변 &"} />) 는
            복사( <Span text={"copy"} />
            )로 처리됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            ﹥ 다만, 예측 가능한 대여 검사 오류를 위해 특수한 상황에서
            이동(move)으로 처리될 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            ﹥다른 모든 값은 이동( <Span text={"move"} />
            )으로 처리됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            &emsp; &emsp; ⇥이는 다른 값들이 복사( <Span text={"copy"} />) 능력을
            가질지라도, 프로그래머가 명시적으로 복사를 해주어야 한다는 것을
            의미합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            &emsp; &emsp; ⇥이는 실수로 큰 데이터 구조체를 복사하는 것을 방지하기
            위한 것입니다.
          </Typography>
        </Box>
        <Copy code={code59} />
      </Grid>
    </Grid>
  );
};

export default study_1;
