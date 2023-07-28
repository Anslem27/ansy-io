import React from 'react'
import { Image, Flex, Box, Text, Heading, Card, Avatar, Divider, Button, Link, AvatarGroup, SimpleGrid } from '@chakra-ui/react'
import { ProfileImage } from '.'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoTwitter, IoLogoDiscord, IoLogoWebComponent } from 'react-icons/io5'
import { IoLogoPython, IoLogoJavascript, IoLogoAndroid } from 'react-icons/io5'
import { GithubLogo, LinkedinLogo, Person } from 'phosphor-react'
import { BioStats } from '../components/bio'

export const AvatarComponent = ({ ontap, name, desc }) => (
    <Flex flexDirection={"row"} overflowWrap={"inherit"} overflow={"clip"} p={2}>
        <Avatar
            icon={<Person />}
            w={10} h={10} />

        <a href={ontap}>
            <Flex flexDirection={"column"} ml={2}>
                <Text fontSize={13}>{name}</Text>
                <Text textColor={"grey"} fontSize={13}>{desc}</Text>
            </Flex>
        </a>
    </Flex>
)

export const PositionsComponent = ({ role, duration, stack, desc }) => (
    <>
        <Flex flexDirection={"row"} p={3}>
            <Box
                w="80px"
                h="20px"
                borderRadius={"md"}
                borderColor={"whiteAlpha.800"}
                borderStyle={"solid"}

            >
                {/* Logo */}
                <Avatar
                    borderRadius={"8px"}
                    ml={2.5}
                    mr={2.5}
                />
            </Box>
            <Flex wrap={"wrap"} flexDirection={"column"}>
                <Text fontSize={15} as={Flex} flexDirection={"row"}>
                    {role}
                </Text>
                <Text fontSize={14} textColor={"grey"}>
                    {duration}
                </Text>
                <Text fontSize={12} textColor={"grey"}>
                    {desc}
                </Text>
                <Text as="h4" fontSize={13} p={1} >
                    Tech Stack
                </Text>
                <Flex wrap={"wrap"}>
                    <Button
                        m={1}
                        h={7}
                        colorScheme='blue'
                        leftIcon={<IoLogoAndroid />}
                    >
                        Fluter
                    </Button>
                    <Button
                        m={1}
                        h={7}
                        leftIcon={<GithubLogo />}
                    >
                        Git
                    </Button>
                </Flex>
            </Flex>


        </Flex>
    </>
)

