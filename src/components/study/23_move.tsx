import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
  const code11 = `  $ aptos move test --coverage
  INCLUDING DEPENDENCY AptosFramework
  INCLUDING DEPENDENCY AptosStdlib
  INCLUDING DEPENDENCY MoveStdlib
  BUILDING TestExample
  Running Move unit tests
  [ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes
  [ PASS    ] 0x1::my_module::make_sure_zero_coin_fails
  [ PASS    ] 0x1::my_module::test_has_coin
  Test result: OK. Total tests: 3; passed: 3; failed: 0
  +-------------------------+
  | Move Coverage Summary   |
  +-------------------------+
  Module 0000000000000000000000000000000000000000000000000000000000000001::my_module
  >>> % Module coverage: 100.00
  +-------------------------+
  | % Move Coverage: 100.00  |
  +-------------------------+
  Please use \`aptos move coverage\` -h for more detailed source or bytecode test coverage of this package
`;
  const code12 = `  $ aptos move coverage -h
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Unit Tests
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Unit testing for Move adds three new annotations to the Move source
            language:
          </Typography>
          <Typography variant="body1" gutterBottom>
            #[test]
          </Typography>
          <Typography variant="body1" gutterBottom>
            #[test_only], and
          </Typography>
          <Typography variant="body1" gutterBottom>
            #[expected_failure].
          </Typography>
          <Typography variant="body1" gutterBottom>
            각각 함수를 테스트로 표시하는 #[test], 모듈 또는 모듈 멤버 (use,
            함수 또는 구조체)를 테스트 전용 코드로 표시하는 #[test_only], 그리고
            테스트가 실패할 것으로 예상되는 것을 표시하는
            #[expected_failure]입니다. 이러한 주석들은 어떤 가시성을 갖는
            함수에도 위치시킬 수 있습니다. 모듈 또는 모듈 멤버가 #[test_only]
            또는 #[test]로 주석 처리되면, 해당 모듈이 테스트를 위해 컴파일되지
            않는 한 컴파일된 바이트코드에 포함되지 않습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Testing Annotations: Their Meaning and Usage
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            #[test]와 #[expected_failure] 주석은 인자가 있는 경우와 인자가 없는
            경우 모두 사용할 수 있습니다. 인자가 없는 경우, #[test] 주석은
            매개변수가 없는 함수에만 사용할 수 있습니다. 이 주석은 해당 함수를
            테스트로 표시하여 유닛 테스트 도구에서 실행할 수 있도록 합니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            테스트는 #[expected_failure]로도 주석 처리될 수 있습니다. 이 주석은
            해당 테스트가 오류를 발생시킬 것으로 예상된다는 것을 표시합니다.
            특정 모듈에서 특정 중단 코드로 테스트가 중단되는지 확인하려면
            #[expected_failure(abort_code = {"<code>"}, location = {"<loc>"})]로
            주석 처리하여 다른 중단 코드, 다른 모듈 또는 중단되지 않은 오류로
            테스트가 실패하는 경우를 방지할 수 있습니다. 여기서 {"<loc>"}는
            Self(현재 모듈) 또는 정규화된 이름(vector::std와 같은)이 될 수
            있습니다. #[test] 주석이 있는 함수만 #[expected_failure]로 주석
            처리될 수 있다는 점에 유의하세요.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            With arguments, a test annotation takes the form #[test(
            {"<param_name_1>"} = {"<address>"}, ...,{" <param_name_n> "}={" "}
            {"<address>"})]. If a function is annotated in such a manner, the
            function's parameters must be a permutation of the parameters{" "}
            {"<param_name_1>, ..., <param_name_n>"}, i.e., the order of these
            parameters as they occur in the function and their order in the test
            annotation do not have to be the same, but they must be able to be
            matched up with each other by name.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Only parameters with a type of signer are supported as test
            parameters. If a non-signer parameter is supplied, the test will
            result in an error when run.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            A module and any of its members can be declared as test only. In
            such a case the item will only be included in the compiled Move
            bytecode when compiled in test mode. Additionally, when compiled
            outside of test mode, any non-test uses of a #[test_only] module
            will raise an error during compilation.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Running Unit Tests
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Unit tests for a Move package can be run with the aptos move test
            command.
          </Typography>
          <Typography variant="body1" gutterBottom>
            When running tests, every test will either PASS, FAIL, or TIMEOUT.
            If a test case fails, the location of the failure along with the
            function name that caused the failure will be reported if possible.
            You can see an example of this below.
          </Typography>
          <Typography variant="body1" gutterBottom>
            A test will be marked as timing out if it exceeds the maximum number
            of instructions that can be executed for any single test. This bound
            can be changed using the options below, and its default value is set
            to 5000 instructions. Additionally, while the result of a test is
            always deterministic, tests are run in parallel by default, so the
            ordering of test results in a test run is non-deterministic unless
            running with only one thread (see OPTIONS below).
          </Typography>
          <Typography variant="body1" gutterBottom>
            유닛 테스트 바이너리에 전달할 수 있는 여러 옵션이 있습니다. 이
            옵션들은 테스트를 세밀하게 조정하고 실패하는 테스트를 디버깅하는 데
            도움이 됩니다. 도움말 플래그를 사용하여 이를 확인할 수 있습니다.
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Example{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            A simple module using some of the unit testing features is shown in
            the following example: First create an empty package inside an empty
            directory:
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음을 Move.toml 파일에 추가하십시오.
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음으로, 다음 모듈을 sources 디렉토리 아래에 추가하십시오.
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            테스트 실행하기
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            그런 다음 aptos move test 명령으로 이러한 테스트를 실행할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            테스트 플래그 사용하기
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            {"  -f <str> or --filter <str>"}
          </Typography>
          <Typography variant="body1" gutterBottom>
            이 명령은 fully qualified name에 {"<str>"}을 포함하는 테스트만
            실행합니다. 예를 들어, 이름에 "zero_coin"이 포함된 테스트만
            실행하려면:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            --coverage
          </Typography>
          <Typography variant="body1" gutterBottom>
            이 명령은 테스트 케이스로 커버되는 코드를 계산하고 커버리지 요약을
            생성합니다.
          </Typography>
        </Box>
        <Copy code={code11} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            그런 다음 aptos move coverage를 실행함으로써 더 자세한 커버리지
            정보를 얻을 수 있습니다. 이를 위해 도움말 플래그를 사용할 수
            있습니다.
          </Typography>
        </Box>
        <Copy code={code12} />
      </Grid>
    </Grid>
  );
};

export default study_1;
