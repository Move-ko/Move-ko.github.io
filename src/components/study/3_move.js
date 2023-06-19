import Grid from "@mui/material/Unstable_Grid2";
import { CodeBlock } from "react-code-blocks";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const study_1 = ({ children }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const bools = [
    {
      통사론: "&&",
      설명: "단락 논리 및",
      등가표현: "p && q에 해당합니다 if(p)q else false",
    },
    {
      통사론: "||",
      설명: "단락 논리 또는",
      등가표현: "p || q 에 해당합니다 if(p) true else q",
    },
    {
      통사론: "!",
      설명: "논리적 부정",
      등가표현: "!p에 해당합니다 if(q) false else true",
    },
  ];
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            부울
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            Move에는 boolean에 기본값은 true와 false입니다
          </Typography>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            운영
          </Typography>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        <TableContainer component={Paper}>
          <Typography variant="body1" gutterBottom>
            bool은 세가지 논리 연산을 지원합니다.
          </Typography>
          <Table sx={{ width: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>통사론</StyledTableCell>
                <StyledTableCell>설명</StyledTableCell>
                <StyledTableCell>등가표현</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {bools.map(item => (
                <StyledTableRow key={item?.drop_name}>
                  <StyledTableCell component="div" scope="row">
                    {item?.통사론}
                  </StyledTableCell>
                  <StyledTableCell>{item?.설명}</StyledTableCell>
                  <StyledTableCell>{item?.등가표현}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" gutterBottom>
            bool값은 여러 Move제어 흐름 구성에서 사용됩니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
