import { useState, useEffect } from 'react'
import { Container, Heading, Divider, SimpleGrid } from '@chakra-ui/react'
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
                <Heading as="h1" fontSize={22} mb={4}>
                    Medium Articles
                </Heading>
                <Heading as="h3" variant="section-title">
                    My Articles fetched from medium
                </Heading>
                <MediumLogo />

                <SimpleGrid
                    columns={[2, 2, 2]}
                    spacing={'5'}
                    mt={16}
                    width={{ xl: "2xl" }}
                    mx={'auto'}
                >

                    {articles.map((article) => (

                        <MediumGridItem article={article} />

                    ))}

                </SimpleGrid>

            </Container>

            <Divider paddingBottom={5} paddingTop={5}></Divider>
        </Layout>
    )
};

export default MediumArticles;


export const MediumSampleHome = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anslemAnsy")
            .then(res => res.json())
            .then(data => setArticles(data.items));
    }, []);

    return (
        <>

            <SimpleGrid
                columns={[2, 2, 2]}
                spacing={'5'}
                mt={16}
                width={{ xl: "2xl" }}
                mx={'auto'}
            >

                {articles.map((article) => (

                    <MediumGridItem article={article} />

                ))}

            </SimpleGrid>
        </>
    )

}