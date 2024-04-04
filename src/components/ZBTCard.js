import React from 'react'
import { styled, Typography } from "@mui/material";

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


const ZBTCard = (props) => {
  return (
    <PageContainer>
      
    </PageContainer>
  )
}

export default ZBTCard