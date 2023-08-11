import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const study_arr = [
    { id: 1, name: "스크립트 와 모듈" },
    { id: 2, name: "스크립트 와 모듈" },
    { id: 3, name: "스크립트 와 모듈" },
    { id: 4, name: "스크립트 와 모듈" },
    { id: 5, name: "스크립트 와 모듈" },
    { id: 6, name: "스크립트 와 모듈" },
    { id: 7, name: "스크립트 와 모듈" },
    { id: 8, name: "스크립트 와 모듈" },
    { id: 9, name: "스크립트 와 모듈" },
    { id: 10, name: "스크립트 와 모듈" },
    { id: 11, name: "스크립트 와 모듈" },
    { id: 12, name: "스크립트 와 모듈" },
    { id: 13, name: "스크립트 와 모듈" },
    { id: 14, name: "스크립트 와 모듈" },
    { id: 15, name: "스크립트 와 모듈" },
    { id: 16, name: "스크립트 와 모듈" },
    { id: 17, name: "스크립트 와 모듈" },
    { id: 18, name: "스크립트 와 모듈" },
    { id: 19, name: "스크립트 와 모듈" },
    { id: 20, name: "스크립트 와 모듈" },
    { id: 21, name: "스크립트 와 모듈" },
    { id: 22, name: "스크립트 와 모듈" },
    { id: 23, name: "스크립트 와 모듈" },
    { id: 24, name: "스크립트 와 모듈" },
    { id: 25, name: "스크립트 와 모듈" },
    { id: 26, name: "스크립트 와 모듈" },
    { id: 27, name: "스크립트 와 모듈" },
    { id: 28, name: "스크립트 와 모듈" },
    { id: 29, name: "스크립트 와 모듈" },
  ];

  return (
    mounted && (
      <Container maxWidth="lg">
        <Grid container sx={{ marginTop: "84px" }} spacing={1}>
          {study_arr.map(item => (
            <Grid xs={3} sx={{ padding: 3 }}>
              <Card
                onClick={e => {
                  router.push(`/quest/${item.id}`);
                }}
              >
                <img src={"/img/move.webp"} style={{ width: "100%" }} />
                <CardContent>{item.name}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  );
}
