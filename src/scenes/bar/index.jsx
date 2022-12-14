import React from "react";
import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="5px 20px 0">
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
