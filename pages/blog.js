import { useState, useEffect } from 'react';
import { Container, Heading, Divider, SimpleGrid, Flex, Spinner } from '@chakra-ui/react';
import { MediumGridItem } from '../components/medium_card';
import Layout from '../components/layouts/article';
import { MediumLogo } from 'phosphor-react';

const MediumArticles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State for tracking loading

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anslemAnsy")
            .then(res => res.json())
            .then(data => {
                setArticles(data.items);
                setIsLoading(false); // Set loading to false after data is fetched
            });
    }, []);

    return (
        <Layout title="My Blog">
            <Container>
                <Flex display={"flex"} flexDirection={"row"}>
                    <Heading as="h1" fontSize={22} mb={4} pr={2}>
                        Blog
                    </Heading>
                    <MediumLogo />
                </Flex>
                {/* Check if data is still loading */}
                {isLoading ? (
                    <Flex justify="center" align="center" height="200px">
                        <Spinner size="lg" color="pink.500" />
                    </Flex>
                ) : (
                    // If not loading, display the articles
                    articles.map((article, index) => <MediumGridItem key={article.title} article={article} index={index} />)
                )}
            </Container>
            <Divider paddingBottom={5} paddingTop={5}></Divider>
        </Layout>
    );
};

export default MediumArticles;
