import { Container, Heading, SimpleGrid, Divider, Link, Badge, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import gem from '../public/images/projects/g-docs.png'
import gemdocs from '../public/images/projects/g-pp.png'
import anslemio from '../public/images/projects/ans-io.png'
import flutterhiveapp from '../public/images/projects/hive-app.png'
import drinkup from '../public/images/projects/d-up.jpg'
import flutterBlogDashBoard from '../public/images/projects/blog_dashboard.jpeg'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={25} paddingBottom={5} variant="section-title">
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="gem" title={<Link href="https://gem-one.vercel.app/">

            Gem Music</Link>} thumbnail={gem}>
            An advanced music mobile app, with multipl capabilities, such as streaming audio from
            youtube, not forgetting an awesome modern UI.
          </WorkGridItem>
          <Box display={"flex"} flexDirection="row" marginTop={"2"}>
            <Badge colorScheme='blue'>FLUTTER</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='blue'>DART</Badge>
          </Box>
        </Section>
        <Section>
          <WorkGridItem
            id="anslemio"
            title={<Link href="https://anslem27.github.io/">

              Anslem io</Link>}
            thumbnail={anslemio}
          >
            A flutter portfolio webapp, showcasing use of multiple api's and services, with
            a very slick UI.
          </WorkGridItem>
          <Box display={"flex"} flexDirection="row" marginTop={"2"}>
            <Badge colorScheme='blue'>FLUTTER</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='blue'>DART</Badge>
          </Box>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="blog-dashboard"
            title={<Link href='https://github.com/Anslem27/Blog-DashBoard' >Blog Dashboard Ui</Link>}
            thumbnail={flutterBlogDashBoard}
          >
            A minimalistic dashboard ui template for editting markdown text
          </WorkGridItem>
          <Box display={"flex"} flexDirection="row" marginTop={"2"}>
            <Badge colorScheme='blue'>FLUTTER</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='blue'>DART</Badge>
          </Box>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="gemdocs" thumbnail={gemdocs} title={<Link href="https://gem-one.vercel.app/">

            Gem Docs</Link>}>
            Landing page website for Gem App made with next Js.
          </WorkGridItem>
          <Box display={"flex"} flexDirection="row" marginTop={"2"}>
            <Badge colorScheme='blue'>TYPESCRIPT</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='blue'>JAVASCRIPT</Badge>
          </Box>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          More projects...
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="drink up" thumbnail={drinkup}
            title={<Link href="https://github.com/Anslem27/Drink-up">
              Drink Up</Link>
            }>
            A simple water intake tracking app.(Never got to really finish it.)
          </WorkGridItem>
          <Box display={"flex"} flexDirection="row" marginTop={"2"}>
            <Badge colorScheme='blue'>FLUTTER</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='blue'>DART</Badge>
          </Box>
          <Badge colorScheme='yellow'>Learning component</Badge>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="hive todo"
            thumbnail={flutterhiveapp}
            title={<Link href="https://github.com/Anslem27/Hive-Todo-App">

              Hive ToDo app</Link>}
          >
            A simple flutter hive database app, using hive a no sql database.
            <Link href='https://pub.dev/packages/hive'>(Hive)</Link>
          </WorkGridItem>
          <Box display={"flex"} flexDirection="row" marginTop={"2"}>
            <Badge colorScheme='blue'>FLUTTER</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='blue'>HIVE DB</Badge>
            <Box paddingLeft="2"> </Box>
            <Badge colorScheme='yellow'>Learning component</Badge>
          </Box>
        </Section>
      </SimpleGrid>
      <Divider my={6} />

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
