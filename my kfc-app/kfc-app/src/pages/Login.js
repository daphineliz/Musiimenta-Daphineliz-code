import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Login.css';
import { Button } from '@mui/material';

const Login = () => {

  const { loginWithRedirect, logout,isAuthenticated } = useAuth0();

  console.log(isAuthenticated)

  return (
    <Layout>
      <div className='login'>
       {isAuthenticated ?<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}  variant="contained" style={{ background: 'black'}}>Logout</Button> :
       <Button onClick={() => loginWithRedirect()}  variant="contained" style={{ background: 'black'}}>Login</Button>}
       {isAuthenticated ? <h2>Welcome to KFC</h2> : <h2>Login to make payments</h2>}
        
      </div>

      

    </Layout>
  );
};

export default Login