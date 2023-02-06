import React from "react";
// Chakra imports
import {
    Flex,
    Icon,
    Text,
    useColorModeValue,
    Img,
} from "@chakra-ui/react";
import { IoLogoTwitter } from 'react-icons/io5';

function Teams() {
    let boxBg = useColorModeValue("white !important", "#1DA1F2 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
    let iconColor = useColorModeValue("#1DA1F2", "white");
    return (
        <Flex
            borderRadius='10px'
            bg={boxBg}
            p='20px'
            h='280px'
            w={{ base: "300px", md: "300px" }}
            alignItems='center'
            direction='column'>
            <Flex w='100%' mb='18px'>
                <Flex
                    w='38px'
                    h='38px'
                    align='center'
                    justify='center'
                    borderRadius='50%'
                    me='12px'
                    bg={iconBox}>
                    <Icon w='24px' h='24px' as={IoLogoTwitter} color={iconColor} />
                </Flex>
                <Text
                    my='auto'
                    fontWeight='600'
                    color={mainText}
                    textAlign='center'
                    fontSize='xl'
                    me='auto'>
                    Twitter
                </Text>

            </Flex>
            <Img
                src="https://raw.githubusercontent.com/Anslem27/ansy-io/master/public/images/twt.png"
                maxW='100%'
                // height="120px"
                borderRadius='10px'
                mb='5px'
            />
            <Text
                fontWeight='600'
                color={mainText}
                textAlign='start'
                fontSize='l'
                w='100%'>
                @anslemAnsy
            </Text>
        </Flex>
    );
}

export default Teams;