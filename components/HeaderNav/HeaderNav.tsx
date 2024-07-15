'use client';
import React, { useState } from 'react';
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { IoClose } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import ToggleTheme from './ToggleTheme';

export default function HeaderNav() {
  const { colorMode } = useColorMode();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Flex
      as="nav"
      align="center"
      gap="4"
      padding="1.5rem"
      justifyContent={{ base: 'space-between', md: 'initial' }}
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      boxShadow="0px 5px 5px rgba(0, 0, 0, 0.05)"
    >
      <Flex minWidth="110px">
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
            Ash Bergs
          </Text>
        </Link>
      </Flex>

      {isLargerThan800 && <DesktopNav />}
      {!isLargerThan800 && <MobileNav />}
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      alignItems="center"
      w="full"
      justifyContent="space-between"
    >
      <Flex gap="4" fontSize="xl" fontFamily="heading">
        <Link href="/work">Work</Link>
        <Link href="/art">Art</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </Flex>
      <ToggleTheme />
    </Flex>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  return (
    <Flex gap="4" display={{ base: 'flex', md: 'none' }}>
      <ToggleTheme />
      <Menu isOpen={isOpen}>
        <MenuButton
          as="div"
          display={{ base: 'block', md: 'none' }}
          onClick={handleToggleMenu}
        >
          <IconButton
            icon={isOpen ? <IoClose /> : <IoMenu />}
            variant="outline"
            aria-label={`Toggle Menu ${isOpen ? 'close' : 'open'}`}
          />
        </MenuButton>
        <MenuList fontSize="xl" fontFamily="heading">
          <MenuItem as={Link} href="/work">
            Work
          </MenuItem>
          <MenuItem as={Link} href="/art">
            Art
          </MenuItem>
          <MenuItem as={Link} href="/about">
            About
          </MenuItem>
          <MenuItem as={Link} href="/contact">
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
