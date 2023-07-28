import { Box, Avatar, Flex, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { IoSchool } from 'react-icons/io5'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export const BioStats = ({ achievement, college }) => (
  <>
    <Flex flexDirection={"row"} p={1.5}>
      <Avatar
        borderRadius={"8px"}
        icon={<IoSchool />}
        bgColor={"teal.500"}
        h={10}
        w={10}
        ml={2.5}
        mr={2.5}
      />
      <Flex flexDirection={"column"}>
        <Text fontSize={14} >{achievement}</Text>
        <Text fontSize={12} textColor={"grey"}>{college}</Text>
      </Flex>

    </Flex>
  </>
)
