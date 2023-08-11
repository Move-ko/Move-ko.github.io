import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    const <name>: <type> = <expression>;
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
            상수
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            상수(Constant)는 모듈 또는 스크립트 내에서 공유되는 정적인 값을
            이름으로 지정하는 방법입니다. 상수의 값은 컴파일 시에 알려져야
            합니다. 상수의 값은 컴파일된 모듈 또는 스크립트에 저장되며, 상수가
            사용될 때마다 해당 값의 새로운 복사본이 생성됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            선언
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            상수 선언은 const 키워드로 시작하여 이름, 유형 및 값이 이어집니다.
            상수 선언은 스크립트나 모듈 어디에서든 사용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Copy code={code2} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            이름지정
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            상수는 A부터 Z까지의 대문자로 시작해야 합니다. 첫 번째 글자 이후에는
            밑줄(_), 소문자 a부터 z, 대문자 A부터 Z, 또는 숫자 0부터 9까지의
            문자를 포함할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            상수에는 소문자 a부터 z까지의 문자를 사용할 수 있지만, 일반적인
            스타일 가이드는 각 단어 사이에 밑줄(_)을 사용하여 대문자 A부터
            Z까지의 문자만 사용하는 것입니다. A부터 Z로 시작하는 이름 지정
            제한은 향후 언어 기능을 위해 공간을 확보하기 위해 존재합니다. 나중에
            제거될 수도 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            가시성
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            현재 public 상수는 지원되지 않습니다. const 값은 선언된 모듈에서만
            사용할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            유효한 표현식
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            현재 상수는 bool, u8, u16, u32, u64, u128, u256, address, 그리고
            vector{"<u8>"}와 같은 기본 타입에 제한됩니다. "string" 스타일 리터럴
            이외의 다른 vector 값에 대한 미래 지원은 나중에 제공될 예정입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            값
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일반적으로, 상수는 해당 유형의 간단한 값을 또는 리터럴을
            할당받습니다. 예를 들어, 다음과 같습니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            복잡한 표현식
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            리터럴 외에도, 상수에는 보다 복잡한 표현식을 포함할 수 있습니다. 단,
            컴파일러가 표현식을 컴파일 시간에 값으로 축소할 수 있어야 합니다.
            현재, 동등 연산, 모든 논리 연산, 모든 비트 연산, 그리고 모든 산술
            연산을 사용할 수 있습니다
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            만약 연산이 실행 시 예외를 발생시킬 경우, 컴파일러는 상수의 값을
            생성할 수 없다는 오류를 발생시킵니다.
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            현재로서는 상수가 다른 상수를 참조할 수 없습니다. 이 기능은 다른
            표현식과 함께 나중에 추가될 예정입니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
