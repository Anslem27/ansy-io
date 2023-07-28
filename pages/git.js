import { useState } from 'react';
import RepoView from '../components/repo_view';
import Layout from '../components/layouts/article';
import { Container, Heading, Link, Divider, Box, Input, Text, Flex, Spinner } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';

export default function Git({ repos }) {
  const [searchResults, setSearchResults] = useState(repos);
  const [isLoading, setIsLoading] = useState(false); // State for tracking loading

  const totalStargazers = repos.reduce((total, repo) => total + repo.stargazers_count, 0);

  const handleChange = (e) => {
    setIsLoading(true); // Set loading to true when searching
    filterRepos(e.target.value);
  };

  // filter repos by search term in name or description
  const filterRepos = (searchTerm) => {
    const filteredRepos = repos.filter((repo) => {
      return (
        repo?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo?.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredRepos);
    setIsLoading(false); // Set loading to false after filtering
  };

  return (
    <Layout title="GitHub Projects">
      <Container>
        <Flex flexDirection={"row"}>
          <Heading as="h1" fontSize={22} mb={4} pr={3}>
            Github Projects
          </Heading>
          <IoLogoGithub />
        </Flex>
        <Text color="#1DA1F2" fontSize={12}>
          {"Total Stars: " + totalStargazers}
        </Text>
        <Box p={5}>
          <Input
            type="text"
            placeholder="Search for a repo by name or description"
            onChange={handleChange}
            height={45}
            padding={5}
          />
        </Box>
        <Box height={5} />
        {/* Check if data is still loading */}
        {isLoading ? (
          <Flex justify="center" align="center" height="200px">
            <Spinner size="lg" color="pink.500" />
          </Flex>
        ) : (
          // If not loading, display the RepoView component with search results
          <RepoView reposToDisplay={searchResults} />
        )}
      </Container>

      <Divider paddingBottom={5} paddingTop={5}></Divider>
    </Layout>
  );
}

// get data from the GitHub Api
export async function getStaticProps(context) {
  // Call an external API endpoint to get repositories.
  const username = 'Anslem27'
  const url = `https://api.github.com/users/${username}/repos`;

  //get the repos from the github api
  const reposWithAllInfo = await fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
  const repos = reposWithAllInfo.map(repo => {
    return {
      name: repo.name,
      id: repo.id,
      description: repo.description,
      language: repo.language,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      archived: repo.archived
    }
  });


  return {
    props: { repos }, // will be passed to the page component as props
  }
}

