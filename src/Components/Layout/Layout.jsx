import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from './../Footer/Footer';


const Layout = () => {
  return (

    <div>

    <Navbar/>

    <Outlet></Outlet> 

    <Footer/>
    
    </div>

)
}

export default Layout