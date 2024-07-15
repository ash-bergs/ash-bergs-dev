import { extendTheme } from '@chakra-ui/react';
import '@fontsource/fira-sans';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Roboto Condensed', sans-serif`,
  },
};

const theme = extendTheme({ config });

export default theme;
