import React, { useEffect } from 'react'
import Header from './components/navBar/navBar/Header.jsx'
/* import app from './styles/App.css'
 */import { Container } from '@mui/material'
import Profile from './Containers/Profile.jsx'
import Users from './components/Users.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from './Containers/Home.jsx'
import Layout from './Containers/Layout.jsx'
import Pokedex from './Containers/Pokedex.jsx'


/* MI propia api */
import Myapi from './Containers/myApi.jsx'

function App() {

  return (

    <>
      
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/profile' element={<Users/>}></Route> 
              <Route path='/pokedex' element={<Pokedex/>}></Route> 
              <Route path='/Myapi' element={<Myapi/>}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      
    </>
    
  )
}

export default App