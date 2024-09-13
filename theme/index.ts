import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/inter/variable.css'

const styles = {
  global: (props: any) => ({
    body: {
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
    },
  }),
}

const colors = {
  green: {
    50: '#e0f2f1',
    100: '#b9fbc0',
    200: '#8dff96',
    300: '#5bff6c',
    400: '#2bfc39',
    500: '#1CC855', // Primary green color
    600: '#00b226',
    700: '#008c1e',
    800: '#005c13',
    900: '#003a08',
  },
}

const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles,
    colors,
    fontSizes,
    components: {
      ...components,
      Button: {
        baseStyle: {
          fontWeight: 'bold',
        },
        variants: {
          solid: (props: any) => ({
            bg: props.colorMode === 'dark' ? 'green.500' : 'green.500',
            color: 'white',
            _hover: {
              bg: props.colorMode === 'dark' ? 'green.600' : 'green.400',
            },
          }),
          outline: (props: any) => ({
            borderColor: props.colorMode === 'dark' ? 'green.500' : 'green.500',
            color: props.colorMode === 'dark' ? 'green.500' : 'green.500',
            _hover: {
              bg: props.colorMode === 'dark' ? 'green.600' : 'green.50',
            },
          }),
        },
      },
    },
  },
  baseTheme
)

export default theme
