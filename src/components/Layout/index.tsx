import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <title>Move Book</title>
      <Grid container sx={{ marginTop: "84px" }}>
        <Grid
          xs={12}
          sx={{
            backgroundColor: " #171B1C",

            textAlign: "center",
            fontSize: "300%",
            color: "white",
          }}
        >
          <img src="/img/move.webp" style={{ width: "50px" }} />
          <div>MOVE BOOK</div>
        </Grid>
        {props.children}
      </Grid>
    </>
  );
}
