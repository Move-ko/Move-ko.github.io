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
  const code1 = `  #[test] // OK
  fun this_is_a_test() { ... }
  
  #[test] // Will fail to compile since the test takes an argument
  fun this_is_not_correct(arg: signer) { ... }
`;
  const code2 = `  #[test]
  #[expected_failure]
  public fun this_test_will_abort_and_pass() { abort 1 }
  
  #[test]
  #[expected_failure]
  public fun test_will_error_and_pass() { 1/0; }
  
  #[test]
  #[expected_failure(abort_code = 0, location = Self)]
  public fun test_will_error_and_fail() { 1/0; }
  
  #[test, expected_failure] // Can have multiple in one attribute. This test will pass.
  public fun this_other_test_will_abort_and_pass() { abort 1 }
`;
  const code3 = `  #[test]
  #[expected_failure]
  public fun this_test_will_abort_and_pass() { abort 1 }
  
  #[test]
  #[expected_failure]
  public fun test_will_error_and_pass() { 1/0; }
  
  #[test]
  #[expected_failure(abort_code = 0, location = Self)]
  public fun test_will_error_and_fail() { 1/0; }
  
  #[test, expected_failure] // Can have multiple in one attribute. This test will pass.
  public fun this_other_test_will_abort_and_pass() { abort 1 }
`;
  const code4 = `  #[test_only] // test only attributes can be attached to modules
  module abc { ... }
  
  #[test_only] // test only attributes can be attached to named addresses
  address ADDR = @0x1;
  
  #[test_only] // .. to uses
  use 0x1::some_other_module;
  
  #[test_only] // .. to structs
  struct SomeStruct { ... }
  
  #[test_only] // .. and functions. Can only be called from test code, but not a test
  fun test_only_function(...) { ... }
`;
  const code5 = `  $ aptos move test -h
`;
  const code6 = `  $ aptos move init --name TestExample
`;
  const code7 = `  [dependencies]
  MoveStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir="aptos-move/framework/move-stdlib", rev = "main", addr_subst = { "std" = "0x1" } }
`;
  const code8 = `  // filename: sources/my_module.move
  module 0x1::my_module {
  
      struct MyCoin has key { value: u64 }
  
      public fun make_sure_non_zero_coin(coin: MyCoin): MyCoin {
          assert!(coin.value > 0, 0);
          coin
      }
  
      public fun has_coin(addr: address): bool {
          exists<MyCoin>(addr)
      }
  
      #[test]
      fun make_sure_non_zero_coin_passes() {
          let coin = MyCoin { value: 1 };
          let MyCoin { value: _ } = make_sure_non_zero_coin(coin);
      }
  
      #[test]
      // Or #[expected_failure] if we don't care about the abort code
      #[expected_failure(abort_code = 0, location = Self)]
      fun make_sure_zero_coin_fails() {
          let coin = MyCoin { value: 0 };
          let MyCoin { value: _ } = make_sure_non_zero_coin(coin);
      }
  
      #[test_only] // test only helper function
      fun publish_coin(account: &signer) {
          move_to(account, MyCoin { value: 1 })
      }
  
      #[test(a = @0x1, b = @0x2)]
      fun test_has_coin(a: signer, b: signer) {
          publish_coin(&a);
          publish_coin(&b);
          assert!(has_coin(@0x1), 0);
          assert!(has_coin(@0x2), 1);
          assert!(!has_coin(@0x3), 1);
      }
  }
`;
  const code9 = `  $ aptos move test
  BUILDING MoveStdlib
  BUILDING TestExample
  Running Move unit tests
  [ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes
  [ PASS    ] 0x1::my_module::make_sure_zero_coin_fails
  [ PASS    ] 0x1::my_module::test_has_coin
  Test result: OK. Total tests: 3; passed: 3; failed: 0
`;
  const code10 = `  $ aptos move test -f zero_coin
  CACHED MoveStdlib
  BUILDING TestExample
  Running Move unit tests
  [ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes
  [ PASS    ] 0x1::my_module::make_sure_zero_coin_fails
  Test result: OK. Total tests: 2; passed: 2; failed: 0
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
            전역 스토리지 - 연산자 (Global Storage - Operators)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 프로그램은 다음 다섯 가지 명령어를 사용하여 전역 스토리지에서
            리소스를 생성, 삭제 및 업데이트할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>유형</StyledTableCell>
                <StyledTableCell>값 범위</StyledTableCell>
                <StyledTableCell>값 범위</StyledTableCell>
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
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 각 명령은 키 기능을 가진 타입 T에 매개변수화됩니다. 그러나 각
            타입 T는 현재 모듈에서 선언되어야 합니다. 이는 리소스가 정의된
            모듈에서 노출된 API를 통해서만 조작될 수 있도록 보장합니다. 또한, 이
            명령어들은 타입 T의 리소스가 저장된 계정 주소를 나타내는 주소 또는
            &signer를 취합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            리소스에 대한 참조 (References to resources)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            borrow_global 또는 borrow_global_mut을 통해 반환된 전역 리소스에
            대한 참조는 대부분 로컬 스토리지에 대한 참조와 유사하게 동작합니다.
            일반적인 참조 연산자를 사용하여 확장, 읽기 및 쓰기가 가능하며, 다른
            함수의 인수로 전달할 수도 있습니다. 그러나 로컬 참조와 전역 참조
            사이에는 중요한 차이점이 있습니다: 함수는 전역 스토리지를 가리키는
            참조를 반환할 수 없습니다. 예를 들어, 다음 두 함수는 각각 컴파일에
            실패합니다:
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move는 전역 스토리지에 대한 끊어진 참조를 보장하기 위해 이 제한을
            강제해야 합니다. 이 섹션에는 관심 있는 독자를 위해 더 자세한 내용이
            포함되어 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            리소스에 대한 참조 (References to resources)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            전역 스토리지 작업은 인스턴스화된 및 인스턴스화되지 않은 제네릭 타입
            매개변수를 가진 일반적인 리소스에 적용할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            런타임에서 선택된 타입 매개변수를 통해 전역 스토리지에 인덱싱하는
            기능은 storage polymorphism으로 알려진 강력한 Move 기능입니다. 이
            기능으로 가능한 디자인 패턴에 대해서는 Move 제네릭 문서를
            참조하십시오.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            예시: Counter (카운터)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음의 간단한 Counter 모듈은 다섯 가지 전역 스토리지 연산자를
            활용합니다. 이 모듈이 노출하는 API를 통해 다음이 가능합니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 누구나 자신의 계정에 Counter 리소스를 발행할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 누구나 어떤 주소에 Counter가 존재하는지 확인할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 누구나 어떤 주소에 있는 Counter 리소스의 값을 읽거나 증가시킬 수
            있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Counter 리소스를 저장하는 계정은 해당 리소스를 0으로 재설정할 수
            있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Counter 리소스를 저장하는 계정은 해당 리소스를 제거하고 삭제할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            acquires를 사용하여 함수에 주석을 달기
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            카운터 예제에서 get_count, increment, reset 및 delete 함수에
            acquires Counter로 주석이 달린 것을 알 수 있을 것입니다. Move 함수
            m::f는 T를 acquires로 주석을 달아야 하는 경우에만 acquires T로
            주석이 달릴 수 있습니다. 이 경우는 다음과 같습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - m::f의 본문에 move_from{"<T>"}, borrow_global_mut{"<T>"}, 또는
            borrow_global{"<T>"} 명령어가 포함되어 있는 경우, 또는
          </Typography>
          <Typography variant="body1" gutterBottom>
            m::f의 본문에서 동일한 모듈에서 선언된 acquires로 주석이 달린 함수
            m::g를 호출하는 경우.
          </Typography>
          <Typography variant="body1" gutterBottom>
            예를 들어, Counter 내부의 다음 함수는 acquires 주석이 필요합니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            그러나 Counter 외부에서 동일한 함수는 주석이 필요하지 않습니다.
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            한 함수가 여러 리소스를 사용한다면, 해당 함수는 여러 개의 acquires를
            필요로 합니다.
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            acquires 주석은 제네릭 타입 매개변수를 고려하지 않습니다.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            마지막으로, 중복된 acquires는 허용되지 않습니다. Counter 내에 이
            함수를 추가하면 컴파일 오류가 발생합니다.
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            acquires에 대한 자세한 정보는 "Move 함수"를 참조하십시오.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            전역 리소스의 참조 안전성
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move는 전역 참조 반환을 금지하고 acquires 주석을 요구함으로써
            불안정한 참조를 방지합니다. 이를 통해 Move는 모든 참조 타입에 대해
            정적인 참조 안전성(불안정한 참조, null 또는 nil 참조에 의한 오류
            없음)을 제공하는 약속을 지킬 수 있습니다. 이 예시는 Move 타입
            시스템이 acquires를 사용하여 불안정한 참조를 방지하는 방법을
            보여줍니다.
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            이 코드에서 6번째 줄은 전역 스토리지에서 주소 a에 저장된 T에 대한
            참조를 획득합니다. 그런 다음 호출된 remove_t는 해당 값을 제거하여
            t_ref가 불안정한 참조가 됩니다. 다행히도, 이는 타입 시스템이 이
            프로그램을 거부함으로써 발생하지 않을 것입니다. remove_t에 있는
            acquires 주석은 타입 시스템에게 7번째 줄이 위험한 것을 알려줍니다.
            이 때 별도로 remove_t의 본문을 다시 확인하거나 내부를 조사할 필요가
            없습니다! 전역 참조 반환에 대한 제한은 비슷하지만 더 은밀한 문제를
            방지합니다:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            16번째 줄은 전역 리소스 m1::T에 대한 참조를 획득하고, 17번째 줄에서
            해당 리소스를 제거하여 t_ref가 불안정한 상태가 됩니다. 이 경우,
            acquires 주석은 도움이 되지 않습니다. 왜냐하면
            borrow_then_remove_bad 함수가 T를 선언하는 m1 모듈 외부에 있기
            때문입니다 (acquires 주석은 현재 모듈에서 선언된 리소스에만 사용할
            수 있습니다). 대신, 현재 타입 시스템은 6번째 줄에서 전역 참조의
            반환을 방지함으로써 이 문제를 해결합니다. 참조 안전성을 희생하지
            않고도 전역 참조를 반환할 수 있는 더 고급의 타입 시스템도
            가능하지만, Move의 미래 버전에서 이를 고려할 수 있습니다. 현재의
            설계는 표현력, 주석 부담, 타입 시스템 복잡성 사이에서 적절한 균형을
            이루고 있다고 판단하여 선택되었습니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
