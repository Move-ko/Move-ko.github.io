import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  address 0x2 {
    module m {
        struct Foo {x:u64,y:bool}
        struct Bar {}
        struct Baz {foo:Foo,}
        //                 ^ 참고: 끝에 쉼표(Trailing comma)가 있는 것도 괜찮습니다.
    }
}
`;
  const code2 = `  module example::test {
    struct Foo {x:Foo}
   //              ^ 오류! Foo는 Foo를 포함할 수 없습니다.
}
`;
  const code3 = `  address 0x2 {
    module m {
        struct Foo has copy,drop {
            x:u64,
            y:bool
        }
    }
}
`;
  const code4 = `  module example::test {
    struct Foo {}
    struct BAR {}
    struct B_a_z_4_2 {}
}

`;
  const code5 = `  address 0x42 {
    module m {
        struct Foo has drop {x:u64,y:bool}
        struct Baz has drop {foo:Foo}

        fun example(){
            let foo = Foo {x:0,y:false};
            let baz = Baz {foo :foo};
        }
    }
}
`;
  const code6 = `  module example::test {
    fun main(){
        //둘은 동등합니다
        let baz = Baz {foo:foo};
    
        let baz= Baz {foo};
    }
}
`;
  const code7 = `  address 0x2 {
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
`;
  const code8 = `  module example::test {
    fun main(){
        let foo = Foo{x:3,y:true};
        let foo_ref:&Foo = &foo;
        let y= bool= foo_ref.y; // 구조체에 대한 참조를 통해 필드를 읽는 중입니다.
        let x_ref:&u64 = &foo.x;

        let x_ref_mut:&mut u64= &mut foo.x;
        *x_ref_mut= 42;// 가변 참조를 통해 필드를 수정 중입니다.
    }
}
`;
  const code9 = `  module example::test {
    fun main(){
        let foo= Foo{x:3,y:true};
        let bar= Bar{foo};
        
        let x_ref= &bar.foo.x;
    }
}
`;
  const code10 = `  module example::test {
    fun main(){
        let foo = Foo {x:3,y:true};
        let foo_ref= &foo;
        let x_ref= &foo_ref.x;
        // 이는 let x_ref = &foo.x와 동일한 효과를 가지고 있습니다.
    }
}
`;

  const code11 = `  module example::test {
    fun main(){
        let foo = Foo {x:3,y:true};
        let bar = Bar {foo:copy foo};
        let x:u64 = *foo.x;
        let y:bool = *&foo.y;
        let foo2:Foo= *&bar.foo;
    }
}
`;
  const code12 = `  module example::test {
    fun main(){
        let foo =Foo{x:3,y:true};
        let x= foo.x; //x==3
        let y= foo.y; //y ==true;
    }
}
`;
  const code13 = `  module example::test {
    fun main(){
        let baz= Baz{ foo:Foo{x:3,y:true}};
        let x= baz.foo.x;;//x= 3;
    }
}
`;

  const code14 = `  module example::test {
    fun main(){
        let foo =Foo{x:3,y:true};
        let bar= Bar {foo};
        let foo2:Foo= *&bar.foo;
        let foo3:Foo= bar.foo;// 오류! *&를 사용하여 명시적으로 복사를 추가해야 합니다.
    }
}
`;

  const code15 = `  module example::test {
    fun main(){
       let foo = Foo { x: 3, y: true };
       foo.x = 42;     // foo = Foo { x: 42, y: true }
       foo.y = !foo.y; // foo = Foo { x: 42, y: false }
       let bar = Bar { foo };            // bar = Bar { foo: Foo { x: 42, y: false } }
       bar.foo.x = 52;                   // bar = Bar { foo: Foo { x: 52, y: false } }
       bar.foo = Foo { x: 62, y: true }; // bar = Bar { foo: Foo { x: 62, y: true } }
    }
}
`;
  const code16 = `  module example::test {
    fun main(){
        let foo = Foo {x:3,y:true};
        let foo_ref= &mut foo;
        foo_ref.x= foo_ref.x+1;
    }
}
`;
  const code17 = `  //m.move
  address 0x2 {
      module m {
        struct Foo has drop {x:u64}
  
        public fun new_foo() : Foo {
            Foo { x : 42}
        }
      }
  }
`;
  const code18 = `  //n.move
  address 0x2 {
      module n {
          use 0x2::m;
  
          struct Wrapper has drop {
              foo: m::Foo
          }
  
          fun f1(foo: m::Foo){
              let x= foo.x;
              //      ^ 오류! 여기서 foo의 필드에 접근할 수 없습니다.
          }
  
          fun f2(){
              let foo_wrapper= Wrapper{foo:m::new_foo()}
          }
      }
  }
`;
  const code19 = `  script {
    fun do_nothing(){
    }
}
`;
  const code20 = `  module examples::test {
    fun example(): u64 {
    let x = 0;
    x = x + 1;
    x // returns 'x'
    }
}
`;
  const code21 = `  module std::vector {
    native public fun empty<Element>(): vector <Element>;
    ...
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            구조체 와 자원
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체(struct)는 타입화된 필드를 포함하는 사용자 정의 데이터
            구조입니다. 구조체는 다른 구조체를 포함하여 모든
            비참조(non-reference) 타입을 저장할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체 값이 복사될 수 없고 삭제될 수 없는 경우, 우리는 종종 해당
            구조체 값을 자원(resource)으로 참조합니다. 이 경우 자원 값은 함수의
            종료시에 소유권이 전달되어야 합니다. 이 특성은 자원을 전역 저장
            스키마를 정의하거나 중요한 값을 표현하는 데 매우 유용하게
            사용됩니다(예: 토큰).
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            기본적으로 구조체는 선형(linear)이고 일시적(ephemeral)입니다. 이는
            구조체가 복사될 수 없고 삭제될 수 없으며, 전역 저장소에 저장될 수
            없다는 것을 의미합니다. 이는 모든 값이 소유권이 전달되어야 한다는
            것을 의미하며, 프로그램의 실행이 끝날 때까지 값들을 처리해야 한다는
            것을 의미합니다. 우리는 구조체에 값을 복사하거나 삭제하고 전역
            저장소에 저장하거나 전역 저장 스키마를 정의하는 능력을 부여함으로써
            이 동작을 완화시킬 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            구조체(Structs) 정의하기
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체는 모듈 내부에서 정의되어야 합니다.
          </Typography>
        </Box>{" "}
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체는 재귀적으로 정의될 수 없으므로, 다음과 같은 정의는 올바르지
            않습니다.
          </Typography>
          <Copy code={code2} />
          <Typography variant="body1" gutterBottom>
            앞서 언급한 대로, 기본적으로 구조체 선언은 선형적이고 일시적입니다.
            따라서 값을 복사하거나 삭제하거나 전역 저장소에 저장하거나 저장
            스키마로 사용하는 등의 작업에 값을 사용할 수 있도록 하려면, 구조체에
            has{" <ability>"} 주석을 추가하여 구조체에 능력을 부여할 수
            있습니다.
          </Typography>
          <Copy code={code3} />
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            이름 짓기
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체는 반드시 영문 대문자 A부터 Z까지의 문자로 시작해야 합니다. 첫
            글자 다음에는 밑줄(_), 영문 소문자 a부터 z까지의 문자, 영문 대문자
            A부터 Z까지의 문자, 또는 숫자 0부터 9까지 포함될 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            A부터 Z로 시작하는 이름 지정 제한은 향후 언어 기능을 위한 여지를
            주기 위해 설정되었습니다. 이 제한은 나중에 제거될 수도 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            구조체(Structs) 생성
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체 타입의 값을 생성하려면 구조체 이름을 지정하고, 각 필드에 대한
            값들을 지정하여 "패킹"할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 필드와 동일한 이름을 가진 로컬 변수를 사용하여 구조체 필드를
            초기화하려면 다음과 같은 축약형을 사용할 수 있습니다:
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이를 종종 "필드 이름 퍼닝"이라고 부릅니다.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            구조체와 필드 빌림
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            & 및 &mut 연산자는 구조체나 필드에 대한 참조를 생성하는 데 사용될 수
            있습니다. 이 예시들은 몇 가지 선택적인 타입 어노테이션 (예: :
            &Foo)을 포함하여 작업의 타입을 보여주기 위해 포함되었습니다.
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            중첩된 구조체의 내부 필드를 빌릴 수 있습니다. .
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            또한 구조체에 대한 참조를 통해 필드를 대여할 수도 있습니다.
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            필드 읽기와 쓰기
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 필드의 값을 읽고 복사해야 한다면, 대여한 필드를 역참조할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code11} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            필드가 암시적으로 복사 가능한 경우, 점 연산자를 사용하여 구조체의
            필드를 대여하지 않고 읽을 수 있습니다. (복사 가능한 스칼라 값만
            암시적으로 복사 가능합니다.)
          </Typography>
        </Box>
        <Copy code={code12} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            점 연산자는 연쇄적으로 사용하여 중첩된 필드에 접근할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code13} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            그러나 이는 벡터나 다른 구조체와 같은 비기본 타입을 포함하는 필드에
            대해서는 허용되지 않습니다.
          </Typography>
        </Box>
        <Copy code={code14} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 설계 결정의 이유는 벡터나 다른 구조체를 복사하는 것이 비용이 많이
            들 수 있는 작업일 수 있기 때문입니다. 프로그래머는 이 복사 작업을
            인식하고 다른 사람들도 명시적인 *& 구문을 통해 인식하도록 주의해야
            합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            필드를 읽는 것 외에도, 점 구문을 사용하여 필드를 수정할 수 있습니다.
            이는 필드가 기본 타입이든 다른 구조체이든 상관없이 가능합니다.
          </Typography>
        </Box>
        <Copy code={code15} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 설계 결정의 이유는 벡터나 다른 구조체를 복사하는 것이 비용이 많이
            들 수 있는 작업일 수 있기 때문입니다. 프로그래머는 이 복사 작업을
            인식하고 다른 사람들도 명시적인 *& 구문을 통해 인식하도록 주의해야
            합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            점 구문은 구조체에 대한 참조를 통해서도 동작합니다. .
          </Typography>
        </Box>
        <Copy code={code16} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            특권 있는 구조체 작업
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체 타입 T에 대한 대부분의 구조체 작업은 T를 선언한 모듈 내에서만
            수행할 수 있습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 구조체 타입은 구조체를 정의한 모듈 내에서만 생성("패킹") 및
            해제("언패킹")할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 구조체의 필드는 구조체를 정의한 모듈 내에서만 접근할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            이러한 규칙을 따르면, 모듈 외부에서 구조체를 수정하려면 해당
            구조체를 위한 공개 API를 제공해야 합니다. 이 장의 마지막 부분에는
            이에 대한 예제가 포함되어 있습니다. 그러나 구조체 타입은 항상 다른
            모듈이나 스크립트에서 볼 수 있습니다.{" "}
          </Typography>
        </Box>
        <Copy code={code17} />
        <Copy code={code18} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            참고로, 구조체에는 가시성 수정자(예: public 또는 private)가
            없습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            소유권
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            위에서 언급한 대로, 구조체는 기본적으로 선형적이고 일시적입니다.
            이는 구조체가 복사되거나 삭제되지 않는다는 것을 의미합니다. 이
            특성은 돈과 같은 실제 세계 자원을 모델링할 때 매우 유용할 수
            있습니다. 돈을 복제하거나 유통 중에 잃어버리지 않기를 원하기
            때문입니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
