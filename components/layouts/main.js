import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {

  const keywords = [
    "Seguya Anslem",
    "Anslem",
    "Software developer",
    "Portfolio",
    "Next js",
  ];


  const keywordMetaTags = keywords.map((keyword, index) => (
    <meta key={index} name="keywords" content={keyword} />
  ));


  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="author" content="Anslem Seguya" />
        {/* Keyword meta tags */}
        {keywordMetaTags}
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta property="og:site_name" content="ansy.io" />
        <meta name="og:title" content="Anslem Seguya's portfolio website" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Anslem Seguya's portfolio website" />
        <title>ansy io</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={24}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
