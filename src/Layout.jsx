import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillPhone } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Layout({children}) {
  return (
    <>
      <Box w="full" display={"flex"} justifyContent={"center"}>
        <VStack w={"sm"}>
          {/* 해더 */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w="inherit"
            h="80px"
            bg="black"
            rounded={10}
            position="fixed"
            top="0"
            zIndex={123}
          >
            <AiFillApple size={32} color="white" />
          </Box>
          {/* 메인 */}
          {children}
          {/* 푸터 */}
          <Box w="inherit" h="80px" position={"fixed"} bottom={0}>
            <HStack
              h="inherit"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              
              <VStack
                w="full"
                color="white"
                bg="black"
                borderRadius={"10px"}
                paddingTop={"5px"}
              >
                <Link to='/'>
                  <AiFillHome />
                  <Text>홈</Text>
                </Link>
              </VStack>
              <VStack
                w="full"
                color="white"
                bg="black"
                borderRadius={"10px"}
                paddingTop={"5px"}
              >
                <Link to='/profile'>
                  <ImProfile />
                  <Text>프로필</Text>
                </Link>
              </VStack>
              <VStack
                w="full"
                color="white"
                bg="black"
                borderRadius={"10px"}
                paddingTop={"5px"}
              >
                <Link to='/contact'>
                  <AiFillPhone />
                  <Text>연락처</Text>
                </Link>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}


