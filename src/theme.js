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

import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { pink } from '@mui/material/colors'
import { blue } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: pink[400]
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: blue[500]
    }
  }
})

export default theme