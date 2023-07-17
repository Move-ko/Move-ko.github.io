import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  #[test] // OK
  fun this_is_a_test() { ... }
  
  #[test] // Will fail to compile since the test takes an argument
  fun this_is_not_correct(arg: signer) { ... }
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            전역 스토리지 - 구조 (Global Storage - Structure)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 프로그램의 목적은 트리 모양의 영구적인 전역 스토리지에서 읽기와
            쓰기를 수행하는 것입니다. 프로그램은 이 트리 이외의 파일시스템,
            네트워크 또는 다른 데이터에 접근할 수 없습니다. 의사 코드로 표현하면
            전역 스토리지는 다음과 같습니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조적으로, 전역 스토리지는 계정 주소를 루트로 하는 트리로 구성된
            포레스트입니다. 각 주소는 리소스 데이터 값과 모듈 코드 값 모두를
            저장할 수 있습니다. 위의 의사 코드에서와 같이
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
