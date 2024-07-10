'use client';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

type PageHeaderProps = {
  copy: string;
  image?: string;
};

export default function PageHeader({ copy, image }: PageHeaderProps) {
  return (
    <Flex
      py="12"
      px={{ base: 20, md: 60, xl: 80 }}
      borderBottom="2px solid"
      borderBottomColor="gray.200"
      direction="column"
      align="center"
      gap="6" //half the amount of y padding - should the standard be increments of 6?
    >
      <Text textAlign="center">{copy}</Text>
      <Image width={{ base: '150px', md: '200px' }} src={image} alt="" />
      {/* <Image
        width={{ base: '250px', md: '500px' }}
        src="/images/portfolio-hero-sketch.png"
      /> */}
    </Flex>
  );
}
