import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Clients from './Pages/Clients/Clients';
import Products from './Pages/Products/Products';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {

  const router = createBrowserRouter([
    { 
    path: '', 
    element: <Layout/>, 
    children: [
      {path: '', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'products', element: <Products/>},
      {path: 'clients', element: <Clients/>},
      {path: 'contacts', element: <Contacts/>},
      {path: '*', element: <NotFound/>}
  ]}])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App