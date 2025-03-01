import React,{useState} from 'react'
import { Heading, Input } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/authAction';

const Register = () => {

    const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const dispatch = useDispatch()

        const navigate = useNavigate()
    
        const handleRegister=()=>{
          dispatch(register(email,password, navigate))
        }
  return (
    <div>
        <div>
              <Heading>Please Register</Heading>
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
              <button onClick={handleRegister} p={3}>Register</button>
            </div>
    </div>
  )
}

export default Register