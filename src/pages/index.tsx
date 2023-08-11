import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { Typography, Box } from "@mui/material";

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
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            🧐What is Move?
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Diem 블록체인의 구현을 위해 Rust언어에서 힌트를 받아
            만들어졌으며,현재는 <span style={{ color: "purple" }}>Aptos</span>및
            <span style={{ color: "purple" }}>Sui</span>에서 사용하고 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Move를 사용하면 개발자가 자산을 유연하게 관리하고 전송하는
            프로그램을 작성하는 동시에 해당 자산에 대한 공격에 방어(보안 및
            보호)를 제공할수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            특징
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            1. 자산 보안: Move 언어는 자산의 보안성을 강조합니다. 타입 시스템을
            사용하여 자산의 일관성과 불변성을 보장하며, 잠재적인 버그와 취약점을
            예방하는데 도움이 됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.자산의 흐름 제어: Move 언어는 자산의 흐름을 제어하는 것을
            강조합니다. 자산의 이동 및 전송에 대한 규칙과 제약을 명확하게
            정의하여 보안과 논리적 일관성을 유지합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            3.모듈화: Move 언어는 모듈화를 지원하여 스마트 컨트랙트의 재사용성과
            확장성을 향상시킵니다. 모듈은 독립적으로 작동하며 다른 모듈과
            상호작용할 수 있습니다.
          </Typography>
        </Box>
        <Grid container sx={{ marginTop: "84px" }} spacing={1}>
          {study_arr.map(item => (
            <Grid xs={3} sx={{ padding: 3 }}>
              <Card
                sx={{ borderRadius: 10 }}
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
