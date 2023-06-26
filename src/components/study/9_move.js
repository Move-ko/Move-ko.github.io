import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const study_1 = ({ children }) => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Local Variables and Scope
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Declaring Local Variables{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            let bindings
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Variables must be assigned before use{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Valid variable names{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Type annotations
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            When annotations are necessary
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Multiple declarations with tuples{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Multiple declarations with structs{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Destructuring against references
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Ignoring Values
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            General let grammar
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Mutations
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Assignments
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Mutating through a reference
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Scopes
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Expression Blocks
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Shadowing
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Move and Copy
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Safety{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Inference
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
