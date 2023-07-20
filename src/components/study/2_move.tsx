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
      backgroundColor: " #171B1C",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const integers1 = [
    { type: "부호 없는 8비트 정수,u8", range: "0 ~ 2^8 - 1" },
    { type: "부호 없는 16비트 정수,u16", range: "0 ~ 2^16 - 1" },
    { type: "부호 없는 32비트 정수,u32", range: "0 ~ 2^32 - 1" },
    { type: "부호 없는 64비트 정수,u64", range: "0 ~ 2^64 - 1" },
    { type: "부호 없는 128비트 정수,u128", range: "0 ~ 2^128 - 1" },
    { type: "부호 없는 256비트 정수,u256", range: "0 ~ 2^256 - 1" },
  ];
  const integers2 = [
    { 통사론: "+", 작업: "덧셈", 중단: "결과가 정수 유형에 비해 너무 큽니다" },
    { 통사론: "-", 작업: "뺴기", 중단: "결과가 0보다 작음" },
    { 통사론: "*", 작업: "곱셈", 중단: "결과가 정수 유형에 비해 너무 큽니다" },
    {
      통사론: "%",
      작업: "모듈식 분할",
      중단: "제수는 0",
    },
    {
      통사론: "/",
      작업: "잘림 나누기",
      중단: "제수는 0",
    },
  ];

  const integers3 = [
    {
      통사론: "&",
      작업: "비트 및",
      설명: "부울을 수행하고 각 비트에 대해 쌍으로",
    },
    {
      통사론: "|",
      작업: "비트 또는",
      설명: "부울 또는 각 비트에 대해 쌍으로 수행",
    },
    {
      통사론: "^",
      작업: "비트 xor",
      설명: "부을 독점 또는 각 비트에 대해 쌍으로 수행",
    },
  ];
  const integers4 = [
    {
      통사론: "<<",
      작업: "왼쪽으로 이동",
      중단: "이동할 비트 수가 정수 유형의 크기보다 큽니다",
    },
    {
      통사론: ">>",
      작업: "오른쪽으로 이동",
      중단: "이동할 비트 수가 정수 유형의 크기보다 큽니다",
    },
  ];
  const integers5 = [
    { 통사론: "<", 작업: "보다 작은" },
    { 통사론: ">", 작업: "보다큰" },
    { 통사론: "<=", 작업: "작거나 같음" },
    { 통사론: ">=", 작업: "크거나 같음" },
  ];
  const integers6 = [
    { 통사론: "==", 작업: "같은" },
    { 통사론: "!=", 작업: "같지않은" },
  ];
  const integers7 = [
    {
      통사론: "(e as T)",
      작업: "e 정수 표현식을 정수 유형으로형변환T",
      설명: "e로 표현하기에는 너무 큽니다",
    },
  ];

  const code1 = `      module example::test {
            fun main(){
            //  명시적 주석이 있는 리터럴;
            let explicit_u8 = 1u8;
            let explicit_u16 = 1u16;
            let explicit_u32 = 1u32;
            let explicit_u64 = 2u64;
            let explicit_u128 = 3u128;
            let explicit_u256 = 1u256;
            let explicit_u64_underscored = 154_322_973u64;
            
            // 간단한 추론을 통한 리터럴
            let simple_u8: u8 = 1;
            let simple_u16: u16 = 1;
            let simple_u32: u32 = 1;
            let simple_u64: u64 = 2;
            let simple_u128: u128 = 3;
            let simple_u256: u256 = 1;
            
            //보다 복잡한 추론을 통한 리터럴
            let complex_u8 = 1; // 추론된: u8
            //shift의 오른쪽 피연산자는 u8이어야 합니다.
            let _unused = 10 << complex_u8;
            
            let x: u8 = 38;
            let complex_u8 = 2; //// 추론된: u8
            //인수는 동일한 타입을 가져야합니다.
            let _unused = x + complex_u8;
            
            let complex_u128 = 133_876; // 추론된: u128
            //함수 인수의 타입으로부터 추론됨
            function_that_takes_u128(complex_u128);
            
            //16진수로 리터럴을 작성할 수 있습니다.
            let hex_u8: u8 = 0x1;
            let hex_u16: u16 = 0x1BAE;
            let hex_u32: u32 = 0xDEAD80;
            let hex_u64: u64 = 0xCAFE;
            let hex_u128: u128 = 0xDEADBEEF;
            let hex_u256: u256 = 0x1123_456A_BCDE_F;
    }
}
`;
  const code2 = `      module example::test {
    fun main(){
  let x: u8 = 10;
  let y = x; // x의 값을 y에 복사합니다.
    }
}
`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            정수
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move 언어는 여섯 가지의 부호 없는 정수 타입을 지원합니다: u8, u16,
            u32, u64, u128, 그리고 u256입니다. 이러한 타입의 값은 0부터 해당
            타입의 크기에 따라 다른 최댓값까지 범위를 갖습니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>유형</StyledTableCell>
                <StyledTableCell>값 범위</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers1.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.type}
                  </StyledTableCell>
                  <StyledTableCell>{item?.range}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            리터럴
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 타입에 대한 리터럴 값은 숫자의 연속으로 지정될 수 있습니다
            (예: 112) 또는 16진수 리터럴로 지정될 수 있습니다 (예: 0xFF).
            리터럴의 타입은 선택적으로 접미사로 추가될 수 있습니다. 예를 들어,
            112u8와 같이 타입을 명시적으로 추가할 수 있습니다. 타입이 명시되지
            않은 경우, 컴파일러는 리터럴이 사용된 문맥에서 타입을 추론하려고
            시도하고, 타입을 추론할 수 없는 경우, 기본적으로 u64로 가정됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            숫자 리터럴은 그룹화와 가독성을 위해 밑줄로 구분할 수 있습니다. (예:
            1_234_5678, 1_000u128, 0xAB_CD_12_35).
          </Typography>
          <Typography variant="body1" gutterBottom>
            만약 리터럴이 지정된 (또는 추론된) 크기 범위보다 크다면, 오류가
            발생합니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            산술
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            각각의 정수 타입은 동일한 집합의 검사된 산술 연산을 지원합니다.
            이러한 모든 연산에서는 인자(왼쪽 및 오른쪽 피연산자) 모두 동일한
            타입이어야 합니다. 다른 타입의 값에 대해 작업해야 하는 경우, 먼저
            캐스트를 수행해야 합니다. 마찬가지로, 연산 결과가 정수 타입으로는
            너무 커질 것으로 예상되는 경우, 연산을 수행하기 전에 더 큰 크기로
            캐스트를 수행해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            수학적인 정수의 동작과는 다른 방식으로 동작하는 대신, 모든 산술
            연산은 오류가 발생합니다(예: 오버플로우, 언더플로우, 0으로 나누기).
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>작업</StyledTableCell>
                <StyledTableCell>중단</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers2.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                  <StyledTableCell>{item?.중단}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            비트연산
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
            정수 타입은 각 숫자를 0 또는 1로 구성된 개별 비트의 시퀀스로
            취급하는 다음과 같은 비트 연산을 지원합니다.
          </Typography>
          <Typography>
            <span style={{ color: "purple" }}>
              * 비트 연산은 중단되지 않습니다.
            </span>
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>작업</StyledTableCell>
                <StyledTableCell>설명</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers3.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            비트시프트
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            비트 연산과 유사하게, 각 정수 타입은 비트 시프트를 지원합니다.
            그러나 다른 연산과 달리, 우측 피연산자(시프트할 비트 수)는 항상
            u8이어야 하며, 좌측 피연산자(시프트하는 숫자)와 일치할 필요는
            없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            비트 시프트는 u8, u16, u32, u64, u128 및 u256의 경우 시프트할 비트
            수가 각각 8, 16, 32, 64, 128 또는 256보다 크거나 같은 경우 중단될 수
            있습니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>작업</StyledTableCell>
                <StyledTableCell>중단</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers4.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                  <StyledTableCell>{item?.중단}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            비교 연산자
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            정수 타입은 Move에서 비교 연산자를 사용할 수 있는 유일한 타입입니다.
            두 인자는 동일한 타입이어야 합니다. 서로 다른 타입의 정수를 비교해야
            하는 경우, 먼저 하나를 캐스트해야 합니다. 비교 연산은 중단되지
            않습니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>작업</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers5.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            평등
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move에서 드롭(drop)을 가지는 모든 타입과 마찬가지로, 모든 정수
            타입은 "동일" 및 "동일하지 않음" 연산을 지원합니다. 두 인자는 동일한
            타입이어야 합니다. 서로 다른 타입의 정수를 비교해야 하는 경우, 먼저
            하나를 캐스트해야 합니다. 등호 연산은 중단되지 않습니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>작업</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers6.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            형변환
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move에서는 한 크기의 정수 유형을 다른 크기의 정수 유형으로
            <span style={{ color: "purple" }}>형변환</span> 할 수 있습니다.
            정수는 Move에서 형변환를 지원하는 유일한 유형입니다. 정수를 크기가
            다른 유형으로 형변환 할 때, Move에서는
            <span style={{ color: "purple" }}>
              형변환이 값을 절단하지 않는다는 점
            </span>
            에 유의해야 합니다. 이는 형변환 연산이 원래 정수의 전체 값을
            보존한다는 것을 의미합니다. 즉, 목표 정수 유형의 범위를 초과하는
            경우에도 원래 정수의 전체 값이 유지됩니다. 그러나, 형변환의 결과가
            지정된 유형에 너무 큰 경우 형변환이 중단될 수 있다는 점을
            알려드립니다. 이는형변환 결과가 지정된 유형에 맞지 않을 때 형변환이
            중단되는 것을 의미합니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>작업</StyledTableCell>
                <StyledTableCell>다음과 같은 경우 중단</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers7.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            소유권
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move 언어에 내장된 정수 값들도 암묵적으로 복사 가능한 속성을 갖고
            있습니다.
            <span style={{ color: "purple" }}>
              이는 복사와 같은 명시적 명령 없이도 복사될 수 있다는 것을 의미
            </span>
            합니다. 정수 값을 새 변수에 할당하거나 함수 인자로 전달할 때, 해당
            값의 복사본이 생성됩니다. 원본 값과 복사본은 서로 독립적으로 사용될
            수 있으며, 한 쪽 복사본을 수정해도 다른 쪽에는 영향을 미치지
            않습니다. 이러한 복사 연산은 내부적으로 암묵적으로 처리됩니다. 예를
            들어:
          </Typography>
        </Box>
        <Copy code={code2} />
        <Typography>
          이 경우,
          <span style={{ color: "purple" }}>
            x의 값이 y로 복사되며, x와 y는 각각 정수 값의 독립적인 복사본을
            가지고 있습니다.
          </span>
          y를 수정해도 x의 값에는 영향을 주지 않으며, 그 반대도 마찬가지입니다.
          이러한 암묵적인 복사 동작은 명시적인 복사 명령 없이도 정수 값을
          간편하게 처리할 수 있도록 해줍니다. 그러나 보다 복잡한 유형과 리소스의
          경우, Move에서는 소유권과 빌림에 대한 명시적인 지침이나 고려 사항이
          필요할 수 있습니다.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default study_1;
