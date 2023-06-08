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
            튜플 및 단위
          </Typography>
          <Typography variant="body1" gutterBottom>
            튜플은 주로 여러 반환 값에 유용합니다. 단위는 빈 튜플이지만 Move와
            같은 엄격한 유형의 언어에서 중요한 기능을 수행합니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move는 튜플을 일류 값 으로 사용하는 다른 언어에서 온 것으로 예상할
            수 있으므로 튜플을 완전히 지원하지 않습니다 . 그러나 여러 반환 값을
            지원하기 위해 Move에는 튜플과 같은 표현식이 있습니다. 이러한 식은
            런타임에 구체적인 값을 생성하지 않으며(바이트코드에 튜플이 없음)
            결과적으로 매우 제한적입니다. 식에만 나타날 수 있습니다(일반적으로
            함수의 반환 위치). 지역 변수에 바인딩할 수 없습니다. 구조체에 저장할
            수 없습니다. 제네릭을 인스턴스화하는 데 튜플 유형을 사용할 수
            없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            마찬가지로 단위는() 식 기반이 되기 위해 Move 소스 언어에서 만든
            유형입니다. 단위 값은 ()런타임 값을 생성하지 않습니다. ()단위를 빈
            튜플로 간주할 수 있으며 튜플에 적용되는 모든 제한 사항이 단위에도
            적용됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            이러한 제한 사항을 감안할 때 언어에 튜플이 있는 것이 이상하게 느껴질
            수 있습니다. 그러나 다른 언어에서 튜플의 가장 일반적인 사용 사례 중
            하나는 함수가 여러 값을 반환할 수 있도록 하는 함수입니다. 일부
            언어는 사용자가 여러 반환 값을 포함하는 구조체를 작성하도록 강제하여
            이 문제를 해결합니다. 그러나 Move에서는 구조체 내부에 참조를 넣을 수
            없습니다 . 여러 반환 값을 지원하려면 Move가 필요했습니다. 이러한
            여러 반환 값은 모두 바이트 코드 수준에서 스택에 푸시됩니다. 소스
            수준에서 이러한 여러 반환 값은 튜플을 사용하여 표시됩니다.
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
