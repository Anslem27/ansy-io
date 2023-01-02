
import { useState } from 'react'
import RepoView from '../components/repo_view'
import Layout from '../components/layouts/article'
import { Container, Heading, Link, Divider, Box, Input, Text } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

export default function Git({ repos }) {
  // const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(repos)

  const totalStargazers = repos.reduce((total, repo) => total + repo.stargazers_count, 0);

  const handleChange = (e) => {
    // setSearchTerm(e.target.value)
    filterRepos(e.target.value)
  }

  // filter repos by search term in name or description
  const filterRepos = (searchTerm) => {
    const filteredRepos = repos.filter((repo) => {
      return (
        repo?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo?.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setSearchResults(filteredRepos)
  }





  return (
    <Layout title="GitHub Projects">
      <Container>
        <Heading as="h1" fontSize={22} mb={4}>
          Github Projects
        </Heading>
        <Heading as="h3" fontSize={18} paddingBottom={10}>
          <Heading as="h3" variant="section-title">
            Am a
          </Heading> <IoLogoGithub>
          </IoLogoGithub><Link href="https://github.com/Anslem27">Github </Link>
          user, and here below are my projects.
        </Heading>
        <Text color="#1DA1F2" >{"Total Stars: " + totalStargazers} </Text>
        <Input type="text" placeholder="Search for a repo by name or description" onChange={handleChange} height={45} padding={5} />
        <Box height={5} />
        <RepoView reposToDisplay={searchResults} />
      </Container>

      <Divider paddingBottom={5} paddingTop={5}></Divider>
    </Layout>
  )
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

