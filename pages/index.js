import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
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
import { IoLogoTwitter, IoLogoGithub, IoArrowForward } from 'react-icons/io5'
import { MediumSampleHome } from './blog'
import Image from 'next/image'

import {
  MediumLogo
} from 'phosphor-react'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const playlistId = '42pGzyX8klSJGY4cxKghow';

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
        Hello, I&apos;m a student and software developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Anslem Seguya
          </Heading>
          <p>Casual Gamer ( Redditor / Developer / Writer )</p>
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
            {/* Logo */}
            <ProfileImage
              src="/images/avatar.jpeg"
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
          development techniques in next js as well as advancing his skills in mobile app development.
          {' '}
          . He also has passion for writing articles primarily about coding and lots of other stuff on &quot;
          <NextLink href="https://medium.com/@anslemAnsy" passHref>
            <Link target="_blank">medium</Link>
          </NextLink>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
              My projects
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
          Started and is still pursuing a Bachelors&apos;s degree.

        </BioSection>
      </Section>

      <Heading as="h3" variant="section-title">
        Featured Projects
      </Heading>
      <NextLink href="/works/gem" passHref scroll={false}>
        <Link><Button

          variant="ghost"
          colorScheme="yellow"
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

      <NextLink href="https://github.com/Anslem27/Anslem27.github.io" passHref scroll={false}>
        <Link><Button

          variant="ghost"
          colorScheme="yellow"
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
      {/*      <Section delay={0.3}>
        <MediumSampleHome />
      </Section> */}
      {/*  <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links and Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Anslem27" target="_blank">
              <Button

                variant="ghost"
                colorScheme="yellow"
                leftIcon={<IoLogoGithub />}
              >
                Anslem27
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/anslemAnsy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<IoLogoTwitter />}
              >
                @anslemAnsy
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@anslemAnsy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<MediumLogo />}
              >
                Anslem
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/games" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
              Gaming memoir
            </Button>
          </NextLink>
        </Box>
      </Section> */}

      <Heading as="h3" variant="section-title">
        Dont get bored while your here.
      </Heading>
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/42pGzyX8klSJGY4cxKghow?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: '360px' }}
        // frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"

      />
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
