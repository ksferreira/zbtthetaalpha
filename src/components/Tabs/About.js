import React from "react";
import { Container, Box, styled, Typography } from "@mui/material";
import { CONSTANTS } from "../../styles/constants";
import zeebsRabbi from "../../images/zeebs_rabbi.jpg";

const PageContainer = styled("div")({
  alignContent: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledImage = styled("img")({
  objectFit: "scale-down",
  height: "360px",
});

const Row = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const Column = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: CONSTANTS.ZBT_BACKGROUND,
        padding: "15px",
      }}
    >
      <PageContainer>
        {/* Top Banner */}
        <Box
          sx={{
            height: "50px",
            backgroundColor: CONSTANTS.ZBT_GOLD,
            transform: "translate(0px, 10px)",
            width: "100%",
            boxShadow: "rgb(0, 0, 0, 0.5) 0px 5px 10px",
            verticalAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              color: CONSTANTS.ZBT_TEXT_GRAY,
              borderBottom: `solid #${CONSTANTS.ZBT_GOLD_SECONDARY} 2px`,
            }}
          >
            Our Mission
          </Typography>
        </Box>

        {/* Main Box */}
        <Box
          sx={{
            backgroundColor: CONSTANTS.ZBT_DARK_NAVY,
            height: "auto",
            width: "98%",
            alignSelf: "center",
            marginTop: "10px",
            textAlign: "left",
            padding: "15px",
            boxShadow: "rgb(0, 0, 0, 0.5) 0px 5px 10px",
          }}
        >
          <Row>
            <StyledImage
              src={zeebsRabbi}
              alt="The Brothers during Shabbat with Rabbi Raffi."
            />
            <Column
              sx={{
                width: "100%",
                textAlign: "center",
                marginLeft: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  borderBottom: "solid white 1px",
                }}
              >
                Powerhouse of Excellence
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginTop: "15px",
                  textAlign: "left",
                }}
              >
                Since our charter in 1998, the Theta Alpha chapter of Zeta Beta
                Tau (ZBT) has been committted to fostering and developing the
                brotherhood in the tenets of our credo in to prepare brothers
                for roles involving service and leadership. Founded in 1898 as
                the world's first Jewish fraternity, ZBT is committed to
                preserving and stengthening ties within local Jewish communities.
                Since 1954, ZBT has adopted a non-sectarian policy in value of the diversity
                of is brothers. 
              </Typography>
            </Column>
          </Row>
        </Box>
      </PageContainer>
    </Container>
  );
};

export default About;
