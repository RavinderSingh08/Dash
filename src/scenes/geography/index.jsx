import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="5px 20px 0">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="8px"
        // boxShadow={`0px 0px 10px ${colors.grey[700]}`}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
