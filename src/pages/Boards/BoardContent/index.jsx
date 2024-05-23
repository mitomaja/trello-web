import React from 'react'
import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'pink',
        width: '100%',
        height: 'calc(100vh - 60px - 50px)',
        display: 'flex',
        alignItems: 'center'
      }}
    > Hello</Box>
  )
}

export default BoardContent
