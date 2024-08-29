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
                Hello, I’m Ash! I’m a developer and artist based in Michigan who
                enjoys working on the web, and solving unique and people-centric
                problems creatively.
              </Text>

              <Text>
                My experience ranges from mid-to-small sized startups, working
                often with React, Next.js, and standard design and css-in-js
                libraries like Chakra UI and styled-components. I’m familiar
                with services like Contentful for content management, as well as
                a building and managing in-house CMS solutions.
              </Text>

              <Text>
                In a previous role I was able to work frequently with tools like
                Mapbox, and further honed my backend skills managing databases
                built with postgres and utlizing SQL and PostGIS functionality.
              </Text>
              <Text>
                Beyond tech I’ve worn a hat or two in the healthcare and service
                industry, my favorite being my time spent managing the line of a
                kitchen. I enjoyed working on a small team that valued
                communication, and more or less handled problems in the open.
                The skills I built managing inventory, menus, and team members
                has served me in every role that has followed.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </section>
    </main>
  );
}
