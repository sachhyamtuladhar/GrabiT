import React from 'react'

import Navbar from '../components/UI/Navbar/Navbar'
import Footer from '../components/UI/Footer/Footer'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout
