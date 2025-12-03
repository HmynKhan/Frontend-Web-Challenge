import { Box, Button } from '@mui/material'

function Footer() {
  return (

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Button variant="outlined" sx={{borderRadius:5}}>Back</Button>
        <Button variant="contained" color="inherit" sx={{borderRadius:5}}>Next</Button>
      </Box>

  )
}

export default Footer