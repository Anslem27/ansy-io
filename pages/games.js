import React from 'react'
import Layout from '../components/layouts/article'
import { Container, Heading, Link, Divider, Box, Input, Text, SimpleGrid } from '@chakra-ui/react'
import { IoGameController, IoInformationCircleOutline } from 'react-icons/io5'
import { WorkImage } from '.././components/work'
import Section from '../components/section'
import { motion } from 'framer-motion'

const Games = () => {
    return (
        <Layout title="My Gaming Stories">
            <Container>
                <Heading as="h1" fontSize={22} mb={4}>
                    Gaming Memories
                </Heading>
                <Heading as="h3" fontSize={18} paddingBottom={10}>
                    <Heading as="h3" variant="section-title">
                        Am a
                    </Heading> <IoGameController>
                    </IoGameController><Link>Video game lover </Link>
                    and here, i write about some of my most memorable video
                    games, i've played over the years.
                </Heading>
                <Box height={5} />

                <Heading as="h3" variant="section-title">
                    Best Game Series.
                </Heading>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                        scale: 0.8,
                        borderRadius: "100%"
                    }}

                >
                    <WorkImage src="https://th.bing.com/th/id/R.44bdebf640b804c5402a50d5ee8e45eb?rik=uBkZNRiXBt4LOg&pid=ImgRaw&r=0"
                        alt="far cry primal" />
                </motion.div>
                <Heading as="h4" fontSize={17}>
                    Far Cry is an anthology franchise of first-person shooter games, all of which have been
                    published by Ubisoft. I have honestly played every last far cry out there, well technically from
                    "3" to "6" as of recent. And ive enjoyed every last single drop of the drama and action. All the badass
                    villains and everything altogether.

                </Heading>
                <Text> I can clearly conclude that far cry is uniquely one of thr best game series ever made.
                </Text>
                <SimpleGrid padding={3} columns={{ base: 2, xl: 2 }}>

                    <Box padding={2}>
                        <WorkImage src="https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg" alt="far cry 5" />
                    </Box>
                    <Box padding={2}>
                        <WorkImage src="https://upload.wikimedia.org/wikipedia/en/6/63/Far_Cry_4_box_art.jpg" alt="far cry primal" />
                    </Box>

                </SimpleGrid>

                <Heading as="h3" variant="section-title">
                    Outstanding.
                </Heading>
                <Heading fontSize={14}>These are those tyoe of games that  you probably haven't played, but when you do....</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg" alt="bioshock infinite" />
                        </Box>

                        <Text padding={2}> This is preaty much the most un-understood game ive ever played. It stars--
                            <Link href='https://en.wikipedia.org/wiki/Booker_DeWitt'>Booker Dewitt </Link>
                            as the main character, who ends up in some wierd unreal stuff, general gameplay was awesome, story was great
                            but the ending was a `wtf` kinda ending. ou really gotta play this if youve never.
                        </Text>
                    </Section>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg" alt="death stranding" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://en.wikipedia.org/wiki/Death_Stranding'>Death Stranding</Link> is a uniquely different kind of
                            game, weird gameplay, but an awesome story line at the back of it. It is some post apocalypric stuff with a weird
                            creepy vibe to it. But thats not the game changer as you might think. The real true gem in this game is its incredible
                            story of Sam, BB and everyone inbetwen.

                        </Text>
                    </Section>

                </SimpleGrid>
                <Heading as="h3" variant="section-title">
                    Memorable
                </Heading>
                <Heading fontSize={14}>These are those tyoe of games that actually left more of a mark.</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png" alt="ac odyssey" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://en.wikipedia.org/wiki/Assassin%27s_Creed_Odyssey'>Assasins Creed Odyssey</Link> really hit me
                            different, cause i was used to a whole kind of assasins creed. It was one of the first games i got on the ps4, and took
                            over 8 months to make a trophy collection of over 90%, thats something i tell you right there.
                            Truly Memorable.


                        </Text>
                    </Section>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/5/51/Borderlands_2_cover_art.png" alt="ac odyssey" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://en.wikipedia.org/wiki/Borderlands_2'>Borderlands 2</Link> was a unique extremely
                            long game with alot of quirky memories. Got the game during the first covid period and played it for
                            some really long time, funny and most importantly a memory worth keeping.


                        </Text>
                    </Section>
                </SimpleGrid>
                <Heading as="h3" variant="section-title">
                    More that i've played that you'll want to try.
                </Heading>
                <SimpleGrid columns={[2, 2, 3]} gap={6}>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="ac odyssey" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://www.rockstargames.com/gta-v'>
                                Gta 5
                            </Link>  I mean who hasnt played GTA 5.
                        </Text>
                    </Section>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/6/64/Need_for_Speed_Payback_standard_edition_cover_art.jpg" alt="ac odyssey" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://www.ea.com/games/need-for-speed/need-for-speed-payback/buy/pc'>
                                Nfs Payback
                            </Link>  Probably the best nfs out there.

                        </Text>
                    </Section>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/c/c4/Metrolastlight.jpg" alt="ac odyssey" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://en.wikipedia.org/wiki/Metro:_Last_Light'>
                                Metro Last Light
                            </Link>  Didnt beat it, but sure as hell enjoyed, Artyom's adventure.
                        </Text>
                    </Section>
                    <Section>
                        <Box padding={2}>
                            <WorkImage src="https://upload.wikimedia.org/wikipedia/en/8/8b/God_of_War_III_cover_art.jpg" alt="ac odyssey" />
                        </Box>

                        <Text padding={2}>
                            <Link href='https://en.wikipedia.org/wiki/God_of_War_III'>
                                God of War III
                            </Link>  Surely the best most bloody God of war game.
                        </Text>
                    </Section>

                </SimpleGrid>

                <Box align="center" opacity={0.4} fontSize="sm" display={"flex"} flexDirection="row">
                    <IoInformationCircleOutline color='red' size={30}></IoInformationCircleOutline>
                    All game artwork used on this website, is proprietary software licensed by its respective creators,
                    and i own no such rights nor intend to take it as my own.
                </Box>
            </Container>



            <Divider paddingBottom={5} paddingTop={5}></Divider>
        </Layout>
    )
}

export default Games