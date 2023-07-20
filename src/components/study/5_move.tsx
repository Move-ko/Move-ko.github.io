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
  const code1 = `   fun main(){
    vector<T>[]: vector<T>
    vector<T>[e1, ..., en]: vector<T>
   }
`;
  const code2 = `  fun main(){
    (vector[]: vector<bool>);
    (vector[0u8, 1u8, 2u8]: vector<u8>);
    (vector<u128>[]: vector<u128>);
    (vector<address>[@0x42, @0x100]: vector<address>);
  }
`;
  const code3 = `  script {
    fun byte_and_hex_strings() {
        assert!(b"" == x"", 0);
        assert!(b"Hello!\\n" == x"48656C6C6F210A", 1);
        assert!(b"\\x48\\x65\\x6C\\x6C\\x6F\\x21\\x0A" == x"48656C6C6F210A", 2);
        assert!(
            b"\\"Hello\\tworld!\\"\\n \\r \\\Null=\\0" ==
                x"2248656C6C6F09776F726C6421220A200D205C4E756C6C3D00",
            3
        );
    }
    }
`;
  const code4 = `  module example::test {
    use std::vector;
    
    fun main(){
      let v = vector::empty<u64>();
      vector::push_back(&mut v, 5);
      vector::push_back(&mut v, 6);

      assert!(*vector::borrow(&v, 0) == 5, 42);
      assert!(*vector::borrow(&v, 1) == 6, 42);
      assert!(vector::pop_back(&mut v) == 6, 42);
      assert!(vector::pop_back(&mut v) == 5, 42);
    }
`;
  const code5 = `   fun destory_any_vector<T>(vec:vector<T>){
    vector::destory_empty(vec)//이 줄을 삭제하면 컴파일러 오류가 발생합니다.
   }
`;
  const code6 = `  fun destroy_droppable_vector<T: drop>(vec: vector<T>) {
    // 유효한!
    // 벡터를 파괴하기 위해 명시적으로 수행할 필요가 없습니다.
    // nothing needs to be done explicitly to destroy the vector
}
`;
  const code7 = `  let x = vector::singleton<u64>(10);
  let y = copy x; // 사본이 없는 컴파일러 오류!
`;

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
    {
      통사론: "vector[]",
      타입: "vector[]: vector<T> where T is any single, non-reference type",
      설명: "비어있는 벡터",
    },
    {
      통사론: "vector[e1, ..., en]",
      타입: "vector[e1, ..., en]: vector<T> where e_i: T s.t. 0 < i <= n and n > 0",
      설명: " n개의 요소가 있는 벡터(길이 n)",
    },
  ];
  const integers2 = [
    {
      이스케이프_시퀀스: "\\n",
      Description: "새 줄(또는 줄바꿈)",
    },
    {
      이스케이프_시퀀스: "\\r",
      Description: "캐리지 리턴(Carriage return)",
    },
    {
      이스케이프_시퀀스: "\\t",
      Description: "Tab",
    },
    {
      이스케이프_시퀀스: "\\\\",
      Description: "Backslash",
    },
    {
      이스케이프_시퀀스: "\\0",
      Description: "Null",
    },
    {
      이스케이프_시퀀스: '\\"',
      Description: "Quote",
    },
    {
      이스케이프_시퀀스: "\\xHH",
      Description: "Hex escape, inserts the hex byte sequence HH",
    },
  ];
  const integers3 = [
    {
      Function: "vector::empty<T>(): vector<T>	",
      Description: "T 유형의 값을 저장할 수 있는 빈 벡터를 만듭니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::is_empty<T>(): bool",
      Description:
        "벡터 v에 요소가 없으면 true를 반환하고 그렇지 않으면 false를 반환합니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::singleton<T>(t: T): vector<T>",
      Description: "t를 포함하는 크기 1의 벡터를 만듭니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::length<T>(v: &vector<T>): u64",
      Description: "벡터 v의 길이를 반환합니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::push_back<T>(v: &mut vector<T>, t: T)",
      Description: "v 끝에 t 추가",
      Aborts: "절대",
    },
    {
      Function: "vector::pop_back<T>(v: &mut vector<T>): T",
      Description: "v의 마지막 요소를 제거하고 반환",
      Aborts: "v가 비어 있는 경우",
    },
    {
      Function: "vector::borrow<T>(v: &vector<T>, i: u64): &T",
      Description: "인덱스 i에서 T에 대한 불변 참조를 반환합니다.",
      Aborts: "내가 경계 안에 있지 않다면",
    },
    {
      Function: "vector::borrow_mut<T>(v: &mut vector<T>, i: u64): &mut T",
      Description: "인덱스 i에서 T에 대한 변경 가능한 참조를 반환합니다.",
      Aborts: "내가 경계 안에 있지 않다면",
    },
    {
      Function: "vector::destroy_empty<T>(v: vector<T>)",
      Description: "v 삭제",
      Aborts: "v가 비어 있지 않은 경우",
    },
    {
      Function: "vector::append<T>(v1: &mut vector<T>, v2: vector<T>)",
      Description: "v2의 요소를 v1의 끝에 추가",
      Aborts: "절대",
    },
    {
      Function:
        "vector::reverse_append<T>(lhs: &mut vector<T>, other: vector<T>)",
      Description:
        "다른 벡터에서 발생한 것과 반대 순서로 다른 벡터의 모든 요소를 ​​lhs 벡터로 푸시합니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::contains<T>(v: &vector<T>, e: &T): bool",
      Description:
        "e가 벡터 v에 있으면 참을 반환합니다. 그렇지 않으면 거짓을 반환합니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::swap<T>(v: &mut vector<T>, i: u64, j: u64)",
      Description:
        "벡터 v의 i번째 인덱스와 j번째 인덱스에 있는 요소를 교체합니다.",
      Aborts: "i 또는 j가 범위를 벗어난 경우",
    },
    {
      Function: "vector::reverse<T>(v: &mut vector<T>)",
      Description: "제자리에서 벡터 v의 요소 순서를 반대로 바꿉니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::reverse_slice<T>(v: &mut vector<T>, l: u64, r: u64)",
      Description: "제자리에서 벡터 v의 요소 [l, r)의 순서를 반대로 바꿉니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::index_of<T>(v: &vector<T>, e: &T): (bool, u64)",
      Description:
        "e가 인덱스 i의 벡터 v에 있으면 (true, i)를 반환합니다. 그렇지 않으면 (거짓, 0)을 반환합니다.",
      Aborts: "절대",
    },
    {
      Function: "vector::insert<T>(v: &mut vector<T>, i: u64, e: T)",
      Description:
        "O(길이 - i) 시간을 사용하여 위치 0 <= i <= 길이에 새 요소 e를 삽입합니다.",
      Aborts: "내가 범위를 벗어나면",
    },
    {
      Function: "vector::remove<T>(v: &mut vector<T>, i: u64): T",
      Description:
        "벡터 v의 i번째 요소를 제거하고 모든 후속 요소를 이동합니다. 이것은 O(n)이며 벡터에서 요소의 순서를 유지합니다.",
      Aborts: "내가 범위를 벗어나면",
    },
    {
      Function: "vector::swap_remove<T>(v: &mut vector<T>, i: u64): T",
      Description:
        "벡터 v의 i번째 요소를 마지막 요소로 바꾼 다음 요소를 팝합니다. 이것은 O(1)이지만 벡터의 요소 순서는 유지하지 않습니다.",
      Aborts: "내가 범위를 벗어나면",
    },
    {
      Function: "vector::trim<T>(v: &mut vector<T>, new_len: u64): u64",
      Description:
        "벡터 v를 더 작은 크기의 new_len으로 자르고 제거된 요소를 순서대로 반환합니다.",
      Aborts: "new_len이 v의 길이보다 큽니다.",
    },
    {
      Function: "vector::trim_reverse<T>(v: &mut vector<T>, new_len: u64): u64",
      Description:
        "벡터 v를 더 작은 크기의 new_len으로 자르고 제거된 요소를 역순으로 반환합니다.",
      Aborts: "new_len이 v의 길이보다 큽니다.",
    },
    {
      Function: "vector::rotate<T>(v: &mut vector<T>, rot: u64): u64",
      Description:
        "rotate(&mut [1, 2, 3, 4, 5], 2) -> [3, 4, 5, 1, 2] 제자리에서 분할 지점을 반환합니다. 이 예에서 3",
      Aborts: "절대",
    },
    {
      Function:
        "vector::rotate_slice<T>(v: &mut vector<T>, left: u64, rot: u64, right: u64): u64",
      Description:
        "왼쪽 <= 회전 <= 오른쪽으로 길게 [ 왼쪽, 오른쪽 회전), 끝점 반환",
      Aborts: "절대",
    },
  ];
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            벡터
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move에서 제공하는 유일한 원시 컬렉션 타입은
            <span style={{ color: "purple" }}> {"vector<T>"}</span>
            입니다. {"vector<T>"}는 T의 동일한 유형의 항목들로 구성된
            컬렉션으로, 값들을 끝에
            <span style={{ color: "purple" }}>push</span>
            하거나 <span style={{ color: "purple" }}>pop</span>하여 크기를
            조절할 수 있습니다.{"vector<T>"}는 어떤 유형 T로도 인스턴스화할 수
            있습니다. 예를 들어,
            <span style={{ color: "purple" }}>
              {
                "vector<u64>, vector<address>, vector<0x42::MyModule::MyResource> 및 vector<vector<u8>>"
              }
            </span>
            은 모두 유효한 vector 타입입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            일반적인 벡터 리터럴
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            벡터 리터럴을 사용하여 어떤 유형의 벡터든 생성할 수 있습니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>타입</StyledTableCell>
                <StyledTableCell>설명</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers1.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.타입}</StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 경우에는 벡터의 유형이 원소 유형이나 벡터의 사용으로부터
            추론됩니다. 유형을 추론할 수 없는 경우 또는 명확성을 위해 유형을
            <span style={{ color: "purple" }}>명시적</span> 으로 지정할 수도
            있습니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Copy code={code2} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            vector{"<u8>"} 타입의 리터럴
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move에서 벡터를 사용하는 일반적인 사례는
            <span style={{ color: "purple" }}>바이트 배열</span>을 나타내는
            것인데, 이는
            <span style={{ color: "purple" }}> {"vector<u8>"}</span>로
            표현됩니다. 이러한 값들은 종종 공개 키나 해시 결과와 같은 암호화
            목적으로 사용됩니다. 이러한 값들은 널리 사용되어 특정 구문이
            제공되어 값을 더 가독성 있게 만들어줍니다. 각 개별 u8 값이 숫자
            형태로 지정되는 <span style={{ color: "purple" }}>vector[]</span>를
            사용해야 하는 대신에 특정 구문을 사용할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            현재 지원되는 두 가지 유형의 {"vector<u8>"} 리터럴은
            <span style={{ color: "purple" }}>바이트 문자열(byte strings)</span>
            과
            <span style={{ color: "purple" }}>16진수 문자열(hex strings)</span>
            입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            바이트 문자열(Byte Strings)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>바이트 문자열</span> 은 b로
            접두사가 붙은 따옴표로 둘러싸인 문자열 리터럴입니다. 예를 들어,
            <span style={{ color: "purple" }}>b"Hello!\n"</span> 과 같습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            이는 <span style={{ color: "purple" }}>ASCII</span> 로 인코딩된
            문자열로서
            <span style={{ color: "purple" }}>이스케이프 시퀀스</span> 를
            허용합니다. 현재 지원되는 이스케이프 시퀀스는 다음과 같습니다:
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>이스케이프_시퀀스</StyledTableCell>
                <StyledTableCell>설명</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers2.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.이스케이프_시퀀스}
                  </StyledTableCell>
                  <StyledTableCell>{item?.Description}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            16진수 문자열(Hex Strings)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            16진수 문자열은 x로 접두사가 붙은 따옴표로 둘러싸인 문자열
            리터럴입니다. 예를 들어,
            <span style={{ color: "purple" }}> x"48656C6C6F210A"</span>와
            같습니다. 각각의 바이트 쌍은
            <span style={{ color: "purple" }}> 00</span>
            부터 <span style={{ color: "purple" }}>FF</span>
            까지의 16진수로 인코딩된 <span style={{ color: "purple" }}>u8</span>
            값을 의미합니다. 따라서 각 바이트 쌍은 결과적인 {"vector<u8>"}
            에서 하나의 항목에 해당합니다. 예시 문자열 리터럴
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            vector는 아래와 같이 Move 표준 라이브러리의 std::vector 모듈을 통해
            여러 작업을 제공합니다. 시간이 지남에 따라 더 많은 작업이 추가될 수
            있습니다. 벡터에 대한 최신 문서는 여기에서 찾을 수 있습니다.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Function</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Aborts?</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {integers3.map(item => (
                <StyledTableRow>
                  <StyledTableCell component="div" scope="row">
                    {item?.Function}
                  </StyledTableCell>
                  <StyledTableCell component="div" scope="row">
                    {item?.Description}
                  </StyledTableCell>
                  <StyledTableCell>{item?.Aborts}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Example
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            벡터 파괴 및 복사
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>{"vector<T>"}</span>의 일부 동작은
            원소 유형 T의 기능에 따라 달라집니다. 예를 들어,
            <span style={{ color: "purple" }}> 드롭(drop) </span>
            기능이 없는 원소를 포함하는 벡터는 위의 예시에서 v와 같이 암묵적으로
            폐기될 수 없으며, 명시적으로
            <span style={{ color: "purple" }}> vector::destroy_empty</span>를
            사용하여 파괴해야 합니다.
            <span style={{ color: "purple" }}> vector::destroy_empty</span>는
            vec에 원소가 없을 경우에만 실행 시점에서 중단됩니다:
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            하지만 <span style={{ color: "purple" }}> 드롭(drop) </span>
            기능이 있는 원소를 포함하는 벡터를 폐기하려고 할 때 오류가
            발생하지는 않습니다.
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            마찬가지로, 원소 유형이
            <span style={{ color: "purple" }}>복사 가능한 경우</span>
            에만 벡터를 복사할 수 있습니다. 다시 말해, T가 복사 가능한 경우에만
            {"vector<T>"}가 복사 가능합니다. 그러나 복사 가능한 벡터조차도
            암묵적으로 복사되지는 않습니다.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            대용량 벡터의 복사는 비용이 많이 들 수 있으므로 컴파일러는 복사가
            명시적으로 이루어지도록 요구하여 어디에서 복사가 발생하는지 쉽게
            파악할 수 있도록 합니다. 자세한 내용은
            <span style={{ color: "purple" }}>유형 능력(type abilities)</span>과
            <span style={{ color: "purple" }}>제네릭(generics) </span>
            섹션을 참조하십시오.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            소유권
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            위에서 언급한 대로,
            <span style={{ color: "purple" }}>원소가 복사 가능한 경우</span>
            에만 벡터 값들을 복사할 수 있습니다. 이 경우에는 복사가 명시적으로
            이루어져야 하며, 복사 또는
            <span style={{ color: "purple" }}> 역참조 *</span>를 통해
            이루어집니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
