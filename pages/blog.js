import { useState, useEffect } from 'react'
import { Container, Heading, Divider, SimpleGrid, Flex } from '@chakra-ui/react'
import { MediumGridItem } from '../components/medium_card';
import Layout from '../components/layouts/article'
import { MediumLogo } from 'phosphor-react';

const MediumArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anslemAnsy")
            .then(res => res.json())
            .then(data => setArticles(data.items));
    }, []);

    return (
        <Layout title="GitHub Projects">
            <Container>
                <Flex display={"flex"} flexDirection={"row"} >
                    <Heading as="h1" fontSize={22} mb={4} pr={2}>
                        Blog
                    </Heading>
                    <MediumLogo />
                </Flex>
                {articles.map((article) => (
                    <MediumGridItem article={article} />
                ))}
            </Container>
            <Divider paddingBottom={5} paddingTop={5}></Divider>
        </Layout>
    )
};

export default MediumArticles;

