import { Box, Text, VStack, Image } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail() {
  return (
    <>
      <Layout canGoBack title="디테일 페이지">
        <VStack py="90px" bg="gray.800" w="full" spacing={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          </Box>
          <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
            <Text color="white" fontWeight={700} fontSize={20}>
              대구 스파벨리
            </Text>
            <Text color="white" fontWeight={100}>
              대구 최고의 여름 테마파크
            </Text>
          </VStack>
          <Box w="95%" h="2px" bg="gray.700" />
          <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
            <Text color="white" fontWeight={500}>
              운영시간
            </Text>
            <Text color="white" fontWeight={100} fontSize={14}>
              10:00 ~ 17:00
            </Text>
          </VStack>
          <Box w="95%" h="2px" bg="gray.700" />
          <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
            <Text color="white" fontWeight={500}>
              입장인원
            </Text>
            <Text color="white" fontWeight={100} fontSize={14}>
              120명
            </Text>
          </VStack>
          <Box w="95%" h="2px" bg="gray.700" />
          <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
            <Text color="white" fontWeight={500}>
              이용요금
            </Text>
            <Text color="white" fontWeight={100} fontSize={14}>
              20,000원
            </Text>
          </VStack>
          <Box w="95%" h="2px" bg="gray.700" />
        {/* 카카오지도 */}
        <KakaoMap />
        </VStack>
      </Layout>
    </>
  );
}
