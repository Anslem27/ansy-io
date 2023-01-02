import { Container, Heading, Link, Divider, Box, Img } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { IoCode } from 'react-icons/io5'
import SnippetView from "../components/snippet_component"

const Snippets = () => (
  <Layout title="Snippets">
    <Container>
      <Heading as="h1" fontSize={22} mb={4}>
        Code Snippets
      </Heading>
      <Heading as="h3" fontSize={18} paddingBottom={10}>
        <Heading as="h3" variant="section-title">
          Here are a variety of awesome code snippets
        </Heading> <IoCode color='1DA1F2'>
        </IoCode>
        ranging from react componets, to <Link href='https://flutter.dev'>flutter</Link> components, <Link href='https://www.geeksforgeeks.org/what-is-ci-cd/'> ci-cd</Link> and, yaml configurations and
        everything in-between.
      </Heading>

      <SnippetView />

    </Container>
    <Box margin={20}></Box>
  </Layout>
)

export default Snippets
