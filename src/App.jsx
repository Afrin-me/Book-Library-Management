import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from "./pages/Register"
import MyBooksPage from './pages/MyBooksPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mybookspage" element={<MyBooksPage/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App