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
              Hi! I’m Ash, and I’m a developer and illustrator based in Grand
              Rapids, Michigan. I love working on the web, creating accessible
              and appealing visual experiences, and solving complex problems. I
              have experience working in small and large startups in
              telecommunications and agri-tech.
            </Text>
            <Text>
              The items in my frontend toolbox are especially honed, having
              spent more than 3 years working professionally with JavaScript and
              TypeScript, React, and popular frameworks like Next. I’ve built
              and maintained various frontend marketing and API documentation
              websites, where I got exposure to SEO, Open API specs, and
              accessibility best practices.
            </Text>
            <Text>
              I’ve also spent 2 years working in the backend using JavaScript
              ORMs, and developing knowledge using relational databases and SQL.
              I love the structure that can be found in this area of
              development, and welcome the opportunity to continue learning.
            </Text>
            {/* <Text>
              I came to development unconventionally in 2020. Before I had been
              working in kitchens where I designed menus, and managed small
              teams to prepare and execute them on a large scale. When the
              ensuing pandemic hit the restaurant industry I was forced to make
              some decisions, so I signed up for an exhaustive 10 month full
              stack web development bootcamp.
            </Text> */}
            {/* <Text>
              As a child of the 90’s I had a natural interest in the web, so
              this move was one I had actually already been contemplating.
              During that time I was exposed to Python, JavaScript, React, Redux
              and Node, and spent time building real projects on small teams
              with all of them.
            </Text> */}
            <Text>
              On top of being a well-equipped developer, I’m a lifelong artist.
              I focus on watercolor and guoache in physical mediums, and Adobe
              Illustrator in digital medium. You can view some of my work on
              this site, including a series of custom mascot icons I created in
              my last role.
            </Text>
          </VStack>
        </Box>
      </section>
    </main>
  );
}
