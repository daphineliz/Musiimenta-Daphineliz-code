import React, { useContext } from 'react'
import { MenuList } from '../data/data'
import Layout from '../components/Layout/Layout'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Cartcontext } from '../context/Context'
import '../styles/Menu.css'

const Menu = () => {
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  
  console.log(Globalstate);



  return (
    <div className='menu'>
      <Layout>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {
            MenuList.map(menu => (


              <Card key={menu.id} sx={{ width: '290px', display: 'flex', m: 2, backgroundColor: 'burlywood'}}>
                <CardActionArea >
                  <CardMedia sx={{ minHeight: '300px' }} component={'img'} src={menu.image} alt={menu.name} />

                  <CardContent>
                    <Typography variant='h5' gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                    <Typography variant='body2' style={{ color: 'black'}}>
                      {menu.description}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      Price: Ush.{menu.price}
                    </Typography>

                    <Button onClick={() => dispatch({ type: "ADD", payload: menu })} sx={{ backgroundColor: 'green', color: 'lightblue' }}>
                      Add to Cart</Button>

                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
      </Layout>
    </div>
  )
}

export default Menu