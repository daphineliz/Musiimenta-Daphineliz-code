import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        p: 2,
        "& h4": {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem',
        },
        "& p": {
          textAlign:'justify'
        },
        "@media(max-width: 600px)": {
          mt: 0,
          "& h4":{
            fontSize: '1.5rem',
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome to KFC Banda
        </Typography>
        <p>
        KFC Restaurant Banda chain known for its buckets of fried chicken, plus combo meals & sides.<br/>
<strong>Service options:</strong> Dine-in · Drive-through · No-contact delivery<br/>
<strong>Located in:</strong> Shell<br/>
<strong>Address:</strong> Kampala-Jinja Hwy, Kampala
 </p>
        <br/>

        <p>
        KFC Corporation, doing business as Kentucky Fried Chicken, is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain after McDonald's, with 22,621 locations globally in 150 countries as of December 2019. Wikipedia
Founders: Colonel Sanders, Pete Harman
Founded: September 24, 1952, Salt Lake City, Utah, United States
Headquarters: Louisville, Kentucky, United States

        </p>
        <br/>
        <p>
        KFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin’ good recipe more than 75 years ago—a list of 11 secret herbs and spices scratched out on the back of his kitchen door. Today, we still follow his formula for success, with real cooks breading and freshly preparing our delicious chicken by hand in more than 27,000 restaurants in over 145 countries and territories around the world.

Colonel Sanders was a born innovator and founded KFC on values like hard work, hospitality and generosity that still live large in the KFC brand today. We believe in making chicken the right way, by using quality ingredients and freshly preparing them by hand every day. We also proudly welcome everyone to enjoy a seat at our table. From our more than 800,000 Team Members to our guests around the world, KFC treats everyone with generosity and like family.
        </p>
        
      </Box>
    </Layout>
    </div>
  )
}

export default About