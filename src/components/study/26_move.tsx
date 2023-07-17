import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const study_1 = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Libraries
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Aptos provides multiple useful libraries for developers. The
            complete up-to-date docs can be found here.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
