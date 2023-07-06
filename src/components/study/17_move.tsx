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
  const code2 = `  script {
    const MY_ERROR_CODE:u64 =0;

    fun main(input :u64){
        assert!(input >0,MY_ERROR_CODE);
    }
}

address 0x42 {
    module exampe {
        const MY_ADDRESS:address= @0x42;

        public fun permissioned(s:&signer){
            assert!(std::signer::address_of(s)==MY_ADDRESS,0);
        }
    }
}
`;
  const code3 = `  module example::test {
    const FLAG: bool = false;
    const MY_ERROR_CODE: u64 = 0;
    const ADDRESS_42: address = @0x42;
}
`;
  const code4 = `  module example::test {
    const MY_BOOL:bool= false;
    const MY_ADDRESS:address = @0x70DD;
    const BYTES:vector<u8> =b"hello world";
    const HEX_BYTES :vector<u8>= x"DEADBEEF";
}
`;
  const code5 = `  module example::test {
    const RULE:bool = true && false;
    const CAP:u64 = 10* 100+1;
    const SHIFTY:u8= {
        (1 <<1)*(1<<2) * (1 << 3) * (1 << 4)
    };
    const HALF_MAX: u128 = 340282366920938463463374607431768211455 / 2;
    const REM: u256 = 57896044618658097711785492504343953926634992332820282019728792003956564819968 % 654321;
    const EQUAL: bool = 1 == 1;
}
`;
  const code6 = `  module example::test {
    const DIV_BY_ZERO: u64 = 1 / 0; // 오류!
    const SHIFT_BY_A_LOT: u64 = 1 << 100; // 오류!
    const NEGATIVE_U64: u64 = 0 - 1; // 오류!
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
      </Grid>
    </Grid>
  );
};

export default study_1;
