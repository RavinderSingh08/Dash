import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const index = () => {
  return (
    <Box m="5px 20px 0">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default index;
