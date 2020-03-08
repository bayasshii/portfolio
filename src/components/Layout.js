import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar/>
      <Header/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default TemplateWrapper
