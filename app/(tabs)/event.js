import React, { useState, TouchableOpacity } from "react-native";
import { Heading, FlexBox, Box, Text, Image, Button, ButtonText, VStack, HStack} from "@gluestack-ui/themed";
import { Header } from "../../components";
import datas from "../../datas";
import { Link, router } from "expo-router";


const Home = () => {
  
  const renderitem = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Box flex={1} mr={"$4"}>
              <Image
                source={{ uri: item.image }}
                w="$full"
                h="$full"
                alt="Image Data"
                role="img"
              />
            </Box>
            <Box flex={1.8}>
              <Text fontSize={"$sm"}>{item.date}</Text>
              <Heading lineHeight={"$md"} fontSize={"$md"}>
                {item.title}
              </Heading>
            </Box>
        </TouchableOpacity>
    );
  };

  const validateUser = () => {
    router.replace('/exploreev')
  }
  return (
    <>
      <Header title={"Events"} />

      <Box 
      p={"$12"} 
      flexDirection="col"
      justifyContent="center"
      >
      <Box
                bg={"#DADADA"}
                py={"$4"}
                px={"$3"}
                rounded={"$full"}
                // height="132px"
                // width={375}
                maxWidth="100%"
        >
          <HStack justifyContent="space-between">
                    
            <Box 
            bg={"$white"}
            px={"$6"}
            py={"$3"}
            rounded={"$full"}>
                        
              <Text color={"#B80000"}>UPCOMING</Text>       
                        
            </Box>
            <Box  
            bg={"#DADADA"}
            px={"$6"}
            py={"$3"}
            rounded={"$full"}>
                        
              <Text color={"$secondary600"} >PAST EVENT</Text>       
                        
            </Box>
                    
                    
          </HStack>
        </Box>
     
        
        <Image
          source={require("../../assets/kalender.png")}
          h={300}
          w={"$full"}
          mt={50}
          mb={30}
          alt="Logo"
          role="img"
        />
      
          <Button
            size="xl"
            variant="solid"
            bg="#B80000"
            mx={20}
            mt={20}
            isDisabled={false}
            isFocusVisible={false}
            onPress={validateUser}
            sx={{ ":active": { bg: "$error800" } }}
          >
            <ButtonText>Explore Events</ButtonText>
          </Button>
       
      </Box>
    </>
    
  );
};

export default Home;