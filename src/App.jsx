import { useState } from 'react'
import './App.css'
import { CommonData } from './Common'
import AppForm from './AppForm'
import AppNav from './AppNav'
import Users from './Users'
import { Route, Routes, Link} from 'react-router-dom'


function App() {
  

  return (
    <CommonData>
            <AppNav></AppNav>
            <Routes>
              <Route path='/' Component={AppForm}></Route>
              <Route path='/user-details' Component={Users}></Route>
            </Routes>
    </CommonData>
  )
}

export default App
