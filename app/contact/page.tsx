'use client';
import {
  Box,
  Flex,
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
import { FaPaperclip } from 'react-icons/fa';
import { FaSteam } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

// there's no need to engineer a whole reusable section here right now
// but I'll define all the styles separately
const ContactCardWrapper = {
  w: 'full',
  gap: '6',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: 'md',
  boxShadow: 'sm',
  px: '6',
  py: '6',
};

const ContactItemWrapper = {
  target: '_blank',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '2',
  _hover: {
    transform: 'scale(1.04)',
  },
  transition: 'all 0.2s ease-in-out',
};

const ContactItemTextProps = {
  fontFamily: 'heading',
  fontWeight: '600',
  fontSize: 'lg',
};

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
        <Flex direction={{ base: 'column', md: 'row' }} px="40" gap="6">
          <VStack {...ContactCardWrapper}>
            <Heading alignSelf="center" fontSize="2xl">
              Professional
            </Heading>
            <Divider />
            <VStack align="left" gap="4">
              <Flex
                as={Link}
                href="https://github.com/ash-bergs"
                {...ContactItemWrapper}
              >
                <Icon as={FaGithub} boxSize="36px" />
                <Text {...ContactItemTextProps}>Github</Text>
              </Flex>
              <Flex
                as={Link}
                href="https://www.linkedin.com/in/ashleybergsma89/"
                {...ContactItemWrapper}
              >
                <Icon as={FaLinkedin} boxSize="36px" />
                <Text {...ContactItemTextProps}>LinkedIn</Text>
              </Flex>
              <Flex
                as={Link}
                href="mailto:bergsma.ash@gmail.com"
                {...ContactItemWrapper}
              >
                <Icon as={SiGmail} boxSize="36px" />
                <Text {...ContactItemTextProps}>bergsma.ash@gmail.com</Text>
              </Flex>
            </VStack>
          </VStack>
          <VStack {...ContactCardWrapper}>
            <Heading alignSelf="center" fontSize="2xl">
              Socials & Gaming
            </Heading>
            <Divider />
            <VStack align="left" gap="4">
              <Flex
                as={Link}
                href="https://github.com/ash-bergs"
                {...ContactItemWrapper}
              >
                <Icon as={FaSteam} boxSize="36px" />
                <Text {...ContactItemTextProps}>Steam</Text>
              </Flex>
              <Flex
                as={Link}
                href="https://www.instagram.com/ramenmermaid/"
                {...ContactItemWrapper}
              >
                <Icon as={FaInstagram} boxSize="36px" />
                <Text {...ContactItemTextProps}>RamenMermaid</Text>
              </Flex>
              <Flex
                as={Link}
                href="https://dev.to/ash_bergs"
                {...ContactItemWrapper}
              >
                <Icon as={FaPaperclip} boxSize="36px" />
                <Text {...ContactItemTextProps}>Blog</Text>
              </Flex>
            </VStack>
          </VStack>
        </Flex>
      </section>
    </main>
  );
}
