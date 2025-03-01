import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const MyBooksPage = () => {

    const [newBook, setNewBook] = useState("")
  return (
    <div>

        <Input 
        type='text'
        placeholder='enter book name'
        value={newBook}
        onChange={(e)=>setNewBook(e.target.value)}
        /> 
        <Button>Add Book</Button>

    </div>
  )
}

export default MyBooksPage