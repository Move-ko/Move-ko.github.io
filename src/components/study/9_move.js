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
  const code30 = `  let (x1, y, z1) = three(); // ERROR!
  //       ^ unused local 'y'`;
  const code31 = `      let (x, y): (u64, u64) = (0, 1);
  //       ^                           local-variable
  //       ^                           pattern
  //          ^                        local-variable
  //          ^                        pattern
  //          ^                        pattern-list
  //       ^^^^                        pattern-list
  //      ^^^^^^                       pattern-or-list
  //            ^^^^^^^^^^^^           type-annotation
  //                         ^^^^^^^^  initializer
  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-binding
  
      let Foo { f, g: x } = Foo { f: 0, g: 1 };
  //      ^^^                                    struct-type
  //            ^                                field
  //            ^                                field-binding
  //               ^                             field
  //                  ^                          local-variable
  //                  ^                          pattern
  //               ^^^^                          field-binding
  //            ^^^^^^^                          field-binding-list
  //      ^^^^^^^^^^^^^^^                        pattern
  //      ^^^^^^^^^^^^^^^                        pattern-or-list
  //                      ^^^^^^^^^^^^^^^^^^^^   initializer
  //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ let-binding`;
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
    
        // This example will complain about unused variables and assignments.
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
  x = false; // ERROR!`;
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
  x + y // ERROR!
  //  ^ unbound local 'y'`;
  const code42 = `  {
    let x = 0;
    {
        let y = x + 1; // valid
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
    x + 1; // value is discarded
    x + 2; // value is discarded
    b"hello"; // value is discarded
}`;
  const code48 = `  {
    let x = 0;
    Coin { value: x }; // ERROR!
//  ^^^^^^^^^^^^^^^^^ unused value without the drop ability
    x
}`;
  const code49 = `  // Both are equivalent
  { x = x + 1; 1 / x; }
  { x = x + 1; 1 / x; () }`;
  const code50 = `  // Both are equivalent
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
  
  let x = 1; // x is shadowed
  assert!(x == 1, 42);
  
  `;
  const code53 = `  let x = 0;
  assert!(x == 0, 42);
  
  let x = b"hello"; // x is shadowed
  assert!(x == b"hello", 42);
  
  `;
  const code54 = `  address 0x42 {
    module example {
        struct Coin has store { value: u64 }

        fun unused_resource(): Coin {
            let x = Coin { value: 0 }; // ERROR!
//              ^ This local still contains a value without the drop ability
            x.value = 1;
            let x = Coin { value: 10 };
            x
//          ^ Invalid return
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
  //      ------ Local was moved here
  let z = move x + 2; // Error!
  //      ^^^^^^ Invalid usage of local 'x'
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
            로컬 변수 및 범위
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move의 지역 변수는 어휘(
            <Span text={"정적으로"} />) 범위가 지정됩니다. 새 변수는
            <Span text={"let"} />
            키워드로 도입되며 동일한 이름을 가진 이전 로컬을 숨깁니다. 로컬은
            변경 가능하며 직접 업데이트하거나 변경 가능한 참조를 통해 업데이트할
            수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            지역 변수 선언
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            let bindings
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move는 <Span text={"let"} />을 사용하여 변수 이름을 값에
            바인딩합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            <Span text={"let"} />은 지역변수에 값을 바인딩하지 않고 사용할 수도
            있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그런 다음 지역변수에 나중에 값을 할당할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Copy code={code3} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이는 기본값을 제공할 수 없을 때 루프에서 값을 추출하려고 할 때 매우
            유용할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Copy code={code4} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            사용하기 전에 변수를 초기화해야합니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move의 유형 시스템은 지역 변수가 할당되기 전에 사용되는 것을
            방지합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            유효한 변수 이름
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            변수 이름에는 밑줄 <Span text={"_, 문자 a~z, 문자 A~Z, 숫자 0~9"} />
            가 포함될 수 있습니다. 변수 이름은 <Span text={"밑줄 _"} />
            또는 문자 <Span text={" a~z"} />로 시작해야 합니다. 대문자로 시작할
            수 없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            유형 주석
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수의 유형은 거의 항상 Move의 유형 시스템에서 유추할 수
            있습니다. 그러나 Move는 가독성, 명확성 또는 디버깅 가능성에 유용할
            수 있는 명시적 형식 주석을 허용합니다. 유형 주석을 추가하는 구문은
            다음과 같습니다.
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
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code9} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            명시적 유형 주석의 몇 가지 예:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code10} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            유형 주석은 항상 패턴의 오른쪽에 있어야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code11} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h3" gutterBottom>
            주석이 필요한 경우
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            경우에 따라 유형이 다음과 같은 경우 지역변수 유형 주석이 필요합니다.
            시스템이 유형을 유추할 수 없습니다. 이것은 일반적으로 유형이 다음과
            같은 경우에 발생합니다. 제네릭 형식에 대한 인수를 유추할 수
            없습니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code12} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            드물게 유형 시스템이 유형을 유추하지 못할 수 있습니다. 발산 코드의
            경우( <Span text={"다음 코드에 도달할 수 없는 경우"} />
            ). <Span text={"return"} />과 <Span text={"abort"} />는 둘 다
            표현식이며 모든 유형을 가질 수 있습니다. 루프 중단이 있으면{" "}
            <Span text={"()"} />
            유형을 가지지만 중단이 없는 경우 루프, 모든 유형을 가질 수 있습니다.
            이러한 유형을 유추할 수 없는 경우 유형 주석이 필요합니다. 예를 들어
            이 코드는 다음과 같습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code13} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 코드에 유형 주석을 추가하면 다음에 대한 다른 오류가 노출됩니다.
            데드 코드 또는 사용되지 않는 지역 변수, 그러나 예제는 여전히 이
            문제를 이해하는 데 도움이 됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h3" gutterBottom>
            튜플을 사용한 여러 선언
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let을 사용하여 튜플을 이용해 한 번에 여러 개의 로컬 변수를 동시에
            선언할 수 있습니다. 괄호 내에 선언된 로컬 변수들은 튜플에서 해당하는
            값으로 초기화됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code14} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            표현식의 유형은 튜플 패턴의 인자 수와 일치해야 합니다. 정확히.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code15} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            동일한 이름을 가진 로컬을 두 개 이상 선언할 수 없습니다. 싱글 렛.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code16} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            구조체가 있는 여러 선언
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let은 한 번에 둘 이상의 지역을 소개할 수도 있습니다. 구조체를
            분해(또는 일치)합니다. 이 형식에서 let 값으로 초기화되는 지역 변수
            세트를 생성합니다. 구조체의 필드. 구문은 다음과 같습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code17} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code18} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            다음은 더 복잡한 예입니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code19} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            구조체의 필드는 두 가지 역할을 수행할 수 있습니다. 바인드 및 변수의
            이름. 이것은 때때로 다음과 같이 언급됩니다. 말장난.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code20} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            다음과 같습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code21} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            튜플과 같이 둘 이상의 로컬을 선언할 수 없습니다. 하나의 let에 같은
            이름.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code22} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            참조에 대한 파괴{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            구조체에 대한 위의 예에서 let의 바운드 값은 다음과 같습니다.
            이동하여 구조체 값을 파괴하고 해당 필드를 바인딩합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code23} />
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code24} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              " 이 시나리오에서 구조체 값 T { f1: 1, f2: 2 }는 let 뒤에 더 이상 존재하지 않습니다. 대신 구조체 값을 이동하거나 파괴하지 않으려면 각 필드를 빌릴 수 있습니다. 예를 들면 다음과 같습니다."
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code25} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            변경 가능한 참조와 마찬가지로 다음과 같습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code26} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 동작은 중첩 구조체에서도 작동할 수 있습니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code27} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            값 무시
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let 바인딩에서 일부 값을 무시하는 것이 종종 도움이 됩니다. 현지의
            _로 시작하는 변수는 무시되며 새 변수를 도입하지 않습니다. 변수{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code28} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code29} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            컴파일러가 사용하지 않을 때 오류가 발생하므로 때때로 필요할 수
            있습니다. 지역 변수
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code30} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            일반 let 문법{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              "let의 모든 다른 구조를 결합할 수 있습니다! 이를 통해 let 문의 일반 문법에 도달합니다. let-binding → let pattern-or-list type-annotationopt initializeropt > pattern-or-list → pattern | ( pattern- list ) > pattern-list → pattern ,opt | pattern , pattern-list > type-annotation → : type initializer → = expression 바인딩을 도입하는 항목에 대한 일반 용어는 패턴입니다. ) 바인딩을 소개합니다.패턴 문법은 다음과 같습니다:pattern → local-variable | struct-type { field-binding-list } > field-binding-list → field-binding ,opt | field-binding , field-binding- list > field-binding → field | field : pattern이 문법이 적용된 몇 가지 구체적인 예:"
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code31} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            돌연변이
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            과제
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            로컬이 도입된 후(let 또는 함수로) 매개변수) 로컬은 할당을 통해
            수정할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code32} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let 바인딩과 달리 할당은 표현식입니다. 일부 언어에서는 할당은 할당된
            값을 반환하지만 Move에서는 할당 유형은 항상 ()입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code33} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              " 실질적으로 할당이 표현식이라는 것은 중괄호({...})가 있는 새 표현식 블록을 추가하지 않고 사용할 수 있음을 의미합니다."
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code34} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            할당은 let 바인딩과 동일한 패턴 구문 체계를 사용합니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code35} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            지역 변수는 하나의 유형만 가질 수 있으므로 로컬은 할당 간에 변경할
            수 없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code36} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            참조를 통한 변형
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            할당으로 로컬을 직접 수정하는 것 외에도 로컬 변경 가능한 참조 &mut를
            통해 수정할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code37} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이것은 다음과 같은 경우에 특히 유용합니다. (1) 수정하려는 경우 어떤
            조건에 따라 다른 변수.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code38} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            (2) 다른 함수가 로컬 값을 수정하기를 원합니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code39} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이러한 종류의 수정은 구조체와 벡터를 수정하는 방법입니다!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code40} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            자세한 내용은 참조 이동을 참조하십시오.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            범위
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              " let으로 선언된 로컬은 해당 범위 내에서 후속 표현식에 사용할 수 있습니다. 범위는 {...} 식 블록으로 선언됩니다. 로컬은 선언된 범위 외부에서 사용할 수 없습니다. "
            }{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code41} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그러나 외부 범위의 로컬은 중첩 범위에서 사용할 수 있습니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code42} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            로컬은 액세스할 수 있는 모든 범위에서 변경될 수 있습니다. 저것
            돌연변이는 범위에 관계없이 로컬과 함께 살아남습니다. 돌연변이를
            수행했습니다.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code43} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            표현식 블록{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            식 블록은 다음으로 구분되는 일련의 문입니다. 세미콜론(;). 식 블록의
            결과 값은 블록의 마지막 표현식 값.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code44} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 예에서 블록의 결과는 x + y입니다. 진술은 할 수 있습니다 let 선언
            또는 표현식이어야 합니다. 기억 할당(x = e)은 () 유형의 표현식입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code45} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            함수 호출은 () 유형의 또 다른 일반적인 표현입니다. 기능 데이터를
            수정하는 호출은 일반적으로 문으로 사용됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code46} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이것은 () 유형에만 국한되지 않습니다. --- 모든 표현식을 다음과 같이
            사용할 수 있습니다. 순서대로 진술!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code47} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            {
              " 하지만! 표현식에 리소스(드롭 가능성이 없는 값)가 포함되어 있으면 오류가 발생합니다. 이는 Move의 유형 시스템이 드롭된 모든 값에 드롭 가능성이 있음을 보장하기 때문입니다.(소유권을 이전하거나 값을 이전해야 합니다. 선언 모듈 내에서 명시적으로 소멸됩니다.)"
            }
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code48} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            최종 표현식이 블록에 없으면 ---즉, 후행 세미콜론 ;, 암시적 단위()
            값이 있습니다. 마찬가지로 표현식 블록이 비어 있으면 암시적 단위()
            값.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code49} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code50} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            식 블록은 그 자체로 식이며 어디에서나 사용할 수 있습니다. 표현이
            사용됩니다. (참고: 함수의 본문은 또한 식 블록이지만 함수 본문은
            다음으로 대체할 수 없습니다. 다른 표현.)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code51} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            (이 예에서는 유형 주석이 필요하지 않으며 추가만 됩니다. 명확성을
            위해.)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            섀도잉
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            let이 이미 범위에 있는 이름을 가진 지역 변수를 도입하는 경우, 그
            이전 변수는 나머지 기간 동안 더 이상 액세스할 수 없습니다. 이 범위.
            이것을 쉐도잉이라고 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code52} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            로컬이 섀도 처리되면 동일한 유형을 유지할 필요가 없습니다. 이전과.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code53} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            로컬이 가려진 후에도 로컬에 저장된 값은 여전히 존재하지만 더 이상
            액세스할 수 없습니다. 이것은 유지하는 것이 중요합니다 드롭 기능이
            없는 유형의 값을 소유권으로 염두에 두십시오. 의 값은 함수가 끝날
            때까지 전송되어야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code54} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            로컬이 범위 내에서 섀도잉되면 섀도잉만 남습니다. 해당 범위에 대해.
            범위가 끝나면 그림자가 사라집니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code55} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            지역 주민은 그림자가 드리워지면 유형을 변경할 수 있음을
            기억하십시오.{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code56} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            이동 및 복사
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move의 모든 지역 변수는 두 가지 방법으로 사용할 수 있습니다. 또는
            복사합니다. 둘 중 하나가 지정되지 않은 경우 Move 컴파일러는 복사
            또는 이동을 사용해야 하는지 여부를 추론할 수 있습니다. 이것은
            의미합니다 위의 모든 예에서 이동 또는 복사는 컴파일러에 의해
            삽입됩니다. 없이는 지역 변수를 사용할 수 없습니다. 이동 또는 복사
            사용. 사본이 가장 친숙하게 느껴질 것입니다. 새로운 사본을 생성하므로
            다른 프로그래밍 언어에서 해당 식에서 사용할 변수 내부의 값입니다. 와
            함께 copy, 지역 변수는 두 번 이상 사용할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code57} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            복사 기능이 있는 값은 이 방법으로 복사할 수 있습니다. 이동하다
            데이터를 복사하지 않고 로컬 변수에서 값을 가져옵니다. 이동이 발생한
            후에는 로컬 변수를 사용할 수 없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code58} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            안전
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move의 유형 시스템은 값이 지정된 후에 사용되는 것을 방지합니다.
            움직이는. 이것은 let 선언에 설명된 것과 동일한 안전 검사입니다.
            할당되기 전에 지역 변수가 사용되는 것을 방지합니다. 가치.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            추론
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            위에서 언급했듯이 Move 컴파일러는 다음과 같은 경우 복사 또는 이동을
            유추합니다. 하나는 표시되지 않습니다. 이를 수행하는 알고리즘은 매우
            간단합니다. 복사 기능이 있는 모든 스칼라 값에는 복사본이 제공됩니다.
            어느 참조(가변 &mut 및 불변 & 모두)에 사본이 제공됩니다. 위해
            이동하는 특별한 경우를 제외하고는 예측 가능한 빌림 검사기 오류. 다른
            모든 값에는 이동이 제공됩니다. 이것은 다른 값이 복사본을 가질 수
            있음을 의미합니다. 프로그래머가 명시적으로 수행해야 합니다. 이것은
            큰 데이터 구조의 우발적 복사를 방지합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code59} />
      </Grid>
    </Grid>
  );
};

export default study_1;