const Resume = () => {
    return (
        <>
            <Box display={{ md: 'flex' }}>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="90px"
                        h="90px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        {/* Logo */}
                        <ProfileImage
                            src="/images/avatar.jpeg"
                            alt="Profile logo"
                            borderRadius="full"
                            width={90}
                            height={90}
                            objectFit={10}
                        />
                    </Box>
                </Box>
                <Box flexGrow={1} overflow="hidden" ml={{ md: 6 }}>
                    <Heading as="h2" fontWeight={"bold"} fontSize={24} variant="page-title">
                        Anslem Seguya
                    </Heading>
                    <Text fontSize={15}>Casual Gamer ( Redditor / Developer / Writer )</Text>
                    <Flex flexDirection={"row"}
                        alignItems={"flex-start"}
                        textColor={"grey"}
                        fontSize={13}
                        justifyContent={"start"}
                    > <Text as={Flex}>• Student/Software Engineer</Text>
                        <Link href='/'> <Text ml={0.5} mr={0.5}>• anslembarn@gmail.com</Text> </Link>
                        <Text as={Flex}>• Kampala Uganda • </Text>
                        <Text as={Flex}>  2 years Experience</Text>
                    </Flex>
                </Box>
            </Box>
            <Box p={1.5} m={1.5} mb={0.5} mt={0.5} />
            <Box ml={{ md: 6 }}>
                <Text as="h2" textColor={"GrayText"} fontSize={15} p={2}>
                    About
                </Text>
                <Text fontSize={14}>
                    I am a student, software enthusiast and software developer.
                </Text>
                <Divider p={1.5} mb={0.5} mt={0.5} />
                <Text as="h2" textColor={"GrayText"} fontSize={15} p={2}>
                    Links
                </Text>
                <Flex flexDirection={"row"} wrap={"wrap"}>
                    <NextLink href="/" passHref scroll={false} legacyBehavior>
                        <Link>
                            <Button
                                m={1.5}
                                h={7}
                                leftIcon={<IoLogoGithub />}
                            >
                                Github
                            </Button></Link>

                    </NextLink>
                    <NextLink href="/" passHref scroll={false} legacyBehavior>
                        <Link>
                            <Button
                                m={1.5}
                                h={7}
                                leftIcon={<IoLogoTwitter />}
                            >
                                Twitter
                            </Button></Link>

                    </NextLink>
                    <NextLink href="/" passHref scroll={false} legacyBehavior>
                        <Link>
                            <Button
                                m={1.5}
                                h={7}
                                leftIcon={<IoLogoDiscord />}
                            >
                                Discord
                            </Button></Link>

                    </NextLink>
                    <NextLink href="/" passHref scroll={false} legacyBehavior>
                        <Link>
                            <Button
                                m={1.5}
                                h={7}
                                leftIcon={<IoLogoWebComponent />}
                            >
                                Website
                            </Button></Link>

                    </NextLink>

                </Flex>
                <Divider p={1.5} mb={0.5} mt={0.5} />
                <Text as="h2" textColor={"GrayText"} fontSize={15} p={2} >
                    References
                </Text>
                <Flex wrap={"wrap"}>

                    <SimpleGrid columns={[1, 2, 2]} spacing={3} p={2}>
                        <AvatarComponent
                            name={"Atuhaire Collins"}
                            desc={"Tech Enthusiast| GDSC Lead 2022"}
                            ontap={"/"}
                        />
                        <AvatarComponent
                            name={"Wandulu Victor"}
                            desc={"Tech Enthusiast"}
                            ontap={"/"}
                        />
                        <AvatarComponent
                            name={"Ntende Peter"}
                            desc={"Tech Enthusiast"}
                            ontap={"/"}
                        />
                        <AvatarComponent
                            name={"Random Dude"}
                            desc={"Tech Enthusiast| Knows Stuff"}
                            ontap={"/"}
                        />
                    </SimpleGrid>
                </Flex>
                <Text as="h2" textColor={"GrayText"} fontSize={15} p={2} >
                    Tech Stack
                </Text>
                <Flex wrap={"wrap"}>
                    <Button
                        m={1.5}
                        h={7}
                        colorScheme='yellow'
                        leftIcon={<IoLogoPython />}
                    >
                        Python
                    </Button>
                    <Button
                        m={1.5}
                        h={7}
                        colorScheme='yellow'
                        leftIcon={<IoLogoJavascript />}
                    >
                        javascript
                    </Button>
                    <Button
                        m={1.5}
                        h={7}
                        colorScheme='blue'
                        leftIcon={<IoLogoAndroid />}
                    >
                        Flutter
                    </Button>
                    <Button
                        m={1.5}
                        h={7}
                        leftIcon={<GithubLogo />}
                    >
                        Git
                    </Button>
                </Flex>
                <Text as="h2" textColor={"GrayText"} fontSize={15} p={2} >
                    Positions
                </Text>
                <Flex flexDirection={"column"} wrap={"inherit"}>

                    <PositionsComponent
                        role={"Software developer Intern"}
                        duration={"2023-Present"}
                        desc={"Managed development of mobile and web application for the the Taasa Group"}

                    />
                    <PositionsComponent
                        role={"Junior Developer"}
                        duration={"June 2021-22"}
                        desc={"\n• Developed mobile apps using Flutter framework and Next.js \n• Collaborated with team members to implement new features.\n• Assisted with testing and debugging Gained knowledge of Firebase and other technologies"}
                    />
                </Flex>
                <Text as="h2" textColor={"GrayText"} fontSize={15} p={2} >
                    Credentials
                </Text>

                <Flex flexDirection={"column"} >
                    <BioStats
                        college={"Kyamboggo University Uganda  • Feb 2022 - Present"}
                        achievement={"Bachelors Degree In Information technology and Computing"}
                    />
                </Flex>
            </Box >

        </>
    )
}

export default Resume