import Link from "next/link";
import { Box, color, Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

export default function ResourcesCard({
    title,
    description,
    link,
    websiteLink,
    ...rest
}) {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            transition={{ delay: 0.2 }}
        >
            <Box

                border="1px solid"
                borderColor="grassTeal"
                borderRadius="md"
                margin={5}
                padding="10px"
                _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "lg",
                    borderColor: "#fbd38d",
                }}
            >
                <Link href={link}>
                    <a
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
                        <Heading
                            display="inline-block" as="h3" fontSize={20} mb={4}
                            color="linear-gradient(135deg, #6b92b9, #39d3d7)"
                            _hover={{
                                transform: "scale(1.02)",

                            }}>
                            {title}
                        </Heading>
                        <p style={{ marginTop: "1px", color: "grassTeal", color: "grassTeal" }} className="dark:text-gray-400">
                            {description}
                        </p>

                    </a>
                </Link>
            </Box>
        </motion.div>
    );
}