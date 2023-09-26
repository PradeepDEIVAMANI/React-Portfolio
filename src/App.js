import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Social from "./Components/Social";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Portfolio
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound
          onClick={() =>
            window.open("https://www.linkedin.com/in/pradeep-deivamani-86a01417b/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound
          onClick={() =>
            window.open("https://www.instagram.com/mr._.pradeep._.31/")
          }
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound
          onClick={() => window.open("https://github.com/PradeepDEIVAMANI")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
};

export default App;
