'use client';
import { Box, Flex, Heading, Tag, Text, useColorMode } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { Project } from '@/data/projects';

const ProjectCard = (project: Project) => {
  const { colorMode } = useColorMode();

  return (
    <Link
      href={project.url}
      style={{
        textDecoration: 'none',
      }}
      isExternal
    >
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="sm"
        transition="all 0.5s"
        bgImage={`linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.25)), url(${project.image})`}
        bgSize="cover"
        bgPosition="center"
        color="white"
        textDecor="none"
        p="2"
        _hover={{
          transform: 'rotate(0) scale(1.04)',
          color: colorMode === 'light' && '#0d2c3f',
          transition: 'all 0.5s ease-in-out',
          //color: 'purple',
          // I think this needs to just be applied to the tag container
          // but we'll need to introduce tags
          // '.tag': {
          //   bg: '#3c3163',
          //   color: 'white',
          // },
          '::before, ::after': {
            transform: 'scale(1)',
          },
        }}
        _before={{
          content: '""',
          transform: 'scale(0)',
          transformOrigin: 'top left',
          borderRadius: '50%',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          zIndex: -5,
          transition: 'all 0.5s ease-in-out',
          //bg: 'blue.500',
          bg:
            colorMode === 'dark'
              ? 'rgba(21, 123, 165, 0.7)'
              : 'rgba(74,191,226,0.7)', // blue with opacity
          width: '250%',
          height: '250%',
        }}
        _after={{
          content: '""',
          transform: 'scale(0)',
          transformOrigin: 'top left',
          borderRadius: '50%',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          zIndex: -5,
          transition: 'all 0.5s ease-in-out',
          width: '200%',
          height: '200%',
          bg:
            colorMode === 'dark'
              ? 'rgba(21, 123, 165, 0.7)'
              : 'rgba(74,191,226,0.7)',
        }}
        maxW="sm"
        height="360px"
      >
        <Flex direction="column" p="6" h="full" justifyContent="flex-end">
          <Box display="flex">
            <Heading fontSize="2xl" fontWeight="semibold" textAlign="center">
              {project.title}
            </Heading>
          </Box>
          <Text mt="2">{project.description}</Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProjectCard;
