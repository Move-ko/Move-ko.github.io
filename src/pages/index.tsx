import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data_v = [];

  for (let i = 1; i <= 29; i++) {
    data_v.push({ id: i });
  }

  return (
    mounted && (
      <Grid container sx={{ marginTop: "84px" }} spacing={3}>
        {data_v.map(item => (
          <Grid xs={2}>
            <Card
              onClick={e => {
                router.push(`/quest/${item.id}`);
              }}
            >
              <img src={"/img/move.webp"} style={{ width: "100%" }} />
              <CardContent>item:{item.id}</CardContent>
            </Card>
          </Grid>
        ))}

        {/* <Grid xs={12}>
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
                label="0️_소개 및 설치"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ color: "white" }}
                label="1️_모듈 및 스크립트"
                {...a11yProps(1)}
              />
              <Tab sx={{ color: "white" }} label="2️_정수" {...a11yProps(2)} />
              <Tab sx={{ color: "white" }} label="3️_부울" {...a11yProps(3)} />
              <Tab sx={{ color: "white" }} label="4️_주소" {...a11yProps(4)} />
              <Tab sx={{ color: "white" }} label="5️_벡터" {...a11yProps(5)} />
              <Tab sx={{ color: "white" }} label="6_서명자" {...a11yProps(6)} />

              <Tab sx={{ color: "white" }} label="7️_참조" {...a11yProps(7)} />

              <Tab
                sx={{ color: "white" }}
                label="8️_튜플 및 단위"
                {...a11yProps(8)}
              />

              <Tab
                sx={{ color: "white" }}
                label="9️_지역 변수 및 범위"
                {...a11yProps(9)}
              />

              <Tab sx={{ color: "white" }} label="10_평등" {...a11yProps(10)} />

              <Tab
                sx={{ color: "white" }}
                label="1️1_중단 및 어성셜"
                {...a11yProps(11)}
              />

              <Tab
                sx={{ color: "white" }}
                label="12_조건부"
                {...a11yProps(12)}
              />

              <Tab
                sx={{ color: "white" }}
                label="13_반복문"
                {...a11yProps(13)}
              />

              <Tab sx={{ color: "white" }} label="14_기능" {...a11yProps(14)} />

              <Tab
                sx={{ color: "white" }}
                label="15_구조체 리소스"
                {...a11yProps(15)}
              />

              <Tab sx={{ color: "white" }} label="16_상수" {...a11yProps(16)} />
              <Tab
                sx={{ color: "white" }}
                label="17️_제네릭"
                {...a11yProps(17)}
              />
              <Tab
                sx={{ color: "white" }}
                label="18️_능력"
                {...a11yProps(18)}
              />
              <Tab
                sx={{ color: "white" }}
                label="19️_용도 및 별칭"
                {...a11yProps(19)}
              />
              <Tab
                sx={{ color: "white" }}
                label="20️_친구"
                {...a11yProps(20)}
              />
              <Tab
                sx={{ color: "white" }}
                label="21_패키지"
                {...a11yProps(21)}
              />
              <Tab
                sx={{ color: "white" }}
                label="22_패키지 업그레이드"
                {...a11yProps(22)}
              />
              <Tab
                sx={{ color: "white" }}
                label="23️_단위 및 테스트"
                {...a11yProps(23)}
              />

              <Tab
                sx={{ color: "white" }}
                label="24️_글로벌 스토리지 구조"
                {...a11yProps(24)}
              />

              <Tab
                sx={{ color: "white" }}
                label="25_글로벌 스토리지 사업자"
                {...a11yProps(25)}
              />

              <Tab
                sx={{ color: "white" }}
                label="26_도서관"
                {...a11yProps(26)}
              />

              <Tab
                sx={{ color: "white" }}
                label="27️_코딩 규칙 이동"
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
              <Study_12 />
            </TabPanel>
            <TabPanel value={value} index={13}>
              <Study_13 />
            </TabPanel>
            <TabPanel value={value} index={14}>
              <Study_14 />
            </TabPanel>
            <TabPanel value={value} index={15}>
              <Study_15 />
            </TabPanel>
            <TabPanel value={value} index={16}>
              <Study_16 />
            </TabPanel>
            <TabPanel value={value} index={17}>
              <Study_17 />
            </TabPanel>
            <TabPanel value={value} index={18}>
              <Study_18 />
            </TabPanel>
            <TabPanel value={value} index={19}>
              <Study_19 />
            </TabPanel>
            <TabPanel value={value} index={20}>
              <Study_20 />
            </TabPanel>
            <TabPanel value={value} index={21}>
              <Study_21 />
            </TabPanel>
            <TabPanel value={value} index={22}>
              <Study_22 />
            </TabPanel>
            <TabPanel value={value} index={23}>
              <Study_23 />
            </TabPanel>
            <TabPanel value={value} index={24}>
              <Study_24 />
            </TabPanel>
            <TabPanel value={value} index={25}>
              <Study_25 />
            </TabPanel>
            <TabPanel value={value} index={26}>
              <Study_26 />
            </TabPanel>
            <TabPanel value={value} index={27}>
              <Study_27 />
            </TabPanel>
            <TabPanel value={value} index={28}>
              튜토리얼
            </TabPanel>
          </Box>
        </Grid> */}
      </Grid>
    )
  );
}
