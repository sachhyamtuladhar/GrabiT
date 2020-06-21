import React from 'react'

import Navbar from '../components/UI/Navbar/Navbar'
import Footer from '../components/UI/Footer/Footer'

const Layout = (props) => {
    let navbar = <Navbar />
    if (props.showNavBar)
        navbar = <Navbar isVisible />
    
    return (
        <div>
            {navbar}
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout
