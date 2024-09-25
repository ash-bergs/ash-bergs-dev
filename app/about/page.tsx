'use client';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import PageHero from '@/components/PageHero';

//TODO: get all the stack logos and add them to public folder
export default function About() {
  return (
    <main>
      <PageHero />
      <section>
        {/**TODO: make this into a component that takes data like a cms - copy */}
        <Flex justify="center">
          <Box w={{ base: '70%', md: '50%', xl: '40%' }} py="12" fontSize="xl">
            <VStack spacing="6">
              <Text>
                Hello, I’m Ash! I’m a{' '}
                <span style={{ fontWeight: 'bold' }}>
                  developer and artist based in Michigan
                </span>{' '}
                who enjoys working on the web, and solving unique and
                people-centric problems.
              </Text>

              <Text>
                My experience ranges from mid-to-small sized startups, working
                often with{' '}
                <span style={{ fontWeight: 'bold' }}>
                  React, Next.js, and standard design libraries like Chakra UI
                  and styled-components
                </span>
                . I also have several years of experience with{' '}
                <span style={{ fontWeight: 'bold' }}>Mapbox</span> and building
                rich geo-spatial experiences.
              </Text>

              <Text>
                My backend experience includes working with Postgresql, PostGIS,
                and SQL to build and manage databases, while using Fastify and
                Prisma ORM to build robust APIs for frontend applications. I
                also have experience using CMS platforms like Contentful, as
                well as a building and managing in-house CMS solutions.
              </Text>
              <Text>
                I enjoy working on a small teams that value communication, and
                work in the open. I have introduced Notion and helped past teams
                apply it to project management, knowledge sharing, and
                asynchronous communication. This passion extends to my habit of
                maintained documentation and encouraging testing within
                projects.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </section>
    </main>
  );
}
