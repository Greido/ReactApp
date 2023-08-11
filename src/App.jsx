import React, { useEffect } from 'react'
import Header from './components/navBar/navBar/Header.jsx'
/* import app from './styles/App.css'
 */import { Container } from '@mui/material'
import Profile from './Containers/Profile.jsx'
import Users from './components/Users.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from './Containers/Home.jsx'
import Layout from './Containers/Layout.jsx'



//Redux
import { Provider, useDispatch } from 'react-redux'
import { store } from './store/index.js'


//Actions of Redux

import {addTask} from './store/taskSlice.js'


function App() {
  

  return (

    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/'element={<Home/>}></Route>
              <Route path='/profile' element={<Users/>}></Route>  
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>  
    </>
    
  )
}

export default App