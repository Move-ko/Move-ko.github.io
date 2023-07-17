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
            Global Storage - Operators
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move programs can create, delete, and update resources in global
            storage using the following five instructions:
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
            Each of these instructions is parameterized by a type T with the key
            ability. However, each type T must be declared in the current
            module. This ensures that a resource can only be manipulated via the
            API exposed by its defining module. The instructions also take
            either an address or &signer representing the account address where
            the resource of type T is stored.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            References to resources{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            References to global resources returned by borrow_global or
            borrow_global_mut mostly behave like references to local storage:
            they can be extended, read, and written using ordinary reference
            operators and passed as arguments to other function. However, there
            is one important difference between local and global references: a
            function cannot return a reference that points into global storage.
            For example, these two functions will each fail to compile:
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move must enforce this restriction to guarantee absence of dangling
            references to global storage. This section contains much more detail
            for the interested reader.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            References to resources{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Global storage operations can be applied to generic resources with
            both instantiated and uninstantiated generic type parameters:
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            The ability to index into global storage via a type parameter chosen
            at runtime is a powerful Move feature known as storage polymorphism.
            For more on the design patterns enabled by this feature, see Move
            generics.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Example: Counter
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            The simple Counter module below exercises each of the five global
            storage operators. The API exposed by this module allows:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Anyone to publish a Counter resource under their account
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Anyone to check if a Counter exists under any address
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Anyone to read or increment the value of a Counter resource under
            any address
          </Typography>
          <Typography variant="body1" gutterBottom>
            - An account that stores a Counter resource to reset it to zero
          </Typography>
          <Typography variant="body1" gutterBottom>
            - An account that stores a Counter resource to remove and delete it
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Annotating functions with acquires
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            In the counter example, you might have noticed that the get_count,
            increment, reset, and delete functions are annotated with acquires
            Counter. A Move function m::f must be annotated with acquires T if
            and only if:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - The body of m::f contains a move_from{"<T>"}, borrow_global_mut
            {"<T>"}, or borrow_global{"<T>"} instruction, or
          </Typography>
          <Typography variant="body1" gutterBottom>
            The body of m::f invokes a function m::g declared in the same module
            that is annotated with acquires
          </Typography>
          <Typography variant="body1" gutterBottom>
            For example, the following function inside Counter would need an
            acquires annotation:
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            However, the same function outside Counter would not need an
            annotation:
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            If a function touches multiple resources, it needs multiple
            acquires:
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            The acquires annotation does not take generic type parameters into
            account:
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Finally: redundant acquires are not allowed. Adding this function
            inside Counter will result in a compilation error:
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            For more information on acquires, see Move functions.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Reference Safety For Global Resources
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move prohibits returning global references and requires the acquires
            annotation to prevent dangling references. This allows Move to live
            up to its promise of static reference safety (i.e., no dangling
            references, no null or nil dereferences) for all reference types.
            This example illustrates how the Move type system uses acquires to
            prevent a dangling reference:{" "}
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            In this code, line 6 acquires a reference to the T stored at address
            a in global storage. The callee remove_t then removes the value,
            which makes t_ref a dangling reference. Fortunately, this cannot
            happen because the type system will reject this program. The
            acquires annotation on remove_t lets the type system know that line
            7 is dangerous, without having to recheck or introspect the body of
            remove_t separately! The restriction on returning global references
            prevents a similar, but even more insidious problem:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Line 16 acquires a reference to a global resource m1::T, then line
            17 removes that same resource, which makes t_ref dangle. In this
            case, acquires annotations do not help us because the
            borrow_then_remove_bad function is outside of the m1 module that
            declares T (recall that acquires annotations can only be used for
            resources declared in the current module). Instead, the type system
            avoids this problem by preventing the return of a global reference
            at line 6. Fancier type systems that would allow returning global
            references without sacrificing reference safety are possible, and we
            may consider them in future iterations of Move. We chose the current
            design because it strikes a good balance between expressivity,
            annotation burden, and type system complexity.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
