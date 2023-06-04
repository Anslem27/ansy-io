import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Spacer, Flex } from '@chakra-ui/react'
import { IoLogoGithub, IoStar, IoArchiveOutline } from 'react-icons/io5'
import styled from "@emotion/styled";


export const RepoCard = ({ repo }) => (

    <Box>

        <GradientBox>
            <Flex justify="start" align="start" direction="row" p={3} w="100%">


                <Flex display="flex" flexDirection="column">

                    <NextLink href={repo.html_url}>
                        <Text fontSize={20} fontWeight="bold">
                            {repo.name}
                        </Text>
                    </NextLink>

                    <Text
                        color={getLanguageColor(repo.language)}
                        fontSize={12}

                    >
                        {"Written in " + repo.language}
                    </Text>
                    <Flex wrap="wrap">
                        <Box>
                            <Flex flexDirection={"row"} >
                                <Text fontSize={10}>
                                    {repo.archived === true ? "Repository is archived with " : "archived with "}
                                </Text>
                                <Text fontSize={10} pl={1}>
                                    {repo.stargazers_count === 0 ? " no stars" :
                                        repo.stargazers_count === 1 ? " 1 star" :
                                            repo.stargazers_count + " stars"
                                    }
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>

                <IoLogoGithub />
            </Flex>
        </GradientBox>

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

/* box with slick radial bottom left gradient */
const GradientBox = styled(Box)`
 border-inline-start: 1px solid;
 border-block-end: 1px solid;
 padding:10px;
 border-image-source:radial-gradient(circle at bottom left,#fbd38d,#aa98a9,transparent 10%);
 border-image-slice:1;

`;