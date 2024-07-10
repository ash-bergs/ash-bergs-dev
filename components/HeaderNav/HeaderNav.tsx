'use client';
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

export default function HeaderNav() {
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
      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={() => console.log('clicked')}
      >
        <svg
          fill="black"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            fill="black"
            d="M3 3h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
          />
        </svg>
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
    </Flex>
  );
}
