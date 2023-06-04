import { Box, Text, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from "next/image";
import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import styled from "@emotion/styled";


export const MediumGridItem = ({ article }) => {
    const myLoader = ({ src }) => {
        return `${article.thumbnail}`;
    };

    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        const distance = formatDistanceToNow(date, { addSuffix: true });
        return distance;
    };

    const formattedDate = formatDate(article.pubDate);
    const colors = ['blue.500', 'green.500', 'purple.500', 'yellow.500'];

    return (
        <Box p={5}>
            <GradientBox>
                <Flex justify="start" align="start" direction="row" p={3} w="100%">
                    <NextLink href={article.link} passHref scroll={false} legacyBehavior>
                        <LinkBox cursor="pointer">
                            {/*  <Box padding={3}>
                        <Image
                            loader={myLoader}
                            src={`${article.thumbnail}`}
                            alt={article.title}
                            className="grid-item-thumbnail"
                            width={150}
                            height={150}
                        />
                    </Box> */}
                        </LinkBox>
                    </NextLink>
                    <LinkOverlay href={article.link} passHref>
                        <Flex display="flex" flexDirection="column">
                            <Text mt={2} fontSize={15} pb={2} fontWeight="bold">
                                {article.title}
                            </Text>
                            <Text fontSize={10}>{formattedDate}</Text>
                            <Flex wrap="wrap" mt={2}>
                                {article.categories.map((category, index) => (
                                    <Text
                                        key={category}
                                        color={colors[index % colors.length]}
                                        mr={2}
                                        fontSize={10}
                                        textTransform="capitalize"
                                    >
                                        {category}
                                    </Text>
                                ))}
                            </Flex>
                        </Flex>
                    </LinkOverlay>
                </Flex>
            </GradientBox>
        </Box>
    );
};

/* box with slick radial bottom left gradient */
const GradientBox = styled(Box)`
 border-inline-start: 1px solid;
 border-block-end: 1px solid;
 padding:10px;
 border-image-source:radial-gradient(circle at bottom left,#fbd38d,#aa98a9,transparent 10%);
 border-image-slice:1;

`;