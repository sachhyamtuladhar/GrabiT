import React from 'react'
import HeaderImage from '../../assets/background2.jpg';
import Button  from '../UI/Button/Button';

import {withRouter, Link} from 'react-router-dom'

const headerStyle = {
    width: '100%',
    height: '20rem',
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    color: 'white'
}


const HeaderSection = (props) => {
    let loginButtons = null
    console.log(props.location.pathname)
    if(props.location.pathname == '/')
        loginButtons = (<div>
            <Link
                to= "/login"   
            >
                <Button type="HeaderSection">Login</Button>
            </Link>
            <Link
                to= "/login"   
            >
                <Button type="HeaderSection">Register</Button>
            </Link>
        </div>)

    return (
        <div style={headerStyle} className="d-flex justify-content-around align-items-center">
            <div className="d-flex flex-column ">
                
                <h3>Just GrabiT!</h3>
                {loginButtons}
                
            </div>
            <div />
        </div>
    )
}

export default withRouter(HeaderSection)
