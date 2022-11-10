import { Container, Heading, SimpleGrid, Link, Divider, Box, Img } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoReddit } from 'react-icons/io5'
import horsepost from '../public/images/reddit/hs1.png'
import gitScandal from '../public/images/reddit/ph1.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h1" fontSize={22} mb={4}>
        Popular Posts
      </Heading>
      <Heading as="h3" fontSize={18} paddingBottom={10}>
        <Heading as="h3" variant="section-title">
          Am a
        </Heading> <IoLogoReddit>
        </IoLogoReddit><Link color="#FF5700" href="https://www.reddit.com/user/Infamous-Date-355">Reddit </Link>
        enjoyer, and why not show off, my most popular posts ever in one
        place.
      </Heading>

      <GridItem
        title={<Link href="#" color="#FF5700">

          Git Scandal
          (Got over 40k upvotes )</Link>}
        thumbnail={gitScandal}
        href="#"
      />
      <Divider paddingBottom={5} paddingTop={5}></Divider>
      <GridItem
        title={<Link color="#FF5700" href="#">

          Horse Shitty Post
          (Got over 30k upvotes )</Link>}
        thumbnail={horsepost}
        href="#"
      />

      <Heading as="h2" fontSize={22} paddingTop={5}>
        <Link href='#' color="#FF5700">Soon adding More...
        </Link>
      </Heading>
      <Divider paddingBottom={5} ></Divider>

      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          />
          <GridItem
            title="How to take notes in Markdown efficiently with Inkdrop"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section> */}

      {/*  <Section delay={0.3} >
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section> */}

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
