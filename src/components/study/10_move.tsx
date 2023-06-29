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
import Span from "../util/span";
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
    {
      통사론: "==",
      작업: "qual",
      설명: "만약 두 피연산자가 동일한 값을 가지고 있다면 true를 반환하고, 그렇지 않으면 false를 반환합니다.",
    },
    {
      통사론: "!=",
      작업: "not qual",
      설명: "만약 두 피연산자가 서로 다른 값을 가지고 있다면 true를 반환하고, 그렇지 않으면 false를 반환합니다.",
    },
  ];
  const code1 = `  0 == 0; //true
  1u128 == 2u128; //false
  b"hello" != x"00"; //true
`;
  const code2 = `  address 0x42 {
    module example {
        struct S has copy,drop {
            f:u64,
            s:vector<u8>
        }
        fun alwats_true():bool {
            let s= S {
                f:0,
                s:b""
            };
            //괄호는 필요하지 않지만 이 예시에서 명확성을 위해 추가되었습니다.
            (copy s) == s
        }
        fun alwats_false():bool {
            let s = S {
                f:0,
                s:b""
            };
            //괄호는 필요하지 않지만 이 예시에서 명확성을 위해 추가되었습니다.
            (copy s) != s
        }
    }
}
`;
  const code3 = `  1u8 == 1u128; // 오류!
  //     ^^^^^ 'u8' 유형의 인수가 필요합니다.
  b"" != 0; // 오류!
  //     ^ 'vector<u8>' 유형의 인수가 필요합니다.
`;
  const code4 = `  module example::test {
    fun main(){
        let i = &0;
        let n = &mut 1;
        i == m;//false
        m == i;//false
        m == m;//true
        i == i;//true
    }
}
`;
  const code5 = `  module example::test {
    fun main(){
        let i = &0;
        let m = &mut 1;

        i == freeze(m); //false
        freeze(m) == i;//false
        m == m;//true
        i == i;//true
    }
}
`;
  const code6 = `  module example::test {
    fun main(){
        let i = &0;
        let s = &b"";

        i == s;//오류
        //   ^ '&u64' 유형의 인수가 필요합니다.
    }
}
`;
  const code7 = `  address 0x42 {
    module example {
        struct Coin has store {
            value: u64
        }
        fun invalid(c1:Coin,c2:Coin){
            c1 == c2 //오류발생!!
    //      ^^    ^^ 이러한 리소스들이 파괴될 것입니다!
        }
    }
}
`;
  const code8 = `  address 0x42 {
    module example {
        struct Coin as store {
            value:u64
        }
        fun swap_if_equal(c1:Coin,c2:Coin):(Coin,Coin) {
            let are_equal = &c1 == &c2 ; //유효
            if (are_equal) (c2,c1) else (c1,c2)
        }
    }
}
`;
  const code9 = `  module example::test {
    fun main(){
        let v1: vector<u8>= function_that_returns_vector();
        let v2: vector<u8>= function_that_returns_vector();
        assert!(copy v1 == copy v2, 42);
         //     ^^^^       ^^^^
        use_two_vectors(v1,v2);

        let s1: Foo = function_that_returns_large_struct();
        let s2: Foo = function_that_returns_large_struct();
        assert!(copy s1 == copy s2, 42);
         //     ^^^^       ^^^^
        use_two_foos(s1, s2);
    }
}
`;
  const code10 = `  module example::test {
    fun main(){
        let v1: vector<u8> = function_that_returns_vector();
        let v12 vector<u8> = function_that_returns_vector();
        assert!(&v1 == &v2, 42);
        //     ^      ^
        use_two_vectors(v1, v2);


        let s1:Foo= function_that_returns_large_struct();
        let s2:Foo= function_that_returns_large_struct();
        assert!(&s1 == &s2, 42);
        //     ^      ^
        use_two_foos(s1, s2);
    }
}
`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            평등
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move는 ==와 !=라는 두 가지 동등성 연산을 지원합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "30px" }}>
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
                  <StyledTableCell>{item?.통사론}</StyledTableCell>
                  <StyledTableCell>{item?.작업}</StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            타이핑
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            같음(==) 및 같지 않음(!=) 연산은 두 피연산자가 동일한 유형이어야만
            작동합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            사용자 정의된 유형에 대해서도 같음(==)과 같지 않음(!=) 연산이
            작동합니다!
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            피연산자가 서로 다른 유형을 가지고 있다면, 유형 검사 오류가
            발생합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code3} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            참조를 사용한 유형 지정
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            참조를 비교할 때 참조의 유형(불변 또는 가변)은 중요하지 않습니다.
            즉, 동일한 기저 유형의 불변한 & 참조와 가변한 &mut 참조를 비교할 수
            있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code4} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            위 내용은 필요한 경우 각 가변 참조에 명시적인 freeze를 적용하는 것과
            동일합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            다시 말씀드리면, 기저 유형은 동일한 유형이어야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            제약사항(제한 사항)
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            == 및 != 모두 비교 시 값을 소비합니다. 결과적으로, 유형 시스템은
            해당 유형이 drop을 가져야 한다는 사실을 강제합니다. drop 능력이
            없으면 함수가 종료될 때 소유권이 전달되어야 하며, 이러한 값은 선언된
            모듈 내에서 명시적으로만 파괴될 수 있습니다. 이러한 값들이
            직접적으로 == 또는 !=와 함께 사용된다면 값이 파괴되어 drop 능력의
            안전성 보장이 깨질 것입니다!{" "}
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그러나, 프로그래머는 값을 직접 비교하는 대신 값이 먼저 대여될 수
            있으며, 참조 유형은 drop 기능을 가지고 있습니다. 예를 들어, 다음과
            같습니다:
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            추가적인 복사는 피해야 합니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            프로그래머는 drop이 있는 모든 유형의 값을 비교할 수 있지만, 복사
            비용이 큰 경우 참조를 사용하여 비교하는 것이 좋습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code9} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 코드는 완벽하게 허용됩니다 (Foo가 drop을 가진다고 가정할 때),
            그러나 효율적이지는 않습니다. 강조된 복사본은 제거되고 대신 참조를
            사용할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code10} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            == 연산 자체의 효율성은 동일하지만, 복사본은 제거되어 프로그램이 더
            효율적이게 됩니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
