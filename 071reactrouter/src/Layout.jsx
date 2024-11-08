import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
//outlet part will changes as the page changes but header and footer will always be same
function Layout(){
  return(
    <>
    <Header />
    <Outlet /> 
     
    <Footer />
    </>
  )
}

export default Layout