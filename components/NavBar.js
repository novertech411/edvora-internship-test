import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

function NavBar() {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      width={" 100%"}
      height={"84px"}
      bg={"brand.black"}
      color={"brand.white"}
      px="43px"
      py="21px"
    >
      <Text fontSize={"36px"} fontWeight={"700"} >Edvora</Text>
      <Box display="flex"    alignItems={"center"}>
        <Text fontSize={"20px"} fontWeight={"700"}  mr="20px"> Dhruv Singh</Text>
        <Avatar name="Dan Abrahmov" src="/Rectangle.png" />
      </Box>
    </Box>
  );
}

export default NavBar;
