import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/react'
import { IoLogoGithub, IoStar, IoArchiveOutline } from 'react-icons/io5'

export const RepoCard = ({ repo }) => (
    <Box w="100%" textAlign="center" padding={3} margin={1}
        borderWidth='1px' borderRadius='lg'
        _hover={{
            transform: "scale(1.02)",
            boxShadow: "lg",
            borderColor: "#fbd38d"
        }} overflow='hidden' borderColor='grassTeal' justifyContent="center">
        <NextLink href={repo.html_url} passHref scroll={false} legacyBehavior>
            <LinkBox cursor="pointer" >
                <IoLogoGithub size={35} >
                </IoLogoGithub>
                <LinkOverlay href={repo.html_url}>
                    <Text mt={2} fontSize={20}>
                        {repo.name}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{repo.description}</Text>

                <Text >
                    {repo.stargazers_count === 0 ? "No stars" :
                        repo.stargazers_count === 1 ? "1 Star" :
                            repo.stargazers_count + " stars"
                    }
                </Text>


                {/*  <IoArchiveOutline color='f35fba'></IoArchiveOutline>
                    <Box><Text>
                        {repo.archived === true ? "Archived: Yes" : "Archived: No"}
                    </Text></Box> */}

                <Text
                    color={getLanguageColor(repo.language)}
                    fontSize={12}
                    padding={2}
                >
                    {"Language: " + repo.language}
                </Text>

            </LinkBox>
        </NextLink>
    </Box>
)

export default RepoCard



const getLanguageColor = (language) => {
    switch (language) {
        case "JavaScript":
            return "#f7df1e";
        case "TypeScript":
            return "#007acc";
        case "Python":
            return "#3572a5";
        case "Java":
            return "#b07219";
        case "Go":
            return "#00add8";
        case "C#":
            return "#178600";
        case "C++":
            return "#f34b7d";
        case "Ruby":
            return "#701516";
        case "Dart":
            return "#1DA1F2";
        default:
            return "#F08080";
    }
};