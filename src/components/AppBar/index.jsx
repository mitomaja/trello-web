import Box from '@mui/material/Box'
import SelectMode from '../../components/SelectMode'
function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: '60px',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center'
      }}>
      <SelectMode/>
    </Box>
  )
}

export default AppBar
