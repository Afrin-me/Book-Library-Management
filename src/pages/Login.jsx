import { Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin } from '../redux/actions/authAction'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=()=>{
       dispatch(signin(email,password,navigate))
    }

  return (
    <div>
      <Heading>Please Login</Heading>
      <Input
        placeholder="enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} p={3}>Login</button>
    </div>
  );
}

export default Login