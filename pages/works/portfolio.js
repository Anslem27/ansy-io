import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { GithubLogo } from 'phosphor-react'




const Work = () => (
    <Layout title="Portfolio">
        <Container>
            <Title>
                ansy.io <Badge>2022</Badge>
            </Title>
            <P>
                This is my portfolio website, made with next.js
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://ansy-io.vercel.app/">
                        Check it out <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework</Meta>
                    <span>Next js with Chakra ui</span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/Anslem27/ansy-io">
                        Check out repository and dont forget to star.<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/projects/portfolio.png" alt="portfolio website" />
            {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
