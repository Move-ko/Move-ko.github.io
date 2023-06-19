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
import { Button } from "@mui/material";
import { useRouter } from "next/router";
const study_1 = ({ children }) => {
  const router = useRouter();

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
          <Typography variant="h3" gutterBottom>
            2️⃣ 정수
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move는 6개의 부호 없는 정수 유형({" "}
            <span style={{ color: "purple" }}>
              u8, u16, u32, u64, u128,u256
            </span>
            ) 을 지원합니다.이러한 유형의 값은 0부터 해당 유형의 크기에 따라
            다른 최댓값까지 범위를 가집니다.
          </Typography>
        </Box>
      </Grid>

      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
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
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            리터럴
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이러한 유형에 대한 리터럴 값은 숫자의 연속으로 지정하거나 16진
            리터럴로 지정할 수 있습니다. 예를 들어,{" "}
            <span style={{ color: "purple" }}>112</span>나{" "}
            <span style={{ color: "purple" }}>0xFF</span>와 같이 사용할 수
            있습니다. 리터럴의 유형은 선택적으로 접미사로 추가할 수 있습니다.
            예를 들어, 112u8과 같이 사용할 수 있습니다. 유형이 지정되지 않으면
            컴파일러는 리터럴이 사용된 문맥에서 유형을 추론하려고 시도합니다.
            유형을 추론할 수 없는 경우 u64로 가정합니다. 숫자 리터럴은 그룹화와
            가독성을 위해 밑줄로 구분할 수 있습니다. 예를 들어, 1_234_5678,
            1_000u128, 0xAB_CD_12_35과 같이 사용할 수 있습니다. 리터럴이
            지정된(또는 추론된) 크기 범위를 초과하는 경우 오류가 보고됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={3}></Grid>
      <Grid xs={12} md={6}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/2_1.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/2_1.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={3}></Grid>

      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            운영
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            각각의 유형은 동일한 집합의 체크된 산술 연산을 지원합니다. 이러한
            모든 연산에서는 두 인수({" "}
            <span style={{ color: "purple" }}>왼쪽과 오른쪽 피연산자</span>)가
            동일한 유형이어야 합니다. 서로 다른 유형의 값을 연산해야 하는 경우
            먼저 형 변환을 수행해야 합니다. 마찬가지로, 연산 결과가 정수 유형에
            너무 크다고 예상되는 경우 연산을 수행하기 전에 더 큰 크기로 형
            변환을 수행해야 합니다. 모든 산술 연산은 수학적인 정수와는 달리{" "}
            <span style={{ color: "purple" }}>
              오버플로,언더플로,0으로 나누기
            </span>
            와 같이 수학적으로 정수가 아닌 동작을 하지 않고 대신{" "}
            <span style={{ color: "purple" }}>중단</span>됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
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
      <Grid xs={0} md={2}></Grid>

      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            정수 유형은 다음과 같은 비트 연산을 지원합니다. 이러한 연산은 각
            숫자를 0 또는 1로 구성된 개별적인 비트 시퀀스로 취급하며 숫자적인
            정수 값으로 취급하지 않습니다. 비트 연산은 중단되지 않습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
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
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            비트 연산과 유사하게, 각 정수 유형은 비트 시프트를 지원합니다.
            그러나 다른 연산과 달리, 오른쪽 피연산자(시프트할 비트 수)는 항상
            u8이어야 하며 왼쪽 피연산자(시프트하는 숫자)와 일치할 필요는
            없습니다. 비트 시프트는 u8, u16, u32, u64, u128 및 u256에 대해 각각
            8, 16, 32, 64, 128 또는 256보다 크거나 같은 비트 수로 시프트하려고
            할 경우에만 중단될 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
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
      <Grid xs={0} md={2}></Grid>
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
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
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
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            주조
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            정수 유형은 Move에서 비교 연산자를 사용할 수 있는 유일한 유형입니다.
            두 인수는 동일한 유형이어야 합니다. 서로 다른 유형의 정수를 비교해야
            하는 경우 먼저 하나를 형 변환해야 합니다. 비교 연산은 중단되지
            않습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            소유권
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            언어에 내장된 다른 스칼라 값과 마찬가지로 정수 값은 암시적으로
            복사할 수 있습니다. 즉 복사와 같은 명시적인 명령 없이 복사할 수
            있습니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
