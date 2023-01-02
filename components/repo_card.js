import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react'
import { IoLogoGithub, IoStar, IoArchiveOutline } from 'react-icons/io5'

export const RepoCard = ({ repo }) => (
    <Box w="100%" textAlign="center" padding={8} margin={2} borderWidth='1px' borderRadius='lg' _hover={{
        background: "Teal",
        opacity: "0.5",
        cursor: "pointer"
    }} overflow='hidden' borderColor='grassTeal' justifyContent="center">
        <NextLink href={repo.html_url} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <IoLogoGithub size={35}>
                </IoLogoGithub>
                <LinkOverlay href={repo.html_url}>
                    <Text mt={2} fontSize={20}>
                        {repo.name}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{repo.description}</Text>
                <Flex alignItems="center" padding="10px" > <IoStar color='fbd38d'></IoStar>
                    <Box><Text>
                        {repo.stargazers_count === 0 ? "No stars" : repo.stargazers_count === 1 ? "1 Star" : repo.stargazers_count + " stars"}
                    </Text></Box>
                    <Box marginLeft={2}></Box>
                    <IoArchiveOutline color='f35fba'></IoArchiveOutline>
                    <Box><Text>
                        {repo.archived === true ? "Archived: Yes" : "Archived: No"}
                    </Text></Box>
                </Flex>
                <Text color="#1DA1F2" fontSize={12}>{"Language: " + repo.language}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export default RepoCard