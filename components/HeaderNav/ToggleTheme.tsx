import {
  useColorMode,
  Switch,
  FormControl,
  FormLabel,
  Tooltip,
} from '@chakra-ui/react';

const ToggleTheme = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Tooltip label="Toggle theme" fontFamily="body">
      <FormControl display="flex" alignItems="center" w="min-content">
        {/* <FormLabel htmlFor="theme-toggle" mb="0" fontWeight="400" fontSize="sm">
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </FormLabel> */}
        <Switch id="theme-toggle" onChange={toggleColorMode} />
      </FormControl>
    </Tooltip>
  );
};

export default ToggleTheme;
