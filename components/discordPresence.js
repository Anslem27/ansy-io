import React from 'react';
import { useLanyard } from 'react-use-lanyard';
import { Box, Text, Image, Spinner } from "@chakra-ui/react";
import Link from 'next/link';
import { DiscordLogo } from 'phosphor-react';


const DiscordActivityStream = () => {
    /* Discord user id */
    const lanyard = useLanyard({
        userId: "878728452155539537",
    });

    // Check if the data is valid before rendering
    if (!lanyard.isValidating && lanyard.data && lanyard.data.data) {
        const userData = lanyard.data.data.discord_user;

        const isListeningToSpotify = lanyard.data.data.listening_to_spotify;
        const activities = lanyard.data.data.activities

        if (isListeningToSpotify) {

            const spotifyImageInfo = lanyard.data.data.spotify.album_art_url;
            const spotifyAlbum = lanyard.data.data.spotify.song;
            const spotifyArtist = lanyard.data.data.spotify.artist;
            const songId = lanyard.data.data.spotify.track_id
            // const album = lanyard.data.data.spotify.album;
            return (
                <Box
                    display={"flex"}
                    flexDir={"row"}
                    padding={"5px"}
                    mt={5}
                    mb={5}
                >
                    <Image
                        src={spotifyImageInfo}
                        height={110}
                        width={110}
                        borderRadius={8}
                    />

                    <Box width={5} />

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                    >
                        <Text color={"pink.400"} fontSize={22}>
                            @{userData.display_name}
                        </Text>
                        <Text>
                            Listening to
                            <Link href={`https://open.spotify.com/track/${songId}`}
                                style={{
                                    color: "#05caa9"
                                }}> {spotifyAlbum} </Link>
                            by {spotifyArtist}
                        </Text>
                    </Box>
                </Box>
            );
        } else if (activities.length > 0) {
            return <Box
                display={"flex"}
                flexDir={"row"}
                padding={"5px"}
                mt={5}
                mb={5}
            >
                <Image
                    src={"/images/avatar.jpeg"}
                    height={100}
                    width={110}
                    borderRadius={8}
                />

                <Box width={5} />

                <Box
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box display={"flex"} flexDir={"row"}>
                        <Text color={"pink.400"} fontSize={22}>
                            @{userData.display_name}
                        </Text>
                        <Box width={1}></Box>
                        <Text
                            fontSize={12}
                        >discord activity
                        </Text>
                    </Box>
                    <Text
                        color={"#05caa9"}
                    >Playing {activities[0].name}</Text>
                </Box>
            </Box>;
        } else {
            return <>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    padding={5}
                >
                    <DiscordLogo size={25} />
                    <Box width={1}></Box>
                    <Text
                        color={"#05caa9"}
                    >@{userData.display_name} Offline</Text>
                </Box>
            </>;
        }
    } else {
        return <Spinner />;
    }
};

export default DiscordActivityStream;
