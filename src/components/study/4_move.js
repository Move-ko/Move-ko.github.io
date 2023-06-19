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
          <Typography variant="h4" gutterBottom>
            주소
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={2}></Grid>
      <Grid xs={12} md={8}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            주소는 Move프로그래밍 언어에서 글로벌 스토리지의 위치 또는 계정을
            나타내는 내장 타입입니다. 256비트(32바이트)식별자이며,특정 주소에서
            두가지 요소,모듈과 리소스를 저장할수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            주소는 내부적으로 256비트 정수로 되어 있지만 Move주소는 일부러
            불투명한 형태로 설계되었습니다.이는 정수에서주소를 만들거나
            산술연산을 지원하지 않으며 ,수정할수 없다는 의미입니다.c언어에서의
            포인터 산술과 비슷한 기능을 가진 흥미로운 프로그램들이 있을수 있지만
            Move는 정적 검증을 지원하기 위해 처음부터 이러한 동적 동작을
            허용하지 않도록 설계되었습니다
          </Typography>
          <Typography variant="body1" gutterBottom>
            런타임 주소 값(주소 타입의 값)을 사용하여 해당 주소에 있는 리소스에
            접근할 수 있지만, 모듈에는 주소 값을 통해 런타임에서 접근할 수 는
            없습니다.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            문법
          </Typography>
        </Box>
      </Grid>

      <Grid xs={12} md={2}></Grid>
      <Grid xs={12} md={8}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="body1" gutterBottom>
            주소는 두 가지 형태, 이름(named) 주소와 숫자형 주소로 나눌 수
            있습니다. named 주소의 문법은 Move에서 사용되는 다른 명명된
            식별자들과 동일한 규칙을 따릅니다. 숫자형 주소의 문법은 16진수로
            인코딩된 값에 제한되지 않으며, u256 형식의 유효한 숫자 값이 주소
            값으로 사용될 수 있습니다. 예를 들어, 42, 0xCAFE, 2021은 모두 유효한
            숫자형 주소 리터럴입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            주소가 식(expression) 컨텍스트에서 사용되는지 여부를 구분하기 위해,
            주소를 사용하는 문맥에 따라 문법이 달라집니다:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >{`주소가 식으로 사용될 때는 주소 앞에 @ 문자가 붙어야 합니다. 즉, @<numerical_value> 또는 @<named_address_identifier>입니다.
          식 컨텍스트가 아닌 경우에는 주소를 @ 문자 없이 작성할 수 있습니다. 즉, <numerical_value> 또는 <named_address_identifier>입니다.
          일반적으로, @는 주소를 네임스페이스 항목에서 식 항목으로 전환하는 연산자로 생각할 수 있습니다`}</Typography>
        </Box>
      </Grid>
      <Grid xs={12} md={2}></Grid>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          명명된 주소
        </Typography>
      </Box>
      <Grid xs={12} md={2}></Grid>
      <Grid xs={12} md={8}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography
            variant="body1"
            gutterBottom
          >{`명명된 주소는 주소가 사용되는 모든 위치에서 숫자 값 대신 식별자를 사용할 수 있도록 하는 기능입니다. 이는 값 레벨뿐만 아니라 모든 곳에서 사용될 수 있습니다. 명명된 주소는 Move 패키지의 최상위 요소(모듈과 스크립트 외부)로 선언되고 바인딩되거나, Move 컴파일러에 인수로 전달됩니다.

          `}</Typography>
          <Typography
            variant="body1"
            gutterBottom
          >{`명명된 주소는 소스 언어 수준에서만 존재하며, 바이트코드 수준에서 해당 값으로 완전히 대체됩니다. 따라서 모듈과 모듈 멤버는 모듈의 명명된 주소를 통해 액세스해야 하며, 컴파일 중에 명명된 주소에 할당된 숫자 값인 0x2::foo와 같은 방식으로 액세스해서는 안 됩니다. 예를 들어, my_addr가 0x2로 설정된 Move 프로그램을 컴파일한 경우 use my_addr::foo는 use 0x2::foo와 동일하지 않습니다. 이 구별은 모듈과 스크립트 섹션에서 자세히 설명됩니다.

        `}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
