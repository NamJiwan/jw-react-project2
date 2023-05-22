import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";


const dataIphone = [
  {
    text: "6월이벤트",
    image:
      "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "7월이벤트",
    image:
      "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    text: "8월이벤트",
    image:
      "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Recent = [
    {
      text: "아이폰",
      images:
        "https://images.pexels.com/photos/1647116/pexels-photo-1647116.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      text: "아이폰14",
      images:
        "https://images.pexels.com/photos/14168781/pexels-photo-14168781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      text: "맥북 프로",
      images:
        "https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      text: "아이폰",
      images:
        "https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  
export default function Home(){
    return(
        <>
        <Layout>
            <VStack w="inherit" py="90px" px={4} alignItems={"flex-start"}>
            {/* 최신상품 컨테이너 */}
            <VStack w="full" alignItems={"flex-start"}>
              <Text fontWeight={600} fontSize={"24px"}>
                최신상품
              </Text>
              <Grid gridTemplateColumns={"repeat(2,1fr)"} w="full" gridGap={2}>
                {Recent.map((item, i) => (
                  <GridItem
                    key={i}
                    h="200px"
                    border={"1px"}
                    rounded={"md"}
                    borderColor={"gray.300"}
                    bgImage={`url(${item.images})`}
                    bgSize={"cover"}
                    bgPosition={"center center"}
                    position={"relative"}
                    overflow={"hidden"}
                    // bgGradient="linear(to-b, rgba(0,0,0,0.9),rgba(0,0,0,0.3))"
                  >
                    <Box
                      position={"absolute"}
                      top={0}
                      left={0}
                      w="full"
                      h="full"
                      bg="rgba(0,0,0,0.6)"
                    >
                      <Text
                        color="white"
                        position={"absolute"}
                        w="full"
                        bottom={0}
                        align={"center"}
                        py={4}
                        fontWeight={600}
                      >
                        {item.text}
                      </Text>
                    </Box>
                  </GridItem>
                ))}

                {/* <GridItem
                  h="200px"
                  border={"1px"}
                  rounded={"md"}
                  borderColor={"gray.300"}
                  backgroundImage={
                    "https://images.pexels.com/photos/14168781/pexels-photo-14168781.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  bgSize={"cover"}
                  bgPosition={"center center"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bg="rgba(0,0,0,0.6)"
                  >
                    <Text
                      color="white"
                      position={"absolute"}
                      w="full"
                      bottom={0}
                      align={"center"}
                      py={4}
                      fontWeight={600}
                    >
                      아이폰14
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  h="200px"
                  border={"1px"}
                  rounded={"md"}
                  borderColor={"gray.300"}
                  backgroundImage={
                    "https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  bgSize={"cover"}
                  bgPosition={"center center"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bg="rgba(0,0,0,0.6)"
                  >
                    <Text
                      color="white"
                      position={"absolute"}
                      w="full"
                      bottom={0}
                      align={"center"}
                      py={4}
                      fontWeight={600}
                    >
                      맥북 프로
                    </Text>
                  </Box>
                </GridItem>
                <GridItem
                  h="200px"
                  border={"1px"}
                  rounded={"md"}
                  borderColor={"gray.300"}
                  backgroundImage={
                    "https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  bgSize={"cover"}
                  bgPosition={"center center"}
                  position={"relative"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bg="rgba(0,0,0,0.6)"
                  >
                    <Text
                      color="white"
                      position={"absolute"}
                      w="full"
                      bottom={0}
                      align={"center"}
                      py={4}
                      fontWeight={600}
                    >
                      아이폰
                    </Text>
                  </Box>
                </GridItem> */}
              </Grid>
            </VStack>
            {/* 이벤트 컨테이너 */}
            <VStack w="full" alignItems={"flex-start"}>
              <Text fontWeight={600} fontSize={24}>
                이벤트
              </Text>
              <Grid w="full" gridGap={2}>
                {dataIphone.map((item, i) => (
                  <GridItem
                    key={i}
                    w="full"
                    h="120px"
                    rounded={"lg"}
                    bgImage={`url(${item.image})`}
                    bgSize="cover"
                    bgPosition={"center center"}
                    position={"relative"}
                  >
                    <Box
                      position={"absolute"}
                      top={0}
                      left={0}
                      w="full"
                      h="full"
                      bgGradient={
                        "linear(to-b, rgba(255,255,255,0.1),rgba(255,255,255,0.8))"
                      }
                    >
                      <Text
                        position={"absolute"}
                        align={"center"}
                        top="50%"
                        left="50%"
                        transform={"translate(-50%,-50% )"}
                        fontWeight={900}
                        color={"yellow.600"}
                        fontSize={18}
                      >
                        {item.text} 30% 할인
                      </Text>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </VStack>
            </VStack>
        </Layout>
        </>
    )
}