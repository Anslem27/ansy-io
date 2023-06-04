import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra,
  Text, extendTheme, Flex,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoArrowForward } from 'react-icons/io5'
import Image from 'next/image'
import { GameController, Code, Pencil } from 'phosphor-react'
import styled from "@emotion/styled";

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
              alt="Profile logo"
              borderRadius="full"
              width={150}
              height={150}
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
          <NextLink href="https://medium.com/@anslemAnsy" passHref legacyBehavior>
            <Link target="_blank">medium</Link>
          </NextLink>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false} legacyBehavior>
            <Button rightIcon={<Code />} colorScheme="pink">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* <Section delay={0.2}>
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
      </Section> */}
      <Heading as="h3" variant="section-title">
        Current Project
      </Heading>
      <GradientBox p={3}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Flex flexDirection={"row"} ><Heading pr={3} as="h4" fontSize={22} color={"teal.300"}>
              Writefolio
            </Heading>
              <Pencil />
              <Text fontSize={10}>still in development</Text>
            </Flex>
            <p>material-3 mobile applocation for writers.</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >

            {/* Button */}

          </Box>
        </Box>
      </GradientBox>

      <Heading as="h3" variant="section-title">
        Featured Projects
      </Heading>
      <NextLink href="/works/gem" passHref scroll={false} legacyBehavior>
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

      <NextLink
        href="https://github.com/Anslem27/Anslem27.github.io"
        passHref
        scroll={false}
        legacyBehavior>
        <Link><Button

          variant="ghost"
          colorScheme="pink"
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

      {/*  <Section delay={0.3}>
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
        </Paragraph>
      </Section> */}

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Dont get bored while your here.
        </Heading>
        <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/42pGzyX8klSJGY4cxKghow?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: '360px', pt: "20px", borderRadius: "14px" }}
          // frameBorder="8"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'


/* box with slick radial bottom left gradient */
const GradientBox = styled(Box)`
 border-inline-start: 1px solid;
 border-block-end: 1px solid;
 padding:10px;
 border-image-source:radial-gradient(circle at bottom left,#fbd38d,#aa98a9,transparent 10%);
 border-image-slice:1;

`;