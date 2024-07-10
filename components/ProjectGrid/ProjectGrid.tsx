'use client';
import { Box, Flex, Text, Image, chakra } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

const MotionGrid = chakra(motion.div);

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <MotionGrid
      display="flex"
      py="12"
      px="16"
      // borderBottom="2px solid"
      // borderBottomColor="gray.200"
      flexWrap="wrap"
      justifyContent="center"
      gap="6"
      cursor="pointer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
      }}
    >
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.url}
          style={{
            textDecoration: 'none',
          }}
          isExternal
        >
          <Box
            key={project.id}
            maxW="sm"
            //height="520px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{
              transform: 'scale(1.04)',
            }}
            transition={'transform 0.2s ease-in-out'}
          >
            <Image src={project.image} alt={project.title} />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Text fontSize="2xl" fontWeight="semibold" lineHeight="tight">
                  {project.title}
                </Text>
              </Box>
              <Text mt="2" color="gray.600">
                {project.description}
              </Text>
            </Box>
          </Box>
        </Link>
      ))}
    </MotionGrid>
  );
}
