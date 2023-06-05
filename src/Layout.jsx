import { Box, HStack, Text, VStack  } from "@chakra-ui/react";
import {
  AiFillApple,
  AiFillProfile,
  AiFillContacts,
  AiFillHome,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link, useLocation, useNavigate} from "react-router-dom";

const GNB = [
  { title: "홈", href: "/", icon: AiFillHome },
  { title: "프로필", href: "/profile", icon: AiFillProfile },
  { title: "연락처", href: "/contact", icon: AiFillContacts },
];

export default function Layout({ children, canGoBack, title }) {
  const location = useLocation();
  const navigate= useNavigate();
  console.log(location.pathname);

  const handleclick = ()=>{
    // console.log('실행확인')
    navigate(-1)
  }

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
            bg="blackAlpha.800"            
            position="fixed"
            top="0"
            zIndex={123}
          >
            
            {canGoBack ? (
              <>              
              <Box onClick={handleclick} position={"absolute"} left="20px" cursor={"pointer"}>
              <AiOutlineArrowLeft color="white" size="24px" />
            </Box><Text color="white">{title}</Text></>
            ) : (
              <AiFillApple size={32} color="white" />
            )}
          </Box>
          {/* 메인 */}
          {children}
          {/* 푸터 */}
          {
            canGoBack ? null : (<Box
              w="inherit"
              h="80px"
              bg={"blackAlpha.800"}
              position={"fixed"}
              bottom={0}
            >
              <HStack
                h="inherit"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {GNB.map((item) => (
                  <Box w="full">
                    <Link to={item.href}>
                      <VStack w="full">
                        <item.icon
                          color={
                            location.pathname === item.href ? "red" : "white"
                          }
                          size="24"
                        />
                        <Text
                          color={
                            location.pathname === item.href ? "red" : "white"
                          }
                        >
                          {item.title}
                        </Text>
                      </VStack>
                    </Link>
                  </Box>
                ))}
              </HStack>
            </Box>)
          }
          
        </VStack>
      </Box>
    </>
  );
}
