import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false} legacyBehavior>
      <Link
        p={1}
        borderRadius="3"
        bg={active ? 'yellow.300' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"

      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"

      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          {/*  <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem> */}
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
          <LinkItem
            href="/git"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">

          {/* Theme Toggle Button */}
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref legacyBehavior>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/blog" passHref legacyBehavior>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref legacyBehavior>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/games" passHref legacyBehavior>
                  <MenuItem as={Link}>Game memoir</MenuItem>
                </NextLink>
                <NextLink href="/resources" passHref legacyBehavior>
                  <MenuItem as={Link}>Resources</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  href="/git"
                >
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar
