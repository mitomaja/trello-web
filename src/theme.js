import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, pink, teal, blue } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: blue
      }
    },
    dark: {
      palette: {
        primary: pink,
        secondary: red
      }
    }
  }
  // ...other properties
})

export default theme