import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack
        as="form"        
        py="100px"
        bg="gray.400"
        px="10px"
        minH={"100vh"}
        w="full"
        spacing={8}
      >
        <VStack spacing={6}>
          <Avatar
            src="https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            size="xl"
            bg="white"            
            name="Nam"
            color="black"
          />
          <VStack spacing={0}>
            <Text fontSize={20} fontWeight={600}>
              남지완
            </Text>
            <Text fontSize={14}>풀스택 개발자를 꿈꾸는 조현일</Text>
          </VStack>
          <HStack w="80%" justifyContent={"center"} spacing={4}>
            <Box
              border="1px"
              rounded="xl"
              px="20px"
              py="1"
              w="130px"
              textAlign={"center"}
              color="yellow.300"
            >
              Contact
            </Box>
            <Box
              border="1px"
              rounded="xl"
              px="20px"
              py="1"
              w="130px"
              textAlign={"center"}
              color="red.400"
            >
              Follow
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
