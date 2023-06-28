import Grid from "@mui/material/Unstable_Grid2";
import Copy from "../util/copy";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
const study_1 = () => {
  const code1 = `  script {
    <use>*
    <constants>*
    fun <identifier><[type parameters: constraint]*>([identifier: type]*) <function_body>
}

`;
  const code2 = `  script {
    // Import the debug module published at the named account address std.
    use std::debug;

    const ONE: u64 = 1;

    fun main(x: u64) {
        let sum = x + ONE;
        debug::print(&sum)
    }
}
`;
  const code3 = `  module <address>::<identifier> {
    (<use> | <friend> | <type> | <function> | <constant>)*
}
`;
  const code4 = `  module 0x42::example {
    struct Example has copy, drop {
       i: u64 
       }

    use std::debug;

    friend 0x42::another_example;
       
    const ONE: u64 = 1;
       
    public fun print(x: u64) {
               let sum = x + ONE;
               let example = Example { i: sum };
               debug::print(&sum)
    }
}
`;
  const code5 = `  module example_addr::example {
    struct Example has copy, drop { a: address }

    use std::debug;
    friend example_addr::another_example;

    public fun print() {
        let example = Example { a: @example_addr };
        debug::print(&example)
    }
}
`;
  const code6_1 = `  script {
    fun example() {
        my_addr::m::foo(@my_addr);
    }
}
`;
  const code6 = `  script {
    fun example() {
        0xC0FFEE::m::foo(@0xC0FFEE);
    }
}
`;
  const code7 = `  module my_module {}
  module foo_bar_42 {}
`;
  const code8 = `  // Example Module
  module overmind::bananas {
  
      use std::vector;
      use std::signer;
  
      struct BananaStore has key {
          bushels: vector<Bushel>
      }
  
      struct Bushel has store, drop {
          bananas: vector<Banana>
      }
  
      struct Banana has store, drop {}
  
      public entry fun buy_banana(buyer: &signer) acquires BananaStore {
          let buyer_address = signer::address_of(buyer);
  
          if (!exists<BananaStore>(buyer_address)) {
              move_to(
                  buyer,
                  BananaStore {
                      bushels: vector<Bushel>[]
                  }
              );
          };
  
          let bananaStore = borrow_global_mut<BananaStore>(buyer_address);
  
          let bushels_mut_ref = &mut bananaStore.bushels;
  
          let bushel_new = Bushel {
              bananas: vector<Banana>[
                  Banana {},
                  Banana {},
                  Banana {},
                  Banana {}
              ]
          };
  
          vector::push_back<Bushel>(bushels_mut_ref, bushel_new);
      }
  
      public entry fun eat_banana(account: &signer) acquires BananaStore {
          let account_address = signer::address_of(account);
  
          let bananaStore = borrow_global_mut<BananaStore>(account_address);
          let bushels_mut_ref = &mut bananaStore.bushels;
          let first_bushel = vector::remove<Bushel>(bushels_mut_ref, 0);
  
          let _ = vector::pop_back<Banana>(&mut first_bushel.bananas);
  
          if (vector::length<Banana>(&mut first_bushel.bananas) != 0) {
              vector::insert<Bushel>(bushels_mut_ref, 0, first_bushel);
          }
      }
  }
  

`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            1️⃣ 모듈과 스크립트
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move는 두 가지 종류의 프로그램인 모듈(Module)과 스크립트(Script)를
            가지고 있습니다. 모듈은 구조체 타입과 이러한 타입에 작용하는 함수를
            정의하는 라이브러리입니다. 구조체 타입은 Move의 전역 스토리지의
            스키마를 정의하며, 모듈 함수는 스토리지를 업데이트하는 규칙을
            정의합니다. 모듈 자체도 전역 스토리지에 저장됩니다. 스크립트는
            전통적인 언어에서의 main 함수와 유사한 실행 가능한 진입점입니다.
            스크립트는 일반적으로 전역 스토리지에 대한 업데이트를 수행하는
            게시된 모듈의 함수를 호출합니다. 스크립트는 전역 스토리지에 게시되지
            않는 일시적인 코드 조각입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Move 소스 파일(또는 컴파일 단위)에는 여러 개의 모듈과 스크립트를
            포함할 수 있습니다. 그러나 모듈을 게시하거나 스크립트를 실행하는
            것은 별개의 VM(가상 머신) 작업입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            스크립트
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}> ex)스크립트 구조</Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            script는 use({" "}
            <span style={{ color: "purple" }}>
              다른 모듈에서 유형을 가져오는데 사용하는 함수
            </span>
            )로 선언으로 시작하며 그 밑에 상수 그밑에 함수순으로 진행
            되어야합니다.main함수는 어떤 이름이든 가질수 있으며(
            <span style={{ color: "purple" }}>
              main함수를 호출할 필요가 없음.
            </span>
            )스크립트 내의 유일한 함수이며 인수를 얼마든지 가질수 있고 값은
            반환할수 없습니다.또한 스크립트에는 스크립트는 권한이 매우 제한되어
            있습니다(
            <span style={{ color: "purple" }}>
              Friends함수를 선언하거나 유형을 구성하거나 전역저장소에 접근 할 수
              없습니다.
            </span>
            )주요 목적은 모듈 함수를 호출하는 것입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left" }}></Box>
        <Typography>
          <span style={{ color: "purple" }}>
            * friend: 현재 모듈에서 신뢰하는 모듈을 선언하는 데 사용됩니다.
          </span>
        </Typography>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>

      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            모듈
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12}>
        {" "}
        <span style={{ color: "purple" }}>*모듈 구조</span>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code3} />
      </Grid>
      <Typography variant="body1" gutterBottom>
        일반적으로 모듈 이름은 소문자로 시작합니다 명명된 모듈은 my_module명명된
        소스파일에 저장되어야 합니다.모듈 블록 내의 모든 요소는 어떤 순서로든
        나타날 수 있습니다. 기본적으로 모듈은 유형과 함수의 집합입니다.
      </Typography>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *address:명명된 주소({" "}
              <span style={{ color: "purple" }}>이름이 붙여진 주소</span>) 또는
              리터럴 주소
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *const:모듈의 함수에서 사용할수있는 전용{" "}
              <span style={{ color: "purple" }}>상수</span>를 지정
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code4} />
      </Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 module 0x42::example모듈의 부분은 모듈이 전역저장소의 계정주소로
            게시되도록 지정합니다 모듈은 명명된 주소(
            <span style={{ color: "purple" }}>이름이 붙여진 주소</span>
            )를 사용하여 선언할수도 있습니다
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            명명된 주소({" "}
            <span style={{ color: "purple" }}>이름이 붙여진 주소</span>)는
            소스언어 수준과 컴파일 중에만 존재하기 떄문에 명명된 주소는
            바이트코드 수준에서 해당 값을 완전히 대체합니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            my_addr로 설정하여 컴파일하면{" "}
            <span style={{ color: "purple" }}>0xC0FFEE</span>운영상 다음과
            동일합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그러나 소스 수준에서 이들은 동일하지 않습니다.함수는 해당 주소에
            할당된 숫자값이 아니라 명명된 주소를 통해 엑세스 해야 m::foo합니다
            모듈 이름은 문재 <span style={{ color: "purple" }}>a to z</span>{" "}
            또는 <span style={{ color: "purple" }}>Ato</span>로 시작할수
            있습니다
          </Typography>
          <Typography variant="body1" gutterBottom>
            첫번쨰 문자 뒤에 모듈 이름에는{" "}
            <span style={{ color: "purple" }}>밑줄 a~z,A~Z</span>또는{" "}
            <span style={{ color: "purple" }}>숫자</span>가 포함될수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            🤨모듈 특징정리
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>

      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            1. 모듈 요소(사용, 상수, 함수 등)는 특정 순서로 구성되어야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.모듈은 <span style={{ color: "purple" }}>전역저장소에</span>
            저장됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            3.모듈은 main이라는 함수를 포함해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            4. <span style={{ color: "purple" }}>구조체</span>는 모듈에서
            유효합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.모듈의 어떤 함수도 반환 값을 가질 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            6.모듈에는 하나의 함수만 선언할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.친구 모듈은 모듈 내에서 유효합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.모듈은 <span style={{ color: "purple" }}>주소</span>와{" "}
            <span style={{ color: "purple" }}>식별자</span>로 선언해야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            👩‍🎓스크립트 특징정리
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>

      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            1.스크립트는 <span style={{ color: "purple" }}>전역저장소</span>에
            저장되지 않습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.스크립트 요소(사용, 상수, 함수 등)는{" "}
            <span style={{ color: "purple" }}>특정순서</span>로 구성되어야
            합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            3.스크립트 블록에는 하나의 함수만 선언할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            4. 스크립트 함수는 임의의 이름을 가질 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.상수는 스크립트에서 유효합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            6.스크립트에는 하나의 함수만 선언할 수 있으며 이름은 main으로
            지정해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.스크립트에 선언된 함수는 얼마든지 있을 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.friend 모듈은 스크립트에서 선언할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            9.스크립트에서 선언된 함수는{" "}
            <span style={{ color: "purple" }}>매개변수</span>를 가질 수
            없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            10. 스크립트에서 선언된 함수는 반환 값을 가질 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            11. <span style={{ color: "purple" }}>구조체</span>는 스크립트에서
            유효합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>ex)예시</Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>
    </Grid>
  );
};

export default study_1;
