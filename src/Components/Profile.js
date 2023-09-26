import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import { DiReact, DiJava, DiMysql, DiPython } from "react-icons/di";
import { Icon } from '@chakra-ui/icon';


const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          Masters in
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Software Engineering and Digital Transformation
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
        "I am a React web developer with expertise in web app development."
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiJava} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Java
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiMysql} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              MySql
            </Text>
          </Flex>
          
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;