import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const study_1 = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h2" gutterBottom>
            평등
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
