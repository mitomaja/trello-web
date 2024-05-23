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