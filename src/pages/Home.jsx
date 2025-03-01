import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"

const Home = () => {

    const [books, setBooks] = useState("")
    const [error, setError] = useState(null)

    const user = useSelector((state)=>state.auth.user)
    console.log(user)

    const fetchbooks = async()=>{
        const response = await axios.get(`http://localhost:3000/books`)
        
        //   .then((response) => setBooks(response.data))
          console.log(response.data)

        //   .catch((error) => setError(error, "error occur in fetching books"));
    }
   

    useEffect(()=>{
    fetchbooks()
    }, [])
  return (
    <>
      <div>{user && <h1>Welcome {user.email}</h1>}</div>
      <Box>
       {
        // books.map((book)=>{
        //     return (
        //         <>
        //         </>
        //     )
        // })
       }
      </Box>
    </>
  );
}

export default Home