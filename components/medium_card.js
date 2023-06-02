import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from "next/image"
import React from 'react'
/* const MediumCard = ({ article }) => {
    return (
        <Card className="mb-3" style={{ width: "20%" }}>
            <Image src={article.thumbnail} alt={article.title} fluid />
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="text-muted">
                    {new Date(article.pubDate).toLocaleDateString()}
                </Card.Subtitle>
                <Link to={article.link} variant="primary">
                    Read More
                </Link>
            </Card.Body>
        </Card>
    );
};

export default MediumCard; */

function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    if (date.toDateString() === today.toDateString()) {
        return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    } else if (date > twoDaysAgo) {
        const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
        return `${diffInDays} days ago`;
    } else {
        return date.toLocaleDateString();
    }
}


export const MediumGridItem = ({ article }) => {


    const myLoader = ({ src }) => {
        return `${article.thumbnail}`;
    }
    return (
        <Box w="100%" textAlign="center">
            <NextLink href={article.link} passHref scroll={false} legacyBehavior>
                <LinkBox cursor="pointer">
                    <Box padding={3}>
                        <Image
                            loader={myLoader}
                            src={`${article.thumbnail}`}
                            alt={article.title}
                            className="grid-item-thumbnail"
                            width={500} height={300}

                        />
                    </Box>
                    <LinkOverlay href={article.link} passHref>
                        <Text mt={2} fontSize={18}>
                            {article.title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>   Published :  {new Date(article.pubDate).toLocaleDateString()}</Text>

                </LinkBox>
            </NextLink>
        </Box>
    );
}



