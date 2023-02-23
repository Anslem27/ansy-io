
import { Heading, SimpleGrid } from '@chakra-ui/react'
import RepoCard from './repo_card';


const RepoView = ({ reposToDisplay }) => {
    if (Array.isArray(reposToDisplay)) {
        return (
            <SimpleGrid
                columns={[2, 2, 2]}
                spacing={'5'}
                mt={16}
                width={{ xl: "2xl" }}
                mx={'auto'}
            >

                {reposToDisplay.map(repo => <div key={repo.id} >

                    <RepoCard repo={repo} />

                </div>)
                }

            </SimpleGrid>
        );
    } else {
        return <Heading as="h1" fontSize={22} mb={4}>
            Error Fetching Repos..
        </Heading>;
    }
}

export default RepoView
