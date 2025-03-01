import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../redux/actions/authAction';


const Navbar = () => {

    const user = useSelector((state)=>state.auth.user)
    console.log(state)

    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(signout())
    }
  return (
    <Box
      bg={"blue.300"}
      p={4}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Heading>My Library</Heading>
      <Link to="/">Home</Link>

      <div>
        {user ? (
          <>
            <Heading>{user.email}</Heading>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login"><Button>Login</Button></Link>
          </>
        )}
      </div>
      
      <Link to="/Register">Register</Link>
    </Box>
  );
}

export default Navbar