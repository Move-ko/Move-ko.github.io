import Grid from "@mui/material/Unstable_Grid2";
import { CodeBlock } from "react-code-blocks";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const study_1 = ({ children }) => {
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
          <Typography variant="h2" gutterBottom>
            What is Move and Script
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move에는 모듈 과 스크립트 라는 두 가지 유형의 프로그램이 있습니다 .
            모듈은 이러한 유형에서 작동하는 함수와 함께 구조체 유형을 정의하는
            라이브러리입니다. 모듈 함수는 저장소 업데이트 규칙을 정의하고
            있습니다.모듈은 전역저장소에 저장됩니다. main스크립트는 기존 언어의
            함수와 유사한 실행 가능한 진입점입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        <CodeBlock
          text={`module overmind::bananas {
}
`}
          language={"Rust"}
          showLineNumbers={true}
          wrapLines={true}
          theme={myCustomTheme}
          onClick={handleClick}
        />
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            main스크립트는 기존 언어의 함수 와 유사한 실행 가능한 진입점입니다 .
            스크립트는 일반적으로 전역 저장소에 대한 업데이트를 수행하는 게시된
            모듈의 기능을 호출합니다. 스크립트는 전역 저장소에 게시되지 않는
            임시 코드 스니펫입니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
