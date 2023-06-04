
import { Heading, SimpleGrid } from '@chakra-ui/react'
import RepoCard from './repo_card';


const RepoView = ({ reposToDisplay }) => {
    if (Array.isArray(reposToDisplay)) {
        return <>
            {reposToDisplay.map(repo => <div key={repo.id} >

                <RepoCard repo={repo} />

            </div>)}

        </>
    } else {
        return <Heading as="h1" fontSize={22} mb={4}>
            Error Fetching Repos..
        </Heading>;
    }
}

export default RepoView
