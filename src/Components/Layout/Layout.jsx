import React from 'react'
import NaveBer from '../NaveBer/NaveBer';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <NaveBer/>
      <div className='content'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout