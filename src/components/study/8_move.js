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
            튜플 및 단위
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move는 튜플을 일급 값으로 사용하는 다른 언어에서 온 것으로 예상할 수
            있으므로 튜플을 완전히 지원하지 않습니다. 그러나 여러 반환 값을
            지원하기 위해 Move에는 튜플과 같은 표현식이 있습니다. 이러한 식은
            런타임에 구체적인 값을 생성하지 않으며(바이트코드에 튜플이 없음)
            결과적으로 매우 제한적입니다. 식에만 나타날 수 있습니다(일반적으로
            함수의 반환 위치). 지역 변수에 바인딩할 수 없습니다. 구조체에 저장할
            수 없습니다. 제네릭을 인스턴스화하는 데 튜플 유형을 사용할 수
            없습니다. 마찬가지로 unit()은 표현식 기반이 되기 위해 Move 소스
            언어에서 만든 유형입니다. 단위 값()은 런타임 값을 생성하지 않습니다.
            unit()을 빈 튜플로 간주할 수 있으며 튜플에 적용되는 모든 제한 사항이
            유닛에도 적용됩니다. 이러한 제한 사항을 감안할 때 언어에 튜플이 있는
            것이 이상하게 느껴질 수 있습니다. 그러나 다른 언어에서 튜플의 가장
            일반적인 사용 사례 중 하나는 함수가 여러 값을 반환할 수 있도록 하는
            함수입니다. 일부 언어는 사용자가 여러 반환 값을 포함하는 구조체를
            작성하도록 강제하여 이 문제를 해결합니다. 그러나 Move에서는 구조체
            내부에 참조를 넣을 수 없습니다. 여러 반환 값을 지원하려면 Move가
            필요했습니다. 이러한 여러 반환 값은 모두 바이트 코드 수준에서 스택에
            푸시됩니다. 소스 수준에서 이러한 여러 반환 값은 튜플을 사용하여
            표시됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            리터럴
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            튜플은 괄호 안에 쉼표로 구분된 표현식 목록으로 생성됩니다.
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
            (e)에는 (e): (t) 유형이 없습니다. 즉, 하나의 요소가 있는 튜플이
            없습니다. 괄호 안에 하나의 요소만 있는 경우 괄호는 명확성을 위해서만
            사용되며 다른 특별한 의미는 없습니다. 때로는 요소가 두 개인 튜플을
            "쌍"이라고 하고 요소가 세 개인 튜플을 "트리플"이라고 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        <img
          src={"/img/8_1.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Operations
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            현재 튜플에서 수행할 수 있는 유일한 작업은 구조 분해입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Destructuring
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            모든 크기의 튜플에 대해 let 바인딩이나 할당에서 해체될 수 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        <img
          src={"/img/8_2.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            자세한 내용은 변수 이동을 참조하십시오.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Subtyping
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12} sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            참조와 함께 튜플은 Move에서 하위 유형이 있는 유일한 유형입니다.
            튜플은 (공변량 방식으로) 참조가 있는 하위 유형이라는 의미에서만 하위
            유형이 있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4} sx={{ marginTop: "0px" }}>
        <img
          src={"/img/8_3.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={4}></Grid>
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
            위에서 언급했듯이 튜플 값은 런타임에 실제로 존재하지 않습니다.
            그리고 현재 이 때문에 로컬 변수에 저장할 수 없습니다(그러나 이
            기능이 곧 제공될 가능성이 높습니다). 따라서 튜플을 복사하려면 먼저
            지역 변수에 넣어야 하므로 튜플은 현재에만 이동할 수 있습니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
