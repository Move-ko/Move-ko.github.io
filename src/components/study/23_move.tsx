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
            They respectively mark a function as a test, mark a module or module
            member (use, function, or struct) as code to be included for testing
            only, and mark that a test is expected to fail. These annotations
            can be placed on a function with any visibility. Whenever a module
            or module member is annotated as #[test_only] or #[test], it will
            not be included in the compiled bytecode unless it is compiled for
            testing.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Testing Annotations: Their Meaning and Usage
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Both the #[test] and #[expected_failure] annotations can be used
            either with or without arguments. Without arguments, the #[test]
            annotation can only be placed on a function with no parameters. This
            annotation simply marks this function as a test to be run by the
            unit testing harness.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            A test can also be annotated as an #[expected_failure]. This
            annotation marks that the test should is expected to raise an error.
            You can ensure that a test is aborting with a specific abort{" "}
            {"<code>"} in the module {"<loc>"}. by annotating it with
            #[expected_failure(abort_code ={" <code>"}, location ={" <loc>"})],
            if it then fails with a different abort code, in a different module
            or with a non-abort error the test will fail. Note that{" <loc>"}{" "}
            can be Self(in the current module) or a qualified name, e.g.
            vector::std. Only functions that have the #[test] annotation can
            also be annotated as an #[expected_failure].
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
            There are also a number of options that can be passed to the unit
            testing binary to fine-tune testing and to help debug failing tests.
            These can be found using the the help flag:
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
            Next add the following to the Move.toml:
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Next add the following module under the sources directory:
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Running Tests{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            You can then run these tests with the aptos move test command:
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Using Test Flags{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            {"  -f <str> or --filter <str>"}
          </Typography>
          <Typography variant="body1" gutterBottom>
            This will only run tests whose fully qualified name contains
            {" <str>. "}For example if we wanted to only run tests with
            "zero_coin" in their name:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            --coverage
          </Typography>
          <Typography variant="body1" gutterBottom>
            This will compute code being covered by test cases and generate
            coverage summary.
          </Typography>
        </Box>
        <Copy code={code11} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Then by running aptos move coverage, we can get more detailed
            coverage information. These can be found using the the help flag:
          </Typography>
        </Box>
        <Copy code={code12} />
      </Grid>
    </Grid>
  );
};

export default study_1;
