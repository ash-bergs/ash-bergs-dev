'use client';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { IoClose } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import ToggleTheme from './ToggleTheme';

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="black"
      borderBottom="2px solid"
      borderBottomColor="gray.200"
    >
      <Flex align="center" mr={5}>
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
            Ash Bergs
          </Text>
        </Link>
      </Flex>
      <Box display={{ base: 'block', md: 'none' }}>
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
          <MenuList>
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
      </Box>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        gap="2"
      >
        <Link href="/work">Work</Link>
        <Link href="/art">Art</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </Flex>
      <ToggleTheme />
    </Flex>
  );
}
