import { Box, Tabs } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import NavTabs from "../components/NavTabs";

function index() {
  return (
    <Box bg={"brand.bg"} height="100vh">
      <NavBar />
      <NavTabs />
    </Box>
  );
}

export default index;
