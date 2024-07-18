'use client';
import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

export default function PageHero() {
  // get the pathname from the router
  const pathname = usePathname();
  const pageHeroTitle = pathname.split('/');

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      direction="column"
      py="16"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // borderBottom="2px solid"
      // borderBottomColor="gray.200"
    >
      <Heading
        textTransform="capitalize"
        fontFamily="heading"
        fontSize={{ base: '4xl', md: '6xl' }}
        textShadow="lg"
      >
        {pageHeroTitle}
      </Heading>
    </Flex>
  );
}
