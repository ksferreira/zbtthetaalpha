import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Container,
  styled,
} from "@mui/material";
import { CONSTANTS } from "../styles/constants";
import HistoryCard from "./HistoryCard";
import EBoardCard from "./EBoardCard/EBoardCard2";
import Carousel from "react-material-ui-carousel";
import { BANNER_IMAGES } from "./images";
import HomeNav from "./HomeNav";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import About from "./Tabs/About";
import Fundraiser from "./Tabs/Fundraiser";
import Recruitment from "./Tabs/Recruitment";
import Soon from "./Tabs/Soon";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomTabPanel = (props) => {
  const { children, value, index, Component, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: CONSTANTS.ZBT_GOLD,
  })
);

const Item = (props) => {
  const DivBox = styled("div")({
    height: "300px",
    filter: "blur(8px)",
    backgroundImage: `url('${props.src}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  const Img = styled("img")({
    height: "100%",
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // zIndex: '2',
  });

  const Card = styled("div")({
    backgroundColor: CONSTANTS.ZBT_DARK_NAVY,
    height: "100%",
    width: "300px",
    padding: "15px",
  });

  const ImgCard = styled("div")({
    height: "100%",
    zIndex: "2",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  return (
    <React.Fragment>
      <DivBox />

      <ImgCard>
        <Img src={props.src} />
        {/* <Card> */}
          {/* <Typography
            sx={{
              borderColor: CONSTANTS.ZBT_GOLD,
              borderBottom: `thick double ${CONSTANTS.ZBT_GOLD}`,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            {props.description}
          </Typography> */}
        {/* </Card> */}
      </ImgCard>
    </React.Fragment>
  );
};

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (e, val) => {
    setTabIndex(val);
  };

  return (
    <React.Fragment>
      <Container>
        <Box
          sx={{
            bgcolor: CONSTANTS.ZBT_DARK_NAVY,

            width: "100%",
            display: "grid",
            textAlign: "center",
            m: 0,
            gridTemplateRows: "repeat(3, minmax(mincontent, maxcontent))",
            gap: 0,
          }}
        >
          <Carousel>
            {BANNER_IMAGES.map((item, i) => {
              return (
                <Item
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </Carousel>

          {/* nav  */}

          <Box
            sx={{
              height: "50px",
              width: "100%",
            }}
          >
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              aria-label="Test"
              centered
              textColor="secondary"
              // indicatorColor=""
            >
              <StyledTab label="About Us" {...a11yProps(0)} />
              <StyledTab label="Recruitment" {...a11yProps(1)} />
              <StyledTab label="Philanthropy" {...a11yProps(2)} />
              {/* <StyledTab label="Fundraiser" {...a11yProps(3)} /> */}
              {/* <StyledTab label="Newsletter" {...a11yProps(4)} /> */}
            </Tabs>
          </Box>

          {/* Nav Pages */}

          <CustomTabPanel value={tabIndex} index={0}>
            <About />
          </CustomTabPanel>

          <CustomTabPanel value={tabIndex} index={1}>
            <Recruitment />
          </CustomTabPanel>

          <CustomTabPanel value={tabIndex} index={2}>
            <Soon />
          </CustomTabPanel>

          <CustomTabPanel value={tabIndex} index={3}>
            <Fundraiser />
          </CustomTabPanel>

          <CustomTabPanel value={tabIndex} index={4}>
            <Soon />
          </CustomTabPanel>

          <Box
            sx={{
              bgcolor: CONSTANTS.ZBT_BACKGROUND,
            }}
          >
            {/* <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <HistoryCard />
              <EBoardCard />
            </Container> */}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
