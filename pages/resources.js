import Layout from '../components/layouts/article'
import { Container, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import ResourcesCard from "../components/resource_card";
import { Gift } from 'phosphor-react';


export default function Resources() {
    // TODO: Make sections for each type, ex: Javascript, HTML CSS etc, as well as search
    return (
        <Layout title="Resources">
            <Container>

                <Heading as="h3" fontSize={17} paddingBottom={10}>
                    <Heading as="h3" variant="section-title">
                        Resources
                    </Heading> <Gift color='yellow.300'>
                    </Gift>
                    A collection of helpful resources on the internet
                </Heading>
                <Heading as="h3" variant="section-title" color={"yellow.500"}>
                    Must have websites.
                </Heading>
                <SimpleGrid columns={[1, 2, 2]}
                    spacing={'0.5'}
                    mt={5}
                    width={{ xl: "3xl" }}
                    mx={'auto'}>
                    <ResourcesCard
                        title="Carbon.now.sh"
                        link="https://carbon.now.sh/?bg"
                        websiteLink="carbon.now.sh/?bg"
                        description="Create and share beautiful images of your source code"
                    />

                    <ResourcesCard
                        title="Story Set"
                        link="https://storyset.com/"
                        websiteLink="storyset.com"
                        description="Beautiful illustrations and icons"
                    />

                    <ResourcesCard
                        title="UI Gradients"
                        link="https://uigradients.com"
                        websiteLink="uigradients.com"
                        description="Get different gradient range"
                    />

                    <ResourcesCard
                        title="Minimal Icons Pack"
                        link="https://www.heroicons.com"
                        websiteLink="heroicons.com"
                        description="Get free icons"
                    />
                    <ResourcesCard
                        title="Waves & SVG blobs"
                        link="https://getwaves.io/"
                        websiteLink="getwaves.io"
                        description="Generate waves for your website."
                    />

                    <ResourcesCard
                        title="Color schemes"
                        link="https://www.happyhues.co/"
                        websiteLink="happyhues.co"
                        description="Color schemes for a page"
                    />
                    <ResourcesCard
                        title="Paper Illustrations"
                        link="https://iconscout.com/paper-illustrations"
                        websiteLink="iconscout.com"
                        description="Free paper illustrations"
                    />
                    <ResourcesCard
                        title="Background generator"
                        link="https://bgjar.com/"
                        websiteLink="bgjar.com"
                        description="Generate beautfiful backgrounds"
                    />
                    <ResourcesCard
                        title="Avatar Library"
                        link="https://limitlessdesigns.io/avatar-illustrations/"
                        websiteLink="limitlessdesigns.io"
                        description="Free and unique Avatars"
                    />

                </SimpleGrid>

                <Heading as="h3" variant="section-title" color={"yellow.500"}>
                    Flutter resources
                </Heading>

                <SimpleGrid columns={{ base: 1, xl: 2 }}
                    spacing={'0.5'}
                    mt={5}
                    width={{ xl: "3xl" }}
                    mx={'auto'}>

                    <ResourcesCard
                        title="flutter templates"
                        link="https://www.fluttertemplates.dev/"
                        websiteLink="fluttertemplates.dev"
                        description="Flutter templates to ease mobile app production" />

                    <ResourcesCard
                        title="Json to dart"
                        link="https://www.jsontodart.in/"
                        websiteLink="www.jsontodart.in"
                        description="Easily convert json to null safe dart models. "
                    />
                    <ResourcesCard
                        title="Anslem.io"
                        link="https://anslem27.github.io/"
                        websiteLink="anslem27.github.io"
                        description="Personally made flutter portfolio website,using multiple apis, and services"
                    />
                    <ResourcesCard
                        title="Freebies by people"
                        link="https://freebies.bypeople.com/"
                        websiteLink="freebies.bypeople.com"
                        description="A professionally curated selection of commercial use resources and tools for designers and developers."
                    />



                </SimpleGrid>



                <Heading as="h3" variant="section-title" color={"yellow.500"}>
                    Used Way too common.
                </Heading>
                <SimpleGrid columns={{ base: 1, xl: 2 }}
                    spacing={'0.5'}
                    mt={5}
                    width={{ xl: "3xl" }}
                    mx={'auto'}>
                    <ResourcesCard
                        title="Free Icons (700+)"
                        link="https://css.gg/"
                        websiteLink="css.gg"
                        description="Collection of 700+ free icons"
                    />
                    <ResourcesCard
                        title="Lorem Ipsum"
                        link="https://loripsum.net/"
                        websiteLink="loripsum.net"
                        description="Advanced lorem text"
                    />
                    <ResourcesCard
                        title="Background Remover"
                        link="https://www.remove.bg/"
                        websiteLink="remove.bg"
                        description="Remove bg in one click"
                    />
                    <ResourcesCard
                        title="Code image"
                        link="https://codeimg.io/"
                        websiteLink="codeimg.io"
                        description="Convert code into beautiful snippets"
                    />

                </SimpleGrid>


            </Container>



            <Divider paddingBottom={5} paddingTop={5}></Divider>
        </Layout>
    );
}