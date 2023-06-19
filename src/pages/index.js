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
import Study_8 from "../components/study/8_move";
import Study_9 from "../components/study/9_move";
import Study_10 from "../components/study/10_move";
import Study_11 from "../components/study/11_move";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

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
          <Box sx={{ p: 10, color: "white" }}>
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
        <Grid
          xs={12}
          sx={{
            backgroundColor: " #171B1C",

            textAlign: "center",
            fontSize: "300%",
            color: "white",
          }}
        >
          {" "}
          <img src="/img/move.webp" style={{ width: "50px" }} />
          <div>MOVE BOOK</div>
        </Grid>
        <Grid xs={12}>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: " #171B1C",
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
                borderColor: " #171B1C",
                width: "16%",
                color: "white",
              }}
            >
              <Tab
                sx={{ color: "white" }}
                label="0️⃣ 소개 및 설치"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ color: "white" }}
                label="1️⃣ 모듈 및 스크립트"
                {...a11yProps(1)}
              />
              <Tab sx={{ color: "white" }} label="2️⃣ 정수" {...a11yProps(2)} />
              <Tab sx={{ color: "white" }} label="3️⃣ 부울" {...a11yProps(3)} />
              <Tab sx={{ color: "white" }} label="4️⃣ 주소" {...a11yProps(4)} />
              <Tab sx={{ color: "white" }} label="5️⃣ 벡터" {...a11yProps(5)} />
              <Tab
                sx={{ color: "white" }}
                label="6️⃣ 서명자"
                {...a11yProps(6)}
              />

              <Tab sx={{ color: "white" }} label="7️⃣ 참조" {...a11yProps(7)} />

              <Tab
                sx={{ color: "white" }}
                label="8️⃣ 튜플 및 단위"
                {...a11yProps(8)}
              />

              <Tab
                sx={{ color: "white" }}
                label="9️⃣ 지역 변수 및 범위"
                {...a11yProps(9)}
              />

              <Tab sx={{ color: "white" }} label="🔟 평등" {...a11yProps(10)} />

              <Tab
                sx={{ color: "white" }}
                label="1️⃣1️⃣ 중단 및 어성셜"
                {...a11yProps(11)}
              />

              <Tab
                sx={{ color: "white" }}
                label="1️⃣2️⃣ 조건부"
                {...a11yProps(12)}
              />

              <Tab
                sx={{ color: "white" }}
                label="1️⃣3️⃣ 반복문"
                {...a11yProps(13)}
              />

              <Tab
                sx={{ color: "white" }}
                label="1️⃣4️⃣ 기능"
                {...a11yProps(14)}
              />

              <Tab
                sx={{ color: "white" }}
                label="1️⃣5️⃣ 구조체 리소스"
                {...a11yProps(15)}
              />

              <Tab
                sx={{ color: "white" }}
                label="1️⃣6️⃣ 상수"
                {...a11yProps(16)}
              />
              <Tab
                sx={{ color: "white" }}
                label="1️⃣7️⃣ 제네릭"
                {...a11yProps(17)}
              />
              <Tab
                sx={{ color: "white" }}
                label="1️⃣8️⃣ 능력"
                {...a11yProps(18)}
              />
              <Tab
                sx={{ color: "white" }}
                label="1️⃣9️⃣ 용도 및 별칭"
                {...a11yProps(19)}
              />
              <Tab
                sx={{ color: "white" }}
                label="2️⃣0️⃣ 친구"
                {...a11yProps(20)}
              />
              <Tab
                sx={{ color: "white" }}
                label="2️⃣1️⃣ 패키지"
                {...a11yProps(21)}
              />
              <Tab
                sx={{ color: "white" }}
                label="2️⃣2️⃣ 패키지 업그레이드"
                {...a11yProps(22)}
              />
              <Tab
                sx={{ color: "white" }}
                label="2️⃣3️⃣ 단위 및 테스트"
                {...a11yProps(23)}
              />

              <Tab
                sx={{ color: "white" }}
                label="2️⃣4️⃣ 글로벌 스토리지 구조"
                {...a11yProps(24)}
              />

              <Tab
                sx={{ color: "white" }}
                label="2️⃣5️⃣ 글로벌 스토리지 사업자"
                {...a11yProps(25)}
              />

              <Tab
                sx={{ color: "white" }}
                label="2️⃣6️⃣ 도서관"
                {...a11yProps(26)}
              />

              <Tab
                sx={{ color: "white" }}
                label="2️⃣7️⃣ 코딩 규칙 이동"
                {...a11yProps(27)}
              />
              <Tab
                sx={{ color: "white" }}
                label="🤨 tutorial"
                {...a11yProps(28)}
              />
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
              <Study_8 />
            </TabPanel>
            <TabPanel value={value} index={9}>
              <Study_9 />
            </TabPanel>
            <TabPanel value={value} index={10}>
              <Study_10 />
            </TabPanel>
            <TabPanel value={value} index={11}>
              <Study_11 />
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
