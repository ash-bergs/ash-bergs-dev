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
        <Box px={{ base: 20, md: 40, lg: 80 }} py="12">
          <VStack spacing="6">
            <Text>
              Hello, I’m Ash! I’m a developer and illustrator based in Grand
              Rapids, Michigan. I enjoy working on the web to create accessible
              and thoughtfully designed experiences, but I’m also motivated to
              create solutions for complex problems with all of the skills in my
              toolbox.
            </Text>

            <Text>
              I have experience working in small and mid-sized startups in both
              telecommunications and agri-tech. In these roles I worked often
              with JavaScript and React, but also played a significant role in
              building and maintaining backend databases using postgres, sql,
              and postgis.
            </Text>

            <Text>
              Beyond tech I’ve had a wealth of experience in the service
              industry, where I worked as head cook in several kitchens. While
              that may not seem immediately transferable - the skills I built
              while creating dishes, ordering inventory, and managing a small
              team to pull it all off have continued to serve me when deadlines
              are tight and team morale is low. It also imparted a strong team
              player mentality that I consider a big part of who I am.
            </Text>
            <Text>
              I’m also a lifelong artist, doing my best to find the beauty in
              the small things. I focus on watercolor and guoache in physical
              mediums, and Adobe Illustrator in digital medium. You can view
              some of my work on this site.
            </Text>
          </VStack>
        </Box>
      </section>
    </main>
  );
}
