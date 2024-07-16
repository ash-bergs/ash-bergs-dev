'use client';
import { chakra } from '@chakra-ui/react';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

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
        <ProjectCard key={project.id} {...project} />
      ))}
    </MotionGrid>
  );
}
