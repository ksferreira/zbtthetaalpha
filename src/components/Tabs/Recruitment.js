import React from "react";
import { Container, Typography, styled, Box, Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { CONSTANTS } from "../../styles/constants";
import { RUSH_IMAGES } from "../images";

const PageContainer = styled("div")({
  alignContent: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledImage = styled("img")({
  objectFit: "scale-down",
  width: "100%",
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


const Recruitment = () => {
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
            Interested in Joining?
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
            <Column
              sx={{
                padding: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  borderBottom: "solid white 1px",
                  textAlign: "center",
                }}
              >
                Events
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  textAlign: "left",
                }}
              >
                Every year we hold events filled with opportunities to get to
                know the brothers of Zeta Beta Tau and what the fraternity
                stands for. Over 140,000 strong nationwide, we pride ourselves
                in creating a tight community and working together and a
                brotherhood to uphold the values of our credo.
              </Typography>
            </Column>
          </Row>
          <Row>
            <ImageList
              sx={{
                width: "100%",
                height: "512px",
              }}
              veriant="quilted"
              cols={4}
              rowHeight={100}
            >
              {RUSH_IMAGES.map((item) => {
                console.log(`KEY:`);
                return (
                  <ImageListItem
                    key={item.src}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                    alt={item.title}
                    loading="lazy"
                  >
                    <StyledImage 
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"/>
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Row>
        </Box>
        
      </PageContainer>
    </Container>
  );
};

export default Recruitment;
