import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  #[test] // OK
  fun this_is_a_test() { ... }
  
  #[test] // Will fail to compile since the test takes an argument
  fun this_is_not_correct(arg: signer) { ... }
`;
  const code2 = `  #[test]
  #[expected_failure]
  public fun this_test_will_abort_and_pass() { abort 1 }
  
  #[test]
  #[expected_failure]
  public fun test_will_error_and_pass() { 1/0; }
  
  #[test]
  #[expected_failure(abort_code = 0, location = Self)]
  public fun test_will_error_and_fail() { 1/0; }
  
  #[test, expected_failure] // Can have multiple in one attribute. This test will pass.
  public fun this_other_test_will_abort_and_pass() { abort 1 }
`;
  const code3 = `  #[test]
  #[expected_failure]
  public fun this_test_will_abort_and_pass() { abort 1 }
  
  #[test]
  #[expected_failure]
  public fun test_will_error_and_pass() { 1/0; }
  
  #[test]
  #[expected_failure(abort_code = 0, location = Self)]
  public fun test_will_error_and_fail() { 1/0; }
  
  #[test, expected_failure] // Can have multiple in one attribute. This test will pass.
  public fun this_other_test_will_abort_and_pass() { abort 1 }
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Move 코딩 규칙
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 섹션은 Move 언어에 대한 기본적인 코딩 규칙을 설명하며, Move 팀이
            도움이 되었다고 판단한 내용입니다. 이는 단순히 권장사항일 뿐이며,
            다른 포맷 가이드 및 규칙을 선호하는 경우에는 자유롭게 사용할 수
            있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            이름 짓기 (Naming)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - 모듈 이름: 소문자 스네이크 케이스(lower snake case)를 사용해야
            합니다. 예를 들면, fixed_point32, vector 등입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 타입 이름: 원시 타입이 아닌 경우, 카멜 케이스(camel case)를
            사용해야 합니다. 예를 들면, Coin, RoleId 등입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 함수 이름: 소문자 스네이크 케이스(lower snake case)를 사용해야
            합니다. 예를 들면, destroy_empty 등입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 상수 이름: 오류 코드를 나타내는 경우, 상수 이름은 대문자 카멜
            케이스(upper camel case)여야 하며, 'E'로 시작해야 합니다. 예를 들면,
            EIndexOutOfBounds입니다. 오류가 아닌 값들을 나타내는 경우, 대문자
            스네이크 케이스(upper snake case)를 사용해야 합니다. 예를 들면,
            MIN_STAKE입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 일반적인 타입 이름: 일반적인 타입 이름은 설명적이거나, 적절한
            경우에는 반대로 기술적이어야 합니다. 예를 들면, 벡터의 일반적인 타입
            매개변수로는 T 또는 Element와 같은 이름을 사용합니다. 대부분의 경우,
            모듈 내에서 "주요" 타입은 모듈과 동일한 이름을 가져야 합니다. 예를
            들면, option::Option, fixed_point32::FixedPoint32와 같습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 모듈 파일 이름: 모듈 파일 이름은 모듈 이름과 동일해야 합니다. 예를
            들면, option.move와 같습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 스크립트 파일 이름: 스크립트 파일 이름은 소문자 스네이크
            케이스(lower snake case)여야 하며, 스크립트의 "메인" 함수의 이름과
            일치해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 혼합 파일 이름: 파일에 여러 모듈 및/또는 스크립트가 포함된 경우,
            파일 이름은 특정 모듈/스크립트의 이름과 일치하지 않는 경우에는
            소문자 스네이크 케이스(lower snake case)여야 합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Imports
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - 모든 모듈의 use 문은 모듈의 맨 위에 위치해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 함수는 해당 함수가 선언된 모듈에서 완전한 자격 이름으로 임포트되어
            사용되어야 하며, 최상위 수준에서 임포트되어서는 안 됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 타입은 최상위 수준에서 임포트되어야 합니다. 이름 충돌이 있는 경우,
            as를 사용하여 필요에 따라 로컬에서 타입 이름을 변경해야 합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            예를 들어, 다음과 같은 모듈이 있다고 가정해봅시다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음과 같이 임포트하고 사용됩니다.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            그리고, 두 모듈을 임포트할 때 로컬 이름 충돌이 있는 경우에는 다음과
            같이 사용합니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            주석(Comments)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - 각 모듈, 구조체, 그리고 공개 함수 선언은 주석이 달려야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Move 언어에서는 문서 주석을 나타내는 ///, 일반적인 한 줄 주석을
            나타내는 //, 블록 주석을 나타내는 /* /, 그리고 블록 문서 주석을
            나타내는 /* */을 사용합니다
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            서식 맞추기 (Formatting)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 팀은 서식 규칙을 강제하는 자동 서식 지원 도구를 작성할
            계획입니다. 그러나 그 도구가 준비될 때까지는 다음과 같은 방법으로
            서식을 맞추어야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 스크립트와 주소 블록을 제외한 내용에는 4칸 들여쓰기를 사용해야
            합니다. 스크립트와 주소 블록의 내용은 들여쓰기되지 않아야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 100자를 초과하는 경우, 줄은 나누어져야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 구조체와 상수는 모듈 내의 모든 함수보다 앞서 선언되어야 합니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
