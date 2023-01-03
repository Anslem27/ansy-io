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
  chakra,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoReddit, IoArrowForward } from 'react-icons/io5'
import rdt from '../public/images/r1-avatar.png'
import twt from '../public/images/twt.png'
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
        Hello, I&apos;m a student and software developer based in Uganda!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Anslem Seguya
          </Heading>
          <p>Casual Gamer ( Redditor / Developer / Designer )</p>
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
          A little about me
        </Heading>
        <Paragraph>
          Anslem is an undergraduate and an aspiring software developer based in Kampala Uganda with a
          passion for building digital stuff and amazing Ui's. He has a special zeal
          for all things `frontend`, from planning and designing all from the basics as a
          way to solving real-life problems with code, and making it look great all-together. When not online, he loves
          listening to some soothing indie alternate jams. Currently, he is learning Next js and intermediate software
          development techniques in next js as well as advancing my skills in mobile app development.
          {' '}
          . He also has a differnt portfolio webApp made with flutter that you may be happy to check out called &quot;
          <NextLink href="https://anslem27.github.io/" passHref>
            <Link target="_blank">Anslem.io</Link>
          </NextLink>
          &quot; and has some really revolutionary stuff.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
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
          Started and is still pursuing a Bachelors&apos;s degree at Kyamboggo University

        </BioSection>
      </Section>

      <Heading as="h3" variant="section-title">
        Featured Projects
      </Heading>
      <NextLink href="/works/gem" passHref scroll={false}>
        <Link><Button

          variant="ghost"
          colorScheme="teal"
          leftIcon={<IoLogoGithub />}
        >
          Gem Music
        </Button></Link>

      </NextLink>
      {/* style={{
  display: 'flex',
  flexDirection: 'column',
  '@media (min-width: 768px)': {
    flexDirection: 'row'
  }
}} */}
      <Box display={"flex"} flexDirection="row" alignItems={"center"}>
        <IoArrowForward color='71cbc0'></IoArrowForward>
        <Text paddingLeft={5}>Modern-ly designed music app, with youtube functionality.
        </Text>
      </Box>

      <NextLink href="https://gem-one.vercel.app/" passHref scroll={false}>
        <Link><Button

          variant="ghost"
          colorScheme="teal"
          leftIcon={<IoLogoGithub />}
        >
          Anslem.io
        </Button></Link>
      </NextLink>
      <Box display={"flex"} flexDirection="row" alignItems={"center"}>
        <IoArrowForward color='71cbc0'></IoArrowForward>
        <Text paddingLeft={5}>A beautifully designed and crafted portfolio website made with flutter.
        </Text>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 💙
        </Heading>
        <Paragraph>
          Gaming, EDM Music.{' '}
          <Link href="https://open.spotify.com/user/316mcic43djzxxpavdtc5ckm7eiu?si=15fbb02bc5434803" target="_blank">
            Spotify
          </Link>
          , Dartlang, FrontEndDevelopment,{' '}
          <Link href="https://flutter.dev/" target="_blank">
            Flutter
          </Link>
          , Oneplus Mobile, Mobile App development.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links and Socials
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

            href={"https://www.reddit.com/user/Infamous-Date-355"}
            title={<Link color="#FF5700" href="https://www.reddit.com/user/Infamous-Date-355" target="_blank">
              Reddit
            </Link>}
            thumbnail={rdt}
          >
            Reddit Enjoyer (&gt;47k karma)
          </GridItem>
          <GridItem
            href={"https://twitter.com/anslemAnsy"}
            title={<Link color="	#1DA1F2" href="https://twitter.com/anslemAnsy" target="_blank">
              Twitter
            </Link>}
            thumbnail={twt}
          >
            DM. me on twitter
            (Not a prominent user though 😃)
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
