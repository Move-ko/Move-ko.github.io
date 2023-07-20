import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Copy from "../util/copy";

const study_1 = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const bools = [
    {
      통사론: "&&",
      설명: "단락 논리 및",
      등가표현: "p && q에 해당합니다 if(p)q else false",
    },
    {
      통사론: "||",
      설명: "단락 논리 또는",
      등가표현: "p || q 에 해당합니다 if(p) true else q",
    },
    {
      통사론: "!",
      설명: "논리적 부정",
      등가표현: "!p에 해당합니다 if(q) false else true",
    },
  ];
  const code1 = `      
  if bool_표현식 {
 // bool_표현식이 true일 경우 실행되는 코드 블록
 } else {
  // bool_표현식이 false일 경우 실행되는 코드 블록
 }

`;
  const code2 = `      while bool_표현식 {
    // bool_표현식이 true인 동안 반복적으로 실행되는 코드 블록
  }
`;
  const code3 = `     assert!(bool_표현식, 오류_메시지); `;

  const code4 = `          let a = true  //true
          let b = false //false
          let c = true && false //false
          let d = false || true //true
          let e = true || false && true //true
          let f = !true //false
          let g = !false  //true
          let h = !true || true //true
          let i = false || true && false //false  
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
        <Typography variant="body1" gutterBottom>
          <span style={{ color: "purple" }}>
            * bool은 세가지 논리 연산을 지원합니다.
          </span>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>설명</StyledTableCell>
                <StyledTableCell>등가표현</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {bools.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                  <StyledTableCell>{item?.등가표현}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            bool 값은 Move의 여러 제어 흐름 구조에서 사용됩니다:
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          <span style={{ color: "purple" }}>* if문</span>
        </Typography>
        <Copy code={code1} />
        <Typography variant="body1" gutterBottom>
          <span style={{ color: "purple" }}>* while문</span>
        </Typography>
        <Copy code={code2} />
        <Typography variant="body1" gutterBottom>
          <span style={{ color: "purple" }}>
            3) assert:이 연산은 두 개의 인자를 받습니다: bool 타입의 조건과 u64
            타입의 코드
          </span>
        </Typography>
        <Copy code={code3} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            정리
          </Typography>
          <Typography variant="body1" gutterBottom>
            다른 스칼라 값들과 마찬가지로, 언어 내장의 boolean 값들은 암시적으로
            복사 가능합니다. 즉, copy와 같은 명시적인 지시어 없이도 복사할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code4} />
      </Grid>
    </Grid>
  );
};

export default study_1;
