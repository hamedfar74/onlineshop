import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <div>
      <Box sx={{ display: 'flex',minHeight:"80vh",width:"100%",justifyContent:"center",alignItems:"center"}}>
        <CircularProgress />
      </Box>
    </div>
  )
}

export default Loader