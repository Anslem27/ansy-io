import { Box, Text, Link, Flex, VStack } from '@chakra-ui/react';
import { formatDistanceToNow, parseISO } from 'date-fns';
// import Image from 'next/image';
import React from 'react';
import styled from '@emotion/styled';

export const MediumGridItem = ({ article, index }) => {
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
        <Box p={1}>
            <Flex justify="start" align="start" direction="row" w="100%">
                <Box cursor="pointer" padding={3}>
                    <Text fontSize={35} fontWeight={"bold"} textColor={"grey"}>
                        {index < 9 ? `0${index + 1}` : index + 1}
                    </Text>
                </Box>
                <Link href={article.link} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Flex display="flex" flexDirection="column">
                        <Text mt={2} fontSize={20} fontWeight="bold">
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
                </Link>
            </Flex>
        </Box>
    );
};

/* box with slick radial bottom left gradient */
const GradientBox = styled(Box)`
  border-inline-start: 1px solid;
  border-block-end: 1px solid;
  padding: 10px;
  border-image-source: radial-gradient(circle at bottom left, #fbd38d, #aa98a9, transparent 10%);
  border-image-slice: 1;
`;
