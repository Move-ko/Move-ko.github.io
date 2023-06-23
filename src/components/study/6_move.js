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
            서명자
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            서명자는 기본 제공 이동 자원 유형입니다. 서명자는 소유자가 특정
            주소를 대신하여 작업할 수 있도록 하는 기능입니다. 기본 구현을 다음과
            같이 생각할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            서명자는 이동 외부의 코드(예: 암호화 서명 또는 암호 확인)로 인증된
            사용자를 나타낸다는 점에서 Unix UID와 다소 유사합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            주소 비교
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move 프로그램은 주소 리터럴을 사용하여 특별한 권한 없이 모든 주소
            값을 만들 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그러나 서명자 값은 리터럴이나 지침을 통해 생성할 수 없고 Move
            VM에서만 생성할 수 있기 때문에 특별합니다. VM이 서명자 유형의
            매개변수를 사용하여 스크립트를 실행하기 전에 서명자 값을 자동으로
            생성하여 스크립트에 전달합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            스크립트가 0x42 이외의 주소에서 전송되면 이 스크립트는 코드 0으로
            중단됩니다. 트랜잭션 스크립트는 서명자가 다른 인수의 접두사인 한
            임의의 수의 서명자를 가질 수 있습니다. 즉, 모든 서명자 인수가 먼저
            와야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        사진
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이는 여러 당사자의 권한으로 원자적으로 작동하는 다중 서명자
            스크립트를 구현하는 데 유용합니다. 예를 들어, 위 스크립트의 확장은
            s1과 s2 사이에 원자 통화 스왑을 수행할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            서명자 연산자
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            std::signer 표준 라이브러리 모듈은 서명자 값에 대해 두 가지 유틸리티
            기능을 제공합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        표
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            또한 move_to{"<T>"}(&signer, T) 전역 저장소 연산자는
            signer.address의 계정에 리소스 T를 게시하기 위해 &signer 인수가
            필요합니다. 이렇게 하면 인증된 사용자만 자신의 주소로 리소스를
            게시하도록 선택할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            소유권
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            단순 스칼라 값과 달리 서명자 값은 복사할 수 없습니다. 즉 명시적 복사
            명령을 통해서든 역참조 *를 통해서든 어떤 작업에서도 복사할 수
            없습니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
