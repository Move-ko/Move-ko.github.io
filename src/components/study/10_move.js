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
            평등
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
