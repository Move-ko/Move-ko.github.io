import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Study_0 from "../components/study/0_move";
import Study_1 from "../components/study/1_move";
import Study_2 from "../components/study/2_move";
import Study_3 from "../components/study/3_move";
import Study_4 from "../components/study/4_move";
import Study_5 from "../components/study/5_move";
import Study_6 from "../components/study/6_move";
import Study_7 from "../components/study/7_move";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: 20,
    color: theme.palette.text.secondary,
  }));
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        style={{ textAlign: "center", width: "80%" }}
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 10 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    mounted && (
      <Grid container sx={{ marginTop: "84px" }}>
        <Grid xs={12}>
          <Item>MOVE BOOK</Item>
        </Grid>
        <Grid xs={12}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              minHeight: "600px",
              textAlign: "center",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                width: "16%",
              }}
            >
              <Tab label="0_소개 및 설치" {...a11yProps(0)} />
              <Tab label="1_모듈 및 스크립트" {...a11yProps(1)} />
              <Tab label="2_정수" {...a11yProps(2)} />
              <Tab label="3_부울" {...a11yProps(3)} />
              <Tab label="4_주소" {...a11yProps(4)} />
              <Tab label="5_벡터" {...a11yProps(5)} />
              <Tab label="6_서명자" {...a11yProps(6)} />

              <Tab label="7_참조" {...a11yProps(7)} />

              <Tab label="8_튜플 및 단위" {...a11yProps(8)} />

              <Tab label="9_지역 변수 및 범위" {...a11yProps(9)} />

              <Tab label="10_평등" {...a11yProps(10)} />

              <Tab label="11_중단 및 어성셜" {...a11yProps(11)} />

              <Tab label="12_조건부" {...a11yProps(12)} />

              <Tab label="13_반복문" {...a11yProps(13)} />

              <Tab label="14_기능" {...a11yProps(14)} />

              <Tab label="15_구조체 리소스" {...a11yProps(15)} />

              <Tab label="16_상수" {...a11yProps(16)} />
              <Tab label="17_제네릭" {...a11yProps(17)} />
              <Tab label="18_능력" {...a11yProps(18)} />
              <Tab label="19_용도 및 별칭" {...a11yProps(19)} />
              <Tab label="20_친구" {...a11yProps(20)} />
              <Tab label="21_패키지" {...a11yProps(21)} />
              <Tab label="22_패키지 업그레이드" {...a11yProps(22)} />
              <Tab label="23_단위 및 테스트" {...a11yProps(23)} />

              <Tab label="24_글로벌 스토리지 구조" {...a11yProps(24)} />

              <Tab label="25_글로벌 스토리지 사업자" {...a11yProps(25)} />

              <Tab label="26_도서관" {...a11yProps(26)} />

              <Tab label="27_코딩 규칙 이동" {...a11yProps(27)} />
              <Tab label="tutorial" {...a11yProps(28)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Study_0 />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Study_1 />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Study_2 />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Study_3 />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Study_4 />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Study_5 />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Study_6 />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Study_7 />
            </TabPanel>
            <TabPanel value={value} index={8}>
              2
            </TabPanel>
            <TabPanel value={value} index={9}>
              2
            </TabPanel>
            <TabPanel value={value} index={10}>
              5
            </TabPanel>
            <TabPanel value={value} index={11}>
              5
            </TabPanel>
            <TabPanel value={value} index={12}>
              5
            </TabPanel>
            <TabPanel value={value} index={13}>
              5
            </TabPanel>
            <TabPanel value={value} index={14}>
              5
            </TabPanel>
            <TabPanel value={value} index={15}>
              5
            </TabPanel>
            <TabPanel value={value} index={16}>
              16장
            </TabPanel>
            <TabPanel value={value} index={17}>
              16장
            </TabPanel>
            <TabPanel value={value} index={18}>
              16장
            </TabPanel>
            <TabPanel value={value} index={19}>
              16장
            </TabPanel>
            <TabPanel value={value} index={20}>
              16장
            </TabPanel>
            <TabPanel value={value} index={21}>
              16장
            </TabPanel>
            <TabPanel value={value} index={22}>
              16장
            </TabPanel>
            <TabPanel value={value} index={23}>
              16장
            </TabPanel>
            <TabPanel value={value} index={24}>
              16장
            </TabPanel>
            <TabPanel value={value} index={25}>
              16장
            </TabPanel>
            <TabPanel value={value} index={26}>
              16장
            </TabPanel>
            <TabPanel value={value} index={27}>
              마지막
            </TabPanel>
            <TabPanel value={value} index={28}>
              튜토리얼
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    )
  );
}
