'use client';
import React from 'react';
import { Flex, Text, Image, chakra, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionImage = chakra(motion.img);
const MotionHeader = chakra(motion.div);

export default function Hero() {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      direction="column"
      py="32"
      gap="12"
    >
      <MotionHeader
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
        }}
      >
        <Text
          fontSize={{ base: '5xl', md: '9xl' }}
          fontWeight="600"
          fontFamily="heading"
          textShadow="md"
        >
          Ash Bergsma
        </Text>
        <Text
          fontSize={{ base: '4xl', md: '5xl' }}
          fontFamily="heading"
          fontWeight="light"
          letterSpacing={{ base: 'none', md: '1.19rem' }}
          mt={{ base: '-5', md: '-10' }}
        >
          Developer & Artist
        </Text>
      </MotionHeader>
      <MotionImage
        width={{ base: '350px', md: '550px' }}
        src="/images/portfolio-hero-sketch.png"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
        }}
      />
    </Flex>
  );
}

// Hero will eventually be controlled by a content type
// that will be fetched from a headless CMS.
// it will take in a title, subtitle, and image.
// img will be a string that will be the path to the image.
// might also include background color and text color.
