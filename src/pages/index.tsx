import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data_v = [];

  for (let i = 1; i <= 29; i++) {
    data_v.push({ id: i });
  }

  return (
    mounted && (
      <Grid container sx={{ marginTop: "84px" }} spacing={3}>
        {data_v.map(item => (
          <Grid xs={2}>
            <Card
              onClick={e => {
                router.push(`/quest/${item.id}`);
              }}
            >
              <img src={"/img/move.webp"} style={{ width: "100%" }} />
              <CardContent>item:{item.id}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  );
}
