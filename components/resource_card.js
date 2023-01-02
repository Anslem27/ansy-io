import Link from "next/link";
import { Box, Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function ResourcesCard({
    title,
    description,
    link,
    websiteLink,
    ...rest
}) {
    return (
        <Box
           
            border="1px solid"
            borderColor="grassTeal"
            borderRadius="md"
            margin={5}
            padding="20px"
            _hover={{
                transform: "scale(1.02)",
                boxShadow: "lg"
            }}
        >
            <Link href={link}>
                <a

                    className="dark:border-zinc-800 rounded-xl"
                    {...rest}
                    target="__blank"
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "grassTeal",
                            color: "grassTeal",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                marginTop: "1px",
                                color: "grassTeal",
                                color: "grassTeal",
                            }}
                            className="dark:text-gray-400"
                        >
                            {websiteLink}
                        </span>

                        <ChevronRightIcon />
                    </div>
                    <Heading display="inline-block" as="h3" fontSize={20} mb={4} color="linear-gradient(135deg, #6b92b9, #39d3d7)">
                        {title}
                    </Heading>
                    <p style={{ marginTop: "1px", color: "grassTeal", color: "grassTeal" }} className="dark:text-gray-400">
                        {description}
                    </p>

                </a>
            </Link>
        </Box>
    );
}