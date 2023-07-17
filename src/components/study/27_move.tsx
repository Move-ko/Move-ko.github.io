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

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Move Coding Conventions
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            This section lays out some basic coding conventions for Move that
            the Move team has found helpful. These are only recommendations, and
            you should feel free to use other formatting guidelines and
            conventions if you have a preference for them.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Naming{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - Module names: should be lower snake case, e.g., fixed_point32,
            vector.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Type names: should be camel case if they are not a native type,
            e.g., Coin, RoleId.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Function names: should be lower snake case, e.g., destroy_empty.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Constant names: should be upper camel case and begin with an E if
            they represent error codes (e.g., EIndexOutOfBounds) and upper snake
            case if they represent a non-error value (e.g., MIN_STAKE).
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Generic type names: should be descriptive, or anti-descriptive
            where appropriate, e.g., T or Element for the Vector generic type
            parameter. Most of the time the "main" type in a module should be
            the same name as the module e.g., option::Option,
            fixed_point32::FixedPoint32.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Module file names: should be the same as the module name e.g.,
            option.move.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Script file names: should be lower snake case and should match the
            name of the “main” function in the script.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Mixed file names: If the file contains multiple modules and/or
            scripts, the file name should be lower snake case, where the name
            does not match any particular module/script inside.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Imports{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - All module use statements should be at the top of the module.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Functions should be imported and used fully qualified from the
            module in which they are declared, and not imported at the top
            level.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Types should be imported at the top-level. Where there are name
            clashes, as should be used to rename the type locally as
            appropriate.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            For example, if there is a module:
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            this would be imported and used as:
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            And, if there is a local name-clash when importing two modules:
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Comments{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            - Each module, struct, and public function declaration should be
            commented.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Move has doc comments ///, regular single-line comments //, block
            comments /* */, and block doc comments /** */.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Formatting{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            The Move team plans to write an autoformatter to enforce formatting
            conventions. However, in the meantime:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Four space indentation should be used except for script and
            address blocks whose contents should not be indented.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Lines should be broken if they are longer than 100 characters.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Structs and constants should be declared before all functions in a
            module.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
