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
  const code1 = `  module example::test {
    fun  main(){
      let s= S {f:10}
      let f_ref1:&u64 = &s.f; //공장
      let s_ref:&S= &s;
      let f_ref2: &u64= &s_ref.f //또한 작동
    }
   }
`;
  const code2 = `  module example::test {
    struct A {b:B}
 
    struct B {
        c:u64
    }
 
    fun f(a:&A): &u64{
       &a.b.c
    }
 }
`;
  const code3 = `  module example::test {
    fun main(){
  
      let x= 7;
      let y:&u64= &x;
      let z:&&u64= &y;//컴파일 되지 않습니다.
    }
  }
`;
  const code4 = `  module example::test {
    fun copy_resource_via_ref_bad(c:Coin){
      let c_ref= &c;
      let counterfeit:Coin= *c_ref;//허용되지 않습니다!
      pay(c);
      pay(counterfeit);
    }
  }
`;
  const code5 = `  module example::test {
    fun destroy_resource_via_ref_bad(ten_coins:Coin,c:Coin){
     let ref= &mut ten_coins;
     *ref =c;//허용되지 않음-10개의 코인을 파괴합니다!
    }
 }
`;
  const code6 = `  module example::test {
    fun main(){
      let x=  7;
      let y= &u64= &mut x;
    }
  }
`;
  const code7 = `  module example::test {
    fun takes_immut_returns_immut(x:&u64):&u64{x}
 
    //반환값에 대한 추론 고정
    fun takes_mut_returns_immut(x:&mut u64):&u64{x}
 
    fun expression_examples(){
 
     let x= 0;
     let y= 0;
     takes_immut_returns_immut(&x);//추론없음
     takes_immut_returns_immut(&mut x);//추정 동결(&mut x)
     takes_mut_returns_immut(&mut x);//추론없음
 
     assert!(&x == &mut y,42);//추정 동결(&mut y)
    }
    
 
    fun assignment_examples(){
       let x= 0;
       let y= 0;
       let imm_ref:&u64 = &x;
 
       imm_ref= &x;//추론없음
       imm_ref= &mut y;//추정 동결(&mut y)
     
    }
 
    
    
    }
`;
  const code8 = `  address 0x42 {
    module example{
        fun read_and_assign(store:&mut u64,new_value:&u64){
            *store= *new_value
        }

        fun subtype_examples(){
            let x:&u64 = &0;
            let y:&mut u64= &mut 1;

            x= &mut 1;//유효한
            y= &2 //유효하지 않은

            read_and_assign(y,x);//유효한
            read_and_assign(x,y);//유효하지 않은
        }  
    }
}
`;
  const code9 = `  error:

  ┌── example.move:12:9 ───
  │
12 │         y = &2; // 유효하지 않은!
  │         ^ Invalid assignment to local 'y'
  ·
12 │         y = &2; // 유효하지 않음!
  │             -- The type: '&{integer}'
  ·
9 │         let y: &mut u64 = &mut 1;
  │                -------- Is not a subtype of: '&mut u64'
  │

error:

  ┌── example.move:15:9 ───
  │
15 │         read_and_assign(x, y); // 유효하지 않음!
  │         ^^^^^^^^^^^^^^^^^^^^^ Invalid call of '0x42::example::read_and_assign'. Invalid argument for parameter 'store'
  ·
8 │         let x: &u64 = &0;
  │                ---- The type: '&u64'
  ·
3 │     fun read_and_assign(store: &mut u64, new_value: &u64) {
  │                                -------- Is not a subtype of: '&mut u64'
  │
`;
  const code10 = `  module example::test {
    fun reference_copies(s:&mut S){
      let s_copy1=s;//유효
      let s_extension= &mut s.f;//유효
      let s_copy2 = s;//유효
    }
  }
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
      통사론: "&e",
      타입: "&T where e: T and T is a non-reference type	",
      설명: "e에 대한 불변 참조 생성",
    },
    {
      통사론: "&mut e",
      타입: "&mut T where e: T and T is a non-reference type	",
      설명: "e에 대한 변경 가능한 참조를 만듭니다.",
    },
    {
      통사론: "&e.f",
      타입: "&T where e.f: T",
      설명: "구조체 e의 필드 f에 대한 불변 참조를 만듭니다.",
    },
    {
      통사론: "&mut e.f",
      타입: "&mut T where e.f: T	",
      설명: "구조체의 필드 f에 대한 변경 가능한 참조를 만듭니다.",
    },
    {
      통사론: "freeze(e)",
      타입: "&T where e: &mut T	",
      설명: "가변 참조 e를 불변 참조로 변환합니다.",
    },
  ];
  const integers2 = [
    {
      통사론: "*e",
      타입: "T where e is &T or &mut T	",
      설명: "e가 가리키는 값을 읽습니다.",
    },
    {
      통사론: "*e1 = e2	",
      타입: "() where e1: &mut T and e2: T	",
      설명: "e1의 값을 e2로 업데이트합니다.",
    },
  ];
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            참조
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move에는 <span style={{ color: "purple" }}>불변 &</span>및
            <span style={{ color: "purple" }}>가변 &mut</span>의 두 가지 유형의
            참조가 있습니다. 변경할 수 없는 참조는
            <span style={{ color: "purple" }}> 읽기 전용</span>
            이며 기본 값(또는 해당 필드)을 수정할 수 없습니다. 변경 가능한
            참조는 해당 참조를 통한
            <span style={{ color: "purple" }}>쓰기를 통한 수정</span>을
            허용합니다. Move의 유형 시스템은 참조 오류를 방지하는 소유권 규율을
            적용합니다. 참조 규칙에 대한 자세한 내용은 구조체 및 리소스를
            참조하세요.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            참조 연산자
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move는 참조를 만들고 확장할 뿐만 아니라 변경 가능한 참조를 변경
            불가능한 참조로 변환하기 위한 연산자를 제공합니다. 여기와 다른
            곳에서는
            <span style={{ color: "purple" }}>
              "표현식 e에는 T 유형이 있음"
            </span>
            에 대해 표기법 <span style={{ color: "purple" }}> e: T</span>를
            사용합니다.
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
                  <StyledTableCell>{item?.타입}</StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}> &e.f</span>및
            <span style={{ color: "purple" }}> &mut e.f </span>
            연산자는 구조체에 대한 새 참조를 만들거나 기존 참조를 확장하는 데
            모두 사용할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code1} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            여러 필드가 있는 참조 표현식은 두 구조체가 동일한 모듈에 있는 한
            작동합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code2} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            마지막으로 참조에 대한 참조는
            <span style={{ color: "purple" }}>허용되지 않습니다.</span>
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code3} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            참고 문헌을 통한 읽기 및 쓰기
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            변경 가능한 참조와 변경 불가능한 참조를 모두 읽어 참조된 값의
            <span style={{ color: "purple" }}>복사본</span>을 생성할 수
            있습니다. 변경 가능한 참조만 작성할 수 있습니다. 쓰기
            <span style={{ color: "purple" }}> *x = v</span>는 이전에 x에 저장된
            값을 버리고 v로 업데이트합니다. 두 작업 모두 C와 유사한
            <span style={{ color: "purple" }}>* 구문</span>을 사용합니다. 그러나
            읽기는 표현식인 반면 쓰기는 등호의 왼쪽에서 발생해야 하는
            변형입니다.
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
              {integers2.map(item => (
                <StyledTableRow>
                  <StyledTableCell>{item?.통사론}</StyledTableCell>
                  <StyledTableCell>{item?.타입}</StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            참조를 읽으려면 기본 유형에
            <span style={{ color: "purple" }}>복사</span>
            기능이 있어야 합니다. 참조를 읽으면 값의 새 복사본이 생성되기
            때문입니다.
            <span style={{ color: "purple" }}>
              이 규칙은 리소스 값 복사를 방지합니다.
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code4} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이중: 참조를 작성하려면 기본 유형에 삭제 기능이 있어야 합니다.
            참조에 작성하면 이전 값이 삭제 (
            <span style={{ color: "purple" }}>또는 "삭제"</span>)되기
            때문입니다. 이 규칙은 리소스 값의 파괴를 방지합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code5} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            동결 추론
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            변경 불가능한 참조가 예상되는 상황에서 변경 가능한 참조를 사용할 수
            있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code6} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이는 내부적으로 컴파일러가 필요한 곳에 고정 명령을 삽입하기 때문에
            작동합니다. 다음은 고정 추론의 몇 가지 예입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code7} />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            하위 유형
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 동결 추론을 통해 Move 유형 검사기는
            <span style={{ color: "purple" }}>&mut T</span>를
            <span style={{ color: "purple" }}>&T</span>의 하위 유형으로 볼 수
            있습니다. 위에 표시된 것처럼 이것은 &T 값이 사용되는 모든 표현식에
            대해 &mut T 값도 사용할 수 있음을 의미합니다. 이 용어는 &T가 제공된
            곳에 &mut T가 필요했음을 간결하게 나타내기 위해 오류 메시지에
            사용됩니다. 예를 들어
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code8} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            다음과 같은 오류 메시지가 나타납니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code9} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            현재 하위 유형이 있는 유일한 다른 유형은
            <span style={{ color: "purple" }}>튜플</span>입니다.
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
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            동일한 참조의 기존 복사본이나 확장이 있더라도 변경 가능한 참조와
            변경 불가능한 참조는 항상 복사 및 확장될 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "0px" }}>
        <Copy code={code10} />
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이것은 위의 코드를 거부하는 Rust의 소유권 시스템에 익숙한
            프로그래머에게는 놀라운 일이 될 수 있습니다. Move의 타입 시스템은
            복사본 처리에 있어서 더 관대하지만 쓰기 전에 변경 가능한 참조의
            고유한 소유권을 보장하는 데 있어서도 똑같이 엄격합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            참조를 저장할 수 없음
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>참조</span> 와
            <span style={{ color: "purple" }}>튜플</span>은 구조체의 필드 값으로
            저장할 수 없는 <span style={{ color: "purple" }}>유일한 유형</span>
            이며, 이는
            <span style={{ color: "purple" }}>
              전역 저장소에 존재할 수 없음을 의미
            </span>
            하기도 합니다. 프로그램 실행 중에 생성된 모든 참조는
            <span style={{ color: "purple" }}>
              Move 프로그램이 종료될 때 삭제
            </span>
            됩니다. 그들은 완전히
            <span style={{ color: "purple" }}> 일시적</span> 입니다. 이 불변성은
            저장 기능이 없는 유형의 값에도 적용되지만 참조와 튜플은 애초에
            구조체에서 허용되지 않음으로써 한 단계 더 나아갑니다. 이것은 Move와
            Rust의 또 다른 차이점으로, 구조체 내부에 참조를 저장할 수 있습니다.
            현재 Move는 참조를 직렬화할 수 없기 때문에 이를 지원할 수 없지만
            모든 Move 값은 직렬화 가능해야 합니다. 이 요구 사항은 프로그램 실행
            간에 값을 유지하기 위해 값을 직렬화해야 하는 Move의 영구 전역
            저장소에서 비롯됩니다.
            <span style={{ color: "purple" }}>
              구조체는 전역 저장소에 쓸 수 있으므로 직렬화 가능해야 합니다.
            </span>
            참조를 구조체에 저장하고 해당 구조체가 전역 저장소에 존재하는 것을
            금지하는 더 멋지고 표현력이 뛰어난 유형 시스템을 상상할 수 있습니다.
            저장 기능이 없는 구조체 내부의 참조를 허용할 수도 있지만 문제를
            완전히 해결하지는 못합니다. Move에는 정적 참조 안전성을 추적하는
            상당히 복잡한 시스템이 있으며 유형 시스템의 이러한 측면도 확장해야
            합니다. 구조체 내부에 참조 저장을 지원합니다. 요컨대, Move의 유형
            시스템(특히 참조 안전성에 관한 측면)은 저장된 참조를 지원하도록
            확장되어야 합니다. 그러나 그것은 언어가 발전함에 따라 우리가
            주시하고 있는 것입니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
