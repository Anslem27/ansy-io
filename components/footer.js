import { Box, Tooltip, Text } from '@chakra-ui/react'
import Link from 'next/link'
const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">

      <Box display="flex" flexDirection="row" align="center" justifyContent={"center"}>
        <Text> &copy; {new Date().getFullYear()} Anslem Seguya. All Rights Reserved.</Text>
        <Box marginLeft={3}></Box>
        <Tooltip label="Current Portfolio" bg={"#05caa9"} borderRadius={5}>
          <Text color={"pink.400"}>V2</Text>
        </Tooltip>
        <Box marginLeft={2}></Box>
        <Link href="https://anslem27.github.io/">
          <Tooltip label="Flutter Portfolio" bg={"#05caa9"} borderRadius={5}>
            <Text color={"pink.400"}>V1</Text>
          </Tooltip>
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
