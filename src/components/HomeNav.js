import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const HomeNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <Box sx={{
      height: '100px',
    }}>

    </Box>
  );
};

export default HomeNav;
