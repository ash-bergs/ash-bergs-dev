'use client';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Icon,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

//TODO: get all the stack logos and add them to public folder
export default function Contact() {
  return (
    <main>
      <section>
        {/**TODO: make this into a component that takes data like a cms*/}
        <Box px={{ base: 16, md: 48 }} py="12">
          <VStack spacing="6">
            <Heading fontSize="6xl">Let{`\u0027`}s get in touch!</Heading>
            <Text>
              Whether you{`\u0027`}re looking to collaborate, contact me for
              hire, or want to inquire about a piece of art - you can get ahold
              of me in a number of ways
            </Text>
          </VStack>
        </Box>
        <HStack px="16" py="6" gap="4">
          <VStack
            //align="left"
            w="full"
            gap="8"
            border="1px solid"
            borderColor="gray.200"
            px="6"
            py="6"
          >
            <Heading alignSelf="center" fontSize="2xl">
              Professional
            </Heading>
            <Divider />
            <VStack align="left" gap="4">
              <Flex
                alignItems="center"
                gap="2"
                _hover={{
                  // enlarge
                  transform: 'scale(1.04)',
                }}
                transition="all 0.2s ease-in-out"
              >
                <Icon as={FaLinkedin} boxSize="36px" />

                <Link
                  href="https://www.linkedin.com/in/ashleybergsma89/"
                  target="_blank"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize="lg"
                >
                  LinkedIn
                </Link>
              </Flex>
              <Flex
                alignItems="center"
                gap="2"
                _hover={{
                  // enlarge
                  transform: 'scale(1.04)',
                }}
                transition="all 0.2s ease-in-out"
              >
                <Icon as={SiGmail} boxSize="36px" />

                <Link
                  href="mailto:bergsma.ash@gmail.com"
                  target="_blank"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize="lg"
                >
                  bergsma.ash@gmail.com
                </Link>
              </Flex>
            </VStack>
          </VStack>
          <VStack
            //align="left"
            w="full"
            gap="8"
            border="1px solid"
            borderColor="gray.200"
            px="6"
            py="6"
          >
            <Heading alignSelf="center" fontSize="2xl">
              Socials & Gaming
            </Heading>
            <Divider />
            <VStack align="left" gap="4">
              <Flex
                alignItems="center"
                gap="2"
                _hover={{
                  // enlarge
                  transform: 'scale(1.04)',
                }}
                transition="all 0.2s ease-in-out"
              >
                <Icon as={FaGithub} boxSize="36px" />

                <Link
                  href="https://github.com/ash-bergs"
                  target="_blank"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize="lg"
                >
                  Github
                </Link>
              </Flex>
              <Flex
                alignItems="center"
                gap="2"
                _hover={{
                  // enlarge
                  transform: 'scale(1.04)',
                }}
                transition="all 0.2s ease-in-out"
              >
                <Icon as={FaInstagram} boxSize="36px" />

                <Link
                  href="https://www.instagram.com/ramenmermaid/"
                  target="_blank"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize="lg"
                >
                  RamenMermaid
                </Link>
              </Flex>
            </VStack>
          </VStack>
        </HStack>
      </section>
    </main>
  );
}
