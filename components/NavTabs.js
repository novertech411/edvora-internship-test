import {
  background,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

function NavTabs() {
  return (
    <Tabs px="43px" variant={"unstyled"}>
      <TabList fontWeight={"400"} pt="29px" color={" #D0CBCB"}>
        <Tab
          fontSize={"18px"}
          px="0px"
          mr="44px"
          _selected={{
            color: "brand.white",
            borderBottom: "2px solid #FFFFFF",
            fontWeight: "700",
          }}
          _focus={{ border: "none", outline: "none" }}
        >
          Nearest rides
        </Tab>
        <Tab
          fontSize={"18px"}
          fontWeight={"400"}
          px="0px"
          mr="44px"
          _selected={{
            color: "brand.white",
            borderBottom: "2px solid #FFFFFF",
            fontWeight: "700",
          }}
          _focus={{ border: "none", outline: "none" }}
        >
          Upcoming rides (4)
        </Tab>
        <Tab
          fontSize={"18px"}
          fontWeight={"400"}
          px="0px"
          mr="44px"
          _selected={{
            color: "brand.white",
            borderBottom: "2px solid #FFFFFF",
            fontWeight: "700",
          }}
          _focus={{ border: "none", outline: "none" }}
        >
          Past rides (2)
        </Tab>
        <Menu>
          {" "}
          <MenuButton
            pos={"absolute"}
            right="0"
            bg={"brand.bg"}
            mr="47px"
            as={Button}
            leftIcon={<BsFilterLeft size="25px" /> }
            _focus={{ border: "none", outline: "none" }}
            _active={{ bg: "black" }}
            fontSize="18px"
            _selected={{ bg: "brand.bg" }}
            _hover={{ bg: "brand.bg" }}
          >
            Filter
          </MenuButton>
          <MenuList
            bg="#131313"
            ali={"center"}
            px="30px"
            pb={"12px"}
            border={"none"}
          >
            <Text
              pb="12px"
              pl="12px"
              borderBottom={"2px solid #FFFFFF"}
              fontSize={"20px"}
            >
              Filters
            </Text>
            <Select
              placeholder="State"
              bg={"brand.bg"}
              rounded={"4.69px"}
              border={"none"}
              mt={"28px"}
              _focus={{ border: "none", outline: "none" }}
              color="white"
               icon={<IoMdArrowDropdown />}
            ></Select>
            <Select
              placeholder="city"
              bg={"brand.bg"}
              rounded={"4.69px"}
              border={"none"}
              mt={"12.5px"}
              mb={"12.5px"}
              color="white"
              _focus={{ border: "none", outline: "none" }}
              icon={<IoMdArrowDropdown />}
            ></Select>
          </MenuList>
        </Menu>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default NavTabs;
