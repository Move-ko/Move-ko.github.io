import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Copy from "../util/copy";

const study_1 = () => {
  const code1 = `      
  module example::test {
    fun boolean(){
      /*
           * bool은 세가지 논리 연산을 지원합니다.      
           &&	단락 논리 및	  p && q에 해당합니다       if(p)q else false
           ||	단락 논리 또는	  p || q 에 해당합니다     if(p) true else q
            !	논리적 부정	    !p에 해당합니다 if(q)     false else true
      */

      //bool 값은 Move의 여러 제어 흐름 구조에서 사용됩니다:
      //* if문
        if bool_표현식 {
       // bool_표현식이 true일 경우 실행되는 코드 블록
       } else {
        // bool_표현식이 false일 경우 실행되는 코드 블록
       }


    //while
        while bool_표현식 {
        // bool_표현식이 true인 동안 반복적으로 실행되는 코드 블록
      }


    //assert:이 연산은 두 개의 인자를 받습니다: bool 타입의 조건과 u64 타입의 코드
         assert!(bool_표현식, 오류_메시지);  

   
          let a = true  //true
          let b = false //false
          let c = true && false //false
          let d = false || true //true
          let e = true || false && true //true
          let f = !true //false
          let g = !false  //true
          let h = !true || true //true
          let i = false || true && false //false  
       }
 
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            부울
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>부울</span>은 Move에서 boolean
            <span style={{ color: "purple" }}>true</span>와
            <span style={{ color: "purple" }}>false</span> 값을 표현하기 위한
            원시 타입입니다.또한 bool 타입의 리터럴은 true 또는 false로
            표현됩니다.
          </Typography>
        </Box>
        <Copy code={code1} />
      </Grid>
    </Grid>
  );
};

export default study_1;
