import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Blog DashBoard">
        <Container>
            <Title>
                Blog Dashboard <Badge>2022-</Badge>
            </Title>
            <P>
                An awesome simplistically designed mobile dashboard ui, basically showcaing how to use controllers,
                setState(){ }, flutter web UI layouts.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Live WebApp</Meta>
                    <Link href="https://flutterwebblogdashboard.netlify.app/">
                        https://flutterwebblogdashboard.netlify.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Repo</Meta>
                    <Link href="https://github.com/Anslem27/Blog-DashBoard">
                        https://github.com/Anslem27/Blog-DashBoard <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web, DeskTop</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Flutter</span>
                </ListItem>
                <ListItem>
                    <Meta>Blogpost</Meta>
                    <Link href="https://github.com/Anslem27">
                        Working on this... <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/projects/blog_dashboard.jpeg" alt="gem" />
            {/* <WorkImage src="/images/works/.png" alt="gem" /> */}
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
