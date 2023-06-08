import Grid from "@mui/material/Unstable_Grid2";
import { CodeBlock } from "react-code-blocks";
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

const study_1 = ({ children }) => {
  const handleClick = () => {
    console.log("Code block clicked");
  };
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
  const myCustomTheme = {
    lineNumberColor: "#ccc",
    lineNumberBgColor: "#222",
    backgroundColor: "#222",
    textColor: "#ccc",
    substringColor: "#00ff00",
    keywordColor: "#0077ff",
    attributeColor: "#ffaa00",
    selectorTagColor: "#0077ff",
    docTagColor: "#aa00ff",
    nameColor: "#f8f8f8",
    builtInColor: "#0077ff",
    literalColor: "#ffaa00",
    bulletColor: "#ffaa00",
    codeColor: "#ccc",
    additionColor: "#00ff00",
    regexpColor: "#f8f8f8",
    symbolColor: "#ffaa00",
    variableColor: "#ffaa00",
    templateVariableColor: "#ffaa00",
    linkColor: "#aa00ff",
    selectorAttributeColor: "#ffaa00",
    selectorPseudoColor: "#aa00ff",
    typeColor: "#0077ff",
    stringColor: "#00ff00",
    selectorIdColor: "#ffaa00",
    quoteColor: "#f8f8f8",
    templateTagColor: "#ccc",
    deletionColor: "#ff0000",
    titleColor: "#0077ff",
    sectionColor: "#0077ff",
    commentColor: "#777",
    metaKeywordColor: "#f8f8f8",
    metaColor: "#aa00ff",
    functionColor: "#0077ff",
    numberColor: "#ffaa00",
  };
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
    {
      통사론: "(e as T)",
      작업: "e 정수 표현식을 정수 유형으로 캐스트T",
      설명: "e로 표현하기에는 너무 큽니다",
    },
  ];
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2" gutterBottom>
            정수
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move는 6개의 부호 없는 정수 유형( u8, u16, u32, u64, u128및 ) 을
            지원합니다 u256. 이러한 유형의 값 범위는 0에서 유형의 크기에 따라
            달라지는 최대값입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
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
                <StyledTableRow key={item?.drop_name}>
                  <StyledTableCell component="div" scope="row">
                    {item?.type}
                  </StyledTableCell>
                  <StyledTableCell>{item?.range}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2" gutterBottom>
            리터럴
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            이러한 유형의 리터럴 값은 일련의 숫자(예: 112) 또는 16진수
            리터럴(예: )로 지정됩니다 0xFF. 리터럴의 유형은 선택적으로 접미사로
            추가할 수 있습니다(예: 112u8. 유형이 지정되지 않은 경우 컴파일러는
            리터럴이 사용되는 컨텍스트에서 유형을 유추하려고 시도합니다. 유형을
            유추할 수 없으면 로 간주됩니다 u64. 숫자 리터럴은 그룹화 및 가독성을
            위해 밑줄로 구분할 수 있습니다. (예, 1_234_5678, 1_000u128,
            0xAB_CD_12_35). 리터럴이 지정된(또는 유추된) 크기 범위에 비해 너무
            크면 오류가 보고됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6}>
        <Box sx={{ width: "100%", fontSize: "12px" }}>
          <CodeBlock
            text={
              `// literals with explicit annotations;
            let explicit_u8 = 1u8;
            let explicit_u16 = 1u16;
            let explicit_u32 = 1u32;
            let explicit_u64 = 2u64;
            let explicit_u128 = 3u128;
            let explicit_u256 = 1u256;
            let explicit_u64_underscored = 154_322_973u64;
            
            // literals with simple inference
            let simple_u8: u8 = 1;
            let simple_u16: u16 = 1;
            let simple_u32: u32 = 1;
            let simple_u64: u64 = 2;
            let simple_u128: u128 = 3;
            let simple_u256: u256 = 1;
            
            // literals with more complex inference
            let complex_u8 = 1; // inferred: u8
            // right hand argument to shift must be u8
            let _unused = 10 << complex_u8;
            
            let x: u8 = 38;
            let complex_u8 = 2; // inferred: u8
            // arguments to ` +
              ` must have the same type
            let _unused = x + complex_u8;
            
            let complex_u128 = 133_876; // inferred: u128
            // inferred from function argument type
            function_that_takes_u128(complex_u128);
            
            // literals can be written in hex
            let hex_u8: u8 = 0x1;
            let hex_u16: u16 = 0x1BAE;
            let hex_u32: u32 = 0xDEAD80;
            let hex_u64: u64 = 0xCAFE;
            let hex_u128: u128 = 0xDEADBEEF;
            let hex_u256: u256 = 0x1123_456A_BCDE_F;
`
            }
            language={"Rust"}
            showLineNumbers={true}
            wrapLines={true}
            theme={myCustomTheme}
            onClick={handleClick}
          />
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>

      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2" gutterBottom>
            운영
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            이러한 각 유형은 확인된 산술연산의 동일한 집합을 지원합니다.이러한
            모든 연산에서 두 인수(왼쪽 및 오른쪽 피연산자)는 동일한 유형이어야
            합니다. 다른 유형의 값에 대해 작업해야 하는 경우 먼저 캐스팅을
            수행해야 합니다.마찬가지로 연산 결과가 정수형에 비해 너무 클것으로
            예상되는 경우 연산을 수행하기 전에 더 큰 크기로 캐스트를
            수행하십시오 모든 산술연산은 수학적 정수가 하지 않는 방식으로
            동작하는 대신 중단댑니다(오버플로,언더플로,0으로 나누기)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
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
                <StyledTableRow key={item?.drop_name}>
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
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            정수 유형은 각 수자를 정수 값 대신 일련의 개별 비트 0또는 1로
            처리하는 다음과 같은 비트 연산을 지원합니다 비트 연산은 중단되지
            않습니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
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
                <StyledTableRow key={item?.drop_name}>
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
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            비트 연산과 유사하게 각 정수 유형은 비트 이동을 지원합니다.그러나
            다른 연산과 달리 오른쪽 피연산자(이동할 비트 수)는 항상 a여야 하며
            u8왼쪽 피연산자(이동하려는 숫자와 일치할 필요는 없습니다) 이동할
            비트수가 16,32,64,또는 각각 에 대해 크거나 같으면 비트 이동이
            중단될수 있습니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
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
                <StyledTableRow key={item?.drop_name}>
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
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            정수 유형은 Move에서 비교 연산자를 사용할수 있는 유일한
            유형입니다.두 인수는 같은 유형이어야 합니다.다른 유형의정수를
            비교해야 하는 경우 먼저 그중 하나를 캐스팅 해야합니다. 비교 연산은
            중단되지 않습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
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
                <StyledTableRow key={item?.drop_name}>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2" gutterBottom>
            주조
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2" gutterBottom>
            소유권
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
