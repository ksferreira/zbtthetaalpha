import React from "react";
import { SNAPRAISE_IMAGE } from "../images";
import { Container, Typography, styled, Box } from "@mui/material";
import { CONSTANTS } from "../../styles/constants";

const PageContainer = styled("div")({
  alignContent: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledImage = styled("img")({
    objectFit: "scale-down",
    width: "40%",
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

const Fundraiser = () => {
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
            Support our Fundraiser!
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
                <Column sx={{
                        padding: "15px",
                }}>
                    <Typography sx={{
                        fontSize: "32px",
                        borderBottom: "solid white 1px",
                        textAlign: "center"
                    }}>
                        A Partnership!
                    </Typography>
                    <Typography sx={{
                        fontSize: "24px",
                        textAlign: "left",
                    }}>
                        The brothers of Zeta Beta Tau (ZBT) invite you to join us on a journey of impact, brotherhood, and positive influence at the University of Massachusetts Amherst.
                        With your help, we aim to elevate our philanthropic eforts, expand our brotherhood activities, and continue being a beacon of positivity on campus. 
                        Your support is more than a donation, it's a partnership in shaping the future of ZBT at UMass Amherst, as well as an investment into our futures.
                    </Typography>
                </Column>
                <StyledImage 
                    src={SNAPRAISE_IMAGE}
                    alt="Zeta Beta Tau on Snap! Raise."
                />
            </Row>
        </Box>
      </PageContainer>
    </Container>
  );
};

export default Fundraiser;
