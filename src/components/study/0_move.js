import Grid from "@mui/material/Unstable_Grid2";
import { CodeBlock } from "react-code-blocks";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const study_1 = ({ children }) => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            🧐What is Move?
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Diem 블록체인의 구현을 위해 Rust언어에서 힌트를 받아
            만들어졌으며,현재는 <span style={{ color: "purple" }}>Aptos</span>{" "}
            및 <span style={{ color: "purple" }}>Sui</span>에서 사용하고
            있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Move를 사용하면 개발자가 자산을 유연하게 관리하고 전송하는
            프로그램을 작성하는 동시에 해당 자산에 대한 공격에 방어(보안 및
            보호)를 제공할수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4}>
        <img
          src={"/img/move.webp"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "30px" }}
        />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            특징
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
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
      </Grid>
    </Grid>
  );
};

export default study_1;
