import Grid from "@mui/material/Unstable_Grid2";
import Copy from "../util/copy";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
            모듈과 스크립트
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
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
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            스크립트
          </Typography>
          <div>ex)스크립트 구조</div>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "40px" }}>
          <Typography variant="body1" gutterBottom>
            스크립트 블록은 모든 사용 선언부로 시작해야 하며, 상수를 그 다음에
            위치시킨 뒤 (마지막으로) 메인 함수 선언을 해야 합니다. 메인 함수는
            어떤 이름으로든 사용할 수 있으며(main으로 명명할 필요는 없음),
            스크립트 블록 내에서 유일한 함수여야 합니다. 인수의 개수에는 제한이
            없으며, 값을 반환해서는 안 됩니다. 다음은 각각의 구성 요소를 포함한
            예시입니다:
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "40px" }}>
          <Typography variant="body1" gutterBottom>
            스크립트는 제한된 권한을 갖고 있으며, 친구(friends)를 선언하거나
            구조체(struct types)를 정의하거나 전역 저장소에 접근할 수 없습니다.
            스크립트의 주요 목적은 모듈 함수를 호출하는 것입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "40px" }}>
          <Typography variant="h4" gutterBottom>
            모듈
          </Typography>
        </Box>
        <span style={{ color: "purple" }}>*모듈 구조</span>
        <Copy code={code3} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *address:명명된 주소(
              <span style={{ color: "purple" }}>이름이 붙여진 주소</span>) 또는
              리터럴 주소
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *const:모듈의 함수에서 사용할수있는 전용
              <span style={{ color: "purple" }}>상수</span>를 지정
            </span>
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            0x42::example 모듈 부분은 example 모듈이 글로벌 저장소의 0x42 주소에
            있는 계정 아래에 게시될 것임을 지정합니다. 모듈은 명명된 주소(named
            addresses)를 사용하여 선언할 수도 있습니다. 예를 들어:
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            명명된 주소는 소스 언어 수준에서만 존재하며, 컴파일 중에만
            사용되므로, 바이트코드 수준에서 명명된 주소는 해당 값으로 완전히
            대체됩니다. 예를 들어, 다음과 같은 코드가 있다고 가정해 봅시다:
          </Typography>
        </Box>
        <Copy code={code6_1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "40px" }}>
          <Typography variant="body1" gutterBottom>
            그리고 my_addr을 0xC0FFEE로 설정하여 컴파일한다면, 실제로 다음과
            같이 동작합니다:
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            하지만 소스 수준에서는 이러한 코드는 동등하지 않습니다. 함수
            m::foo는 my_addr이라는 명명된 주소를 통해 접근되어야 하며, 해당
            주소에 할당된 숫자 값으로는 접근할 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            모듈 이름은 영문자 a에서 z 또는 A에서 Z로 시작할 수 있습니다. 첫
            번째 문자 이후에는 밑줄(_), 영문자 a에서 z, 영문자 A에서 Z 또는 숫자
            0에서 9가 포함될 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일반적으로 모듈 이름은 소문자로 시작합니다. my_module이라는 모듈은
            my_module.move라는 소스 파일에 저장되어야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            모듈 블록 내의 모든 요소는 어떤 순서로든 나타날 수 있습니다.
            기본적으로 모듈은 타입과 함수의 집합입니다. use 키워드는 다른
            모듈에서 타입을 가져오는 데 사용됩니다. friend 키워드는 신뢰할 수
            있는 모듈의 목록을 지정합니다. const 키워드는 모듈의 함수에서 사용할
            수 있는 비공개 상수를 정의합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            🤨모듈 특징정리
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
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
            8.모듈은 <span style={{ color: "purple" }}>주소</span>와
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
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            1.스크립트는 <span style={{ color: "purple" }}>전역저장소</span>에
            저장되지 않습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.스크립트 요소(사용, 상수, 함수 등)는
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
            9.스크립트에서 선언된 함수는
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
