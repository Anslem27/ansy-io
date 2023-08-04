import {
    Container,
    Badge,
    Link,
    List,
    ListItem, AspectRatio,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'




const Work = () => (
    <Layout title="versify">
        <Container>
            <Title>
                Versify <Badge>2023</Badge>
            </Title>
            <P>
                Versify is a modern ebook and poem app that aims to provide users with a poetic utopia.
                It is a place where poetry enthusiasts can explore, and be inspired by the world of poetry
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://versify-site.vercel.app/">
                        Check out landing page <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework</Meta>
                    <span>Flutter</span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/Anslem27/versify-site">
                        Check out repository<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            {/* <WorkImage src="/images/projects/g-pp.png" alt="gem" /> */}
            <AspectRatio maxW="640px" ratio={1.7} my={4}>
                <iframe
                    src="https://versify-site.vercel.app/"
                    title="Versify website"
                    frameBorder="0"
                    style={{ borderRadius: '14px' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
