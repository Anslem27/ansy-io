import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" pl={4}>Page not found</Heading>
      <Text pl={4}>The page you&apos;re looking for was not found.</Text>
      <Text pl={4}>Try looking for a typo in the link address.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="yellow">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
