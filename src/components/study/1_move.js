import Grid from "@mui/material/Unstable_Grid2";
import { CodeBlock } from "react-code-blocks";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
const study_1 = ({ children }) => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Code block clicked");
  };

  const myCustomTheme = {
    lineNumberColor: "#ccc",
    lineNumberBgColor: "#222",
    backgroundColor: "#222",
    textColor: "#ccc",
    substringColor: "#00ff00",
    keywordColor: "#0077ff",
    attributeColor: "#ffaa00",
    selectorTagColor: "#0077ff",
    docTagColor: "#aa00ff",
    nameColor: "#f8f8f8",
    builtInColor: "#0077ff",
    literalColor: "#ffaa00",
    bulletColor: "#ffaa00",
    codeColor: "#ccc",
    additionColor: "#00ff00",
    regexpColor: "#f8f8f8",
    symbolColor: "#ffaa00",
    variableColor: "#ffaa00",
    templateVariableColor: "#ffaa00",
    linkColor: "#aa00ff",
    selectorAttributeColor: "#ffaa00",
    selectorPseudoColor: "#aa00ff",
    typeColor: "#0077ff",
    stringColor: "#00ff00",
    selectorIdColor: "#ffaa00",
    quoteColor: "#f8f8f8",
    templateTagColor: "#ccc",
    deletionColor: "#ff0000",
    titleColor: "#0077ff",
    sectionColor: "#0077ff",
    commentColor: "#777",
    metaKeywordColor: "#f8f8f8",
    metaColor: "#aa00ff",
    functionColor: "#0077ff",
    numberColor: "#ffaa00",
  };
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            모듈과 스크립트
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            Move에는 모듈 과 스크립트 라는 두 가지 유형의 프로그램이 있습니다 .
            모듈은 이러한 유형에서 작동하는 함수와 함께 구조체 유형을 정의하는
            라이브러리이며,구조체 유형은 Move의 전역저장소 스키마를 정의하고
            모듈 함수는 저장소 업데이트 규칙을 정의하고 있으며,모듈은
            전역저장소에 저장됩니다. 스크립트는 전역저장소에 게시되지 않는 임시
            코드 스니펫 이며, 일반적으로 전역저장소에 대한 업데이트를 수행하는
            게시된 모듈의 기능을 호출합니다.또한 main스크립트는 기존 언어의
            함수와 유사한 실행 가능한 진입점입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Move 소스 파일(또는 컴파일 단위 )에는 여러 모듈과 스크립트가 포함될
            수 있습니다. 그러나 모듈 게시 또는 스크립트 실행은 각각 별도의 VM
            작업입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            스크립트
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}> -ex)스크립트 구조</Grid>
      <Grid xs={0} md={2}></Grid>

      <Grid xs={12} md={8}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_1.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_1.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            블록 script는 use로 선언으로 시작하며 그 밑에 상수 그밑에 함수순으로
            되어야합니다.main함수는 어떤 이름이든 가질수 있으며(main호출할
            필요가 없음)스크립트 블록의 유일한 함수이며 인수를 얼마든지 가질수
            잇고 값은 반환할수 없습니다.또한 스크립트에는 스크립트는 권한이 매우
            제한되어 있습니다.친구를 선언하거나 유형을 구성하거나 전역저장소에
            접근 할수 없습니다. 주요 목적은 모듈 함수를 호출하는 것입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_2.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_2.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            스크립트는 권한이 매우 제한되어 있습니다.Friends를 선언하거나 유형을
            구성하거나 전역저장소에 접근 할수 없습니다. 주요 목적은 모듈 함수를
            호출하는 것입니다.
          </Typography>
        </Box>
        <Typography>
          ex)Friends: 현재 모듈에서 신뢰하는 모듈을 선언하는 데 사용됩니다.
        </Typography>
      </Grid>

      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            모듈
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}> -ex)스크립트 구조</Grid>
      <Grid xs={0} md={2}></Grid>

      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_3.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_3.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            ex)address:명명된 주소 또는 리터럴 주소
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_4.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_4.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            이 module 0x42::example모듈의 부분은 모듈이 전역저장소의 계정주소로
            게시되도록 지정합니다 모듈은 named 주소를 사용하여 선언할수도
            있습니다
          </Typography>
        </Box>
      </Grid>

      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_5.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_5.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            명명된 주소는 소스언어 수준과 컴파일 중에만 존재하기 떄문에 명명된
            주소는 바이트코드 수준에서 해당 값을 완전히 대체합니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_6.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_6.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            my_addr로 설정하여 컴파일하면 0xC0FFEE운영상 다음과 동일합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_7.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_7.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            그러나 소스 수준에서 이들은 동일하지 않습니다.함수는 해당 주소에
            할당된 숫자값이 아니라 명명된 주소를 통해 엑세스 해야 m::foo합니다
            모듈 이름은 문재 a to z 또는 Ato로 시작할수 있습니다
          </Typography>
          <Typography variant="body1" gutterBottom>
            첫번쨰 문자 뒤에 모듈 이름에는 밑줄 _ a~z,A~Z또는 숫자가 포함될수
            있습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_8.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_8.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            일반적으로 모듈 이름은 소문자로 시작합니다 명명된 모듈은
            my_module명명된 소스파일에 저장되어야 합니다. **my_module_move**
          </Typography>
          <Typography variant="body1" gutterBottom>
            블록 내부의 모든 요소는 module임의의 순서로 나타낼수
            있습니다.types기본적으로 모듈은 및 의 모음입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            functions키워드 use는 다른 모듈에서 유형을 가져오는사용합니다
          </Typography>
          <Typography variant="body1" gutterBottom>
            friend는 신뢰할수 잇는 모듈 목록을 지정합니다
          </Typography>
          <Typography variant="body1" gutterBottom>
            const는 모듈의 함수에서 사용할수있는 전용 상수를 지정합니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            모듈 특징정리
          </Typography>
          <Typography variant="body1" gutterBottom>
            1. 모듈 요소(사용, 상수, 함수 등)는 특정 순서로 구성되어야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.모듈은 전역 저장소에 저장됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            3.모듈은 main이라는 함수를 포함해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            4. 구조체는 모듈에서 유효합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.모듈의 어떤 함수도 반환 값을 가질 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            6.모듈에는 하나의 함수만 선언할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.친구 모듈은 모듈 내에서 유효합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.모듈은 주소와 식별자로 선언해야 합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8} sx={{ marginTop: "40px" }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            스크립트 특징정리
          </Typography>
          <Typography variant="body1" gutterBottom>
            1.스크립트는 전역 저장소에 저장되지 않습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.스크립트 요소(사용, 상수, 함수 등)는 특정 순서로 구성되어야
            합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            3.스크립트 블록에는 하나의 함수만 선언할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            4. 스크립트 함수는 임의의 이름을 가질 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.상수는 스크립트에서 유효합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            6.스크립트에는 하나의 함수만 선언할 수 있으며 이름은 main으로
            지정해야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.스크립트에 선언된 함수는 얼마든지 있을 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.friend 모듈은 스크립트에서 선언할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            9.스크립트에서 선언된 함수는 매개변수를 가질 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            10. 스크립트에서 선언된 함수는 반환 값을 가질 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            11.구조체는 스크립트에서 유효합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        - ex)예시
        <Button
          variant="contained"
          size="medium"
          onClick={e => {
            router.push(
              "https://github.com/Move-ko/Move-ko.github.io/blob/main/Move/1/1_9.move"
            );
          }}
        >
          Code
        </Button>
        <img
          src={"/img/1_9.png"}
          style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
    </Grid>
  );
};

export default study_1;
