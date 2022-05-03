import { Box, Image, Img, Text } from "@chakra-ui/react";
import React from "react";

function RideCard() {
  return (
    <Box width={"100%"} height={"100%"} px="43px " >
      <Box
        pr="29px"
        pt="22px"
        pb="28px"
        pl="20px"
        bg={"brand.black"}
        rounded={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <Image
            src="/image 1.png"
            width="296px"
            height="148px "
            rounded={"5px"}
          />

          <Box ml="44px" color={"white"}>
            <Text mb={"8px"}><Text as="span" color={"#D0CBCB"}>Ride id </Text>: 200</Text>
            <Text   mb={"8px"}><Text as="span" color={"#D0CBCB"}>Origin Station</Text> : 20</Text>
            <Text   mb={"8px"}> <Text as="span" color={"#D0CBCB"}>station_path</Text> : [20,39,40,42,54,63]</Text>
            <Text  mb={"8px"}><Text as="span" color={"#D0CBCB"}>Date</Text> : 15th Feb 2022 16:33</Text>
            <Text  mb={"8px"}><Text as="span"  color={"#D0CBCB"}>Distance</Text> : 0</Text>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Text
            py="4px"
            px="10px"
            fontSize={"12px"}
            fontWeight={"400"}
            color="white"
            bg={"black"}
            rounded={"10px"}
            width="80px"
            height="23px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mr={"24px"}
          >
            City Name
          </Text>
          <Text
            py="4px"
            px="10px"
            fontSize={"12px"}
            fontWeight={"400"}
            color="white"
            bg={"black"}
            rounded={"10px"}
            width="80px"
            height="23px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            City Name
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default RideCard;
