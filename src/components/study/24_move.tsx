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

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Global Storage - Structure
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            The purpose of Move programs is to read from and write to
            tree-shaped persistent global storage. Programs cannot access the
            filesystem, network, or any other data outside of this tree. In
            pseudocode, the global storage looks something like:
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Structurally, global storage is a forest consisting of trees rooted
            at an account address. Each address can store both resource data
            values and module code values. As the pseudocode above
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
