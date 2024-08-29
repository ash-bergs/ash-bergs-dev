'use client';
import { Flex, Text, Image, Divider, useColorMode } from '@chakra-ui/react';

type PageHeaderProps = {
  copy: string;
  image?: string;
};

export default function PageHeader({ copy, image }: PageHeaderProps) {
  const { colorMode } = useColorMode();

  const dividerColor =
    colorMode === 'light' ? 'gray.300' : 'rgba(255, 255 , 255, 0.4)';

  return (
    <Flex direction="column" align="center" px="12">
      <Divider borderColor={dividerColor} />
      <Flex
        py="12"
        w={{ base: '100%', md: '50%', xl: '40%' }}
        direction="column"
        align="center"
      >
        <Text textAlign="center" fontSize="xl">
          {copy}
        </Text>
        <Image width={{ base: '300px', md: '300px' }} src={image} alt="" />
      </Flex>
      <Divider borderColor={dividerColor} />
    </Flex>
  );
}
