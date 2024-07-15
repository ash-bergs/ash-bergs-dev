import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { GlobalStyleProps } from '@chakra-ui/theme-tools';
import '@fontsource/fira-sans';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Roboto Condensed', sans-serif`,
  },

  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
      },
    }),
  },
});

export default theme;
