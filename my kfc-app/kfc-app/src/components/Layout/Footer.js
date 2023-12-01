import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
   <>
   <Box sx= {{textAlign: 'center', bgcolor: '#A1A19A', color:'white', p:1}}>

    <Box sx={{my:3, "& svg": {
      fontSize: "60px",
      cursor: "pointer",
      mr: 2,
    },
    "& svg: hover":{
      color: 'goldenrod',
      transform: 'translatex(5px)',
      transition:'all 400ms',
    }
     }}>
     {/*icons*/}
     <InstagramIcon/>
     <TwitterIcon />
     <YouTubeIcon />
    </Box>
    <Typography variant="h5" sx={{"@media (max-width:600px)":{fontSize: "1rem",}}}>
        All Rights Reserved &copy; KFC <i><b>Banda</b></i>
    </Typography>
   </Box>
   </>
  )
}

export default Footer