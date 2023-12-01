import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
    <Layout>
        <Box sx={{my: 5, ml:10, "& h4": {fontWeight: 'bold', mb: 2} }}>
          <Typography variant='h4'>
            Contact KFC Banda
          </Typography>
          <p>
            Are you travelling to the East? Don't wait for Namawojjolo to enjoy some kikoko! Drive through KFC Banda, grab your delicious chicken and enjoy
            </p>
        </Box>
        <Box sx= {{m:3, width:"600px", ml:10, "@media (max-width:600px)":{
          width: "300px"
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
<SupportAgentIcon sx={{color: 'red', pt: 1}}/>  08078 989537 (tollfree)
                  </TableCell>
                 
                </TableRow>
                <TableRow>
                <TableCell>
<EmailIcon sx={{color: 'skyblue', pt: 1}}/>  help@kfcbanda.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
<CallIcon sx={{color: 'green', pt: 1}}/>  0778 989537
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
<PublicIcon sx={{color: 'grey', pt: 1}}/>   www.kfc.ug
                  </TableCell>
                </TableRow>
              </TableBody>

            </Table>

          </TableContainer>
        </Box>
    </Layout>
    </div>
  )
}

export default Contact