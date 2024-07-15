import { useColorMode, Switch, FormControl, FormLabel } from '@chakra-ui/react';

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center" w="min-content">
      <FormLabel htmlFor="theme-toggle" mb="0" fontWeight="400" fontSize="sm">
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </FormLabel>
      <Switch id="theme-toggle" size="md" onChange={toggleColorMode} />
    </FormControl>
  );
};

export default ToggleTheme;
