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
            부울
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move는 6개의 부호 없는 정수 유형( u8, u16, u32, u64, u128및 ) 을
            지원합니다 u256. 이러한 유형의 값 범위는 0에서 유형의 크기에 따라
            달라지는 최대값입니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            이러한 유형의 리터럴 값은 일련의 숫자(예: 112) 또는 16진수
            리터럴(예: )로 지정됩니다 0xFF. 리터럴의 유형은 선택적으로 접미사로
            추가할 수 있습니다(예: 112u8. 유형이 지정되지 않은 경우 컴파일러는
            리터럴이 사용되는 컨텍스트에서 유형을 유추하려고 시도합니다. 유형을
            유추할 수 없으면 로 간주됩니다 u64. 숫자 리터럴은 그룹화 및 가독성을
            위해 밑줄로 구분할 수 있습니다. (예, 1_234_5678, 1_000u128,
            0xAB_CD_12_35). 리터럴이 지정된(또는 유추된) 크기 범위에 비해 너무
            크면 오류가 보고됩니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={0} md={4}></Grid>
      <Grid xs={12} md={4}>
        <Box sx={{ width: "100%", fontSize: "12px" }}>
          <CodeBlock
            text={
              `// literals with explicit annotations;
            let explicit_u8 = 1u8;
            let explicit_u16 = 1u16;
            let explicit_u32 = 1u32;
            let explicit_u64 = 2u64;
            let explicit_u128 = 3u128;
            let explicit_u256 = 1u256;
            let explicit_u64_underscored = 154_322_973u64;
            
            // literals with simple inference
            let simple_u8: u8 = 1;
            let simple_u16: u16 = 1;
            let simple_u32: u32 = 1;
            let simple_u64: u64 = 2;
            let simple_u128: u128 = 3;
            let simple_u256: u256 = 1;
            
            // literals with more complex inference
            let complex_u8 = 1; // inferred: u8
            // right hand argument to shift must be u8
            let _unused = 10 << complex_u8;
            
            let x: u8 = 38;
            let complex_u8 = 2; // inferred: u8
            // arguments to ` +
              ` must have the same type
            let _unused = x + complex_u8;
            
            let complex_u128 = 133_876; // inferred: u128
            // inferred from function argument type
            function_that_takes_u128(complex_u128);
            
            // literals can be written in hex
            let hex_u8: u8 = 0x1;
            let hex_u16: u16 = 0x1BAE;
            let hex_u32: u32 = 0xDEAD80;
            let hex_u64: u64 = 0xCAFE;
            let hex_u128: u128 = 0xDEADBEEF;
            let hex_u256: u256 = 0x1123_456A_BCDE_F;
`
            }
            language={"Rust"}
            showLineNumbers={true}
            wrapLines={true}
            theme={myCustomTheme}
            onClick={handleClick}
          />
        </Box>
      </Grid>
      <Grid xs={0} md={4}></Grid>
    </Grid>
  );
};

export default study_1;
