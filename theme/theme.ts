import { extendTheme } from '@chakra-ui/react';

import '@fontsource/fira-sans';

const theme = extendTheme({
  fonts: {
    heading: `'Fira Sans', sans-serif`,
    body: `'Roboto Condensed', sans-serif`,
  },
});

export default theme;
