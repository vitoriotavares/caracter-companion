import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: '#3182CE', // bright blue from the image
      red: '#E53E3E',     // health indicator red
      gray: {
        700: '#2D3748',   // card background
        800: '#1A202C',   // main background
        900: '#171923',   // darker sections
      }
    }
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          backgroundColor: 'brand.gray.700',
          borderRadius: 'lg',
        }
      }
    },
    Button: {
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'blue.500',
          }
        },
        danger: {
          bg: 'brand.red',
          color: 'white',
          _hover: {
            bg: 'red.500',
          }
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'brand.gray.800',
        color: 'white'
      }
    }
  }
})

export default theme
