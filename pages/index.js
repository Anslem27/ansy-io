import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoReddit } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an aspiring software developer based in Uganda!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Anslem Seguya
          </Heading>
          <p>Proficient Gamer ( Redditor / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            {/* My pesonal Logo */}
            <ProfileImage
              src="/images/avatar.jpg"
              alt="Profile image/logo"
              borderRadius="full"
              width="150%"
              height="150%"
              objectFit={20}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Anslem is an undergraduate and a aspiring software developer based in Kampala with a
          passion for building digital stuff and amazing Ui's. He has a special zeal
          for all things `frontend`, from planning and designing all from the basics as a
          way to solving real-life problems with code, and making it look great all-together. When not online, he loves
          listening to some soothing alternate jams. Currently, he is learning react, Next js and basics of game development{' '}
          <NextLink href="https://github.com/Anslem27/Gem-Docs" passHref scroll={false}>
            <Link>Gem Music</Link>
          </NextLink>
          . He also has a differnt portfolio webApp made with flutter that you may be happy to check out called &quot;
          <NextLink href="#" passHref>
            <Link target="_blank">Anslem.io</Link>
          </NextLink>
          &quot; and has some really revolutionary stuff.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Kampala, Uganda.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started a Bachelors&apos;s degree at Kyamboggo University

        </BioSection>
        {/* <BioSection>
          <BioYear>2010</BioYear>
          "Worked at Yahoo! Japan (ヤフー株式会社入社)"
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Working as a freelancer
        </BioSection> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 💙
        </Heading>
        <Paragraph>
          Gaming, EDM Music,{' '}
          <Link href="#" target="_blank">
            Drawing
          </Link>
          , Dart Flutter,{' '}
          <Link href="#" target="_blank">
            Photography
          </Link>
          , Oneplus, Mobile App development
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Anslem27" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Anslem27
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/anslemAnsy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @anslemAnsy
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.reddit.com/user/Infamous-Date-355/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoReddit />}
              >
                @Infamous-Date-355
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="#"
            title="Reddit"
            thumbnail={thumbYouTube}
          >
            Reddit Enjoyer (&gt;25k karma)
          </GridItem>
          <GridItem
            href="#"
            title="Gem Music"
            thumbnail={thumbInkdrop}
          >
            An Awesome Modern Music App.
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
