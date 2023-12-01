import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../components/images/banner4.jpg';
import '../styles/Home.css'


const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
        <div className='headerContainer'>
          <h1>KFC <i>Banda</i></h1>
          <p>Order Finger Lickin’ meals here and get delivery in 30 minutes
          </p>
          <Link to="/menu">
            <button> ORDER NOW</button>

          </Link>

        </div>

      </div>

    </Layout>
  )
}

export default Home