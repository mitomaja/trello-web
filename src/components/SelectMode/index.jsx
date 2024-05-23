import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
function SelectMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="select-dark-mode-label">Mode</InputLabel>
        <Select
          labelId="select-dark-mode-label"
          id="select-dark-mode"
          value={mode}
          onChange={handleChange}
          label="Mode">
          <MenuItem value="light">
            <Box sx = {{display: 'flex', alignItems: 'center', gap: '8px'}} >
              <LightModeIcon fontSize='24px'/> Light </Box> 
          </MenuItem> 
          <MenuItem value="dark">
            <Box sx = {{display: 'flex', alignItems: 'center', gap: '8px'}} >
              <DarkModeIcon fontSize='24px'/> Dark </Box>
          </MenuItem>
          <MenuItem value="system"> 
            <Box sx = {{display: 'flex', alignItems: 'center', gap: '8px'}} >
              <SettingsBrightnessIcon fontSize='24px'/> System </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectMode
