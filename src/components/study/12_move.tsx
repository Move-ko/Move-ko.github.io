import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    fun main(){
        if (x>5) x= x-5
    }
}
`;
  const code2 = `  module example::test {
    fun main(){
        if (x <= 5 ) y = y+1 else y = 10
    }
}
`;
  const code3 = `  module example::test {
    fun main(){
       let z = if (x < 100) x else 100;
    }
}
`;
  const code4 = `  module example::test {
    fun main(){
        // x와 y는 u64 정수여야 합니다.
        let maximum:u64 = if(x>y) x else y;
        // 오류! 분기가 다른 타입입니다.
        let z= if (maximum <10 )10u8 else 100u64;
        // 오류! 분기가 다른 타입입니다. 기본적으로 거짓 분기는 u64가 아닌 ()입니다.
        if (maximum >= 10) maximum;
    }
}
`;
  const code5 = `  module example::test {
    fun main(){
        if (condition) true_branch
        if (condition) true_branch else  ()
    }
}
`;
  const code6 = `  module example::test {
    fun main(){
        let maximum = if(x>y) x else y;
        if (maximum <10){
            x= x+10;
            y= y+10;
        }else if(x>-10 && y>=10){
            x= x-10;
            y= y-10;
        }
    }
}
`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            조건부
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            if 문은 특정 조건이 참일 때에만 코드를 실행해야 함을 명시하는
            표현입니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            조건은 bool 형식의 표현식이어야 합니다. if 표현식은 선택적으로 else
            절을 포함할 수 있습니다. else 절은 조건이 거짓일 때 평가할 다른
            표현식을 지정합니다. else 절은 if 표현식의 조건이 거짓인 경우 실행될
            대체 코드 경로를 제공합니다. 다음은 예시입니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            if 표현식에서는 "참" 분기 또는 "거짓" 분기 중 하나가 평가되지만, 둘
            다 평가되지는 않습니다. 각 분기는 단일 표현식 또는 표현식 블록일 수
            있습니다. 조건부 표현식은 결과를 가질 수 있도록 값으로 평가될 수
            있습니다. 따라서 if 표현식은 결과를 가집니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code3} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            참(True)과 거짓(False) 분기의 표현식은 호환 가능한 타입을 가져야
            합니다. 예를 들어:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code4} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            만약 else 절이 지정되지 않은 경우, 거짓 분기는 기본적으로 unit
            값으로 설정됩니다. 다음은 동등한 표현입니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            일반적으로, 표현식 블록과 함께 if 표현식이 사용됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            조건문의 문법
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            if-expression → if ( expression ) expression else-clauseopt
            else-clause → else expression
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
