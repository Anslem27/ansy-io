import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Anslem's portfolio website" />
        <meta name="author" content="Anslem Seguya" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta property="og:site_name" content="Anslem Seguya" />
        <meta name="og:title" content="Anslem Seguya" />
        <meta property="og:type" content="website" />
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
