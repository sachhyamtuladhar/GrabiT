import React from 'react'
import HeaderImage from '../../assets/background2.jpg';
import Button  from '../UI/Button/Button';

import {withRouter, Link} from 'react-router-dom'

import { connect } from 'react-redux'


const headerStyle = {
    width: '100%',
    height: '20rem',
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    color: 'white'
}



let scrollCheck = el => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

const HeaderSection = (props) => {
    let loginButtons = null

    
    if(props.location.pathname == '/' && !props.user)
        loginButtons = (<div>
            <Link
                to= "/login"   
            >
                <Button type="HeaderSection">Login</Button>
            </Link>
            <Link
                to= "/register"   
            >
                <Button type="HeaderSection">Register</Button>
            </Link>
        </div>)

    return (
        <div style={headerStyle} className="d-flex justify-content-around align-items-center" id="headerSection">
            <div className="d-flex flex-column ">
                
                <h3>Just GrabiT!</h3>
                {loginButtons}
                
            </div>
            <div />
        </div>
    )
}

const mapStatetoProps = state => {
    return{
        user: state.auth.user,
    }
}

export default  withRouter(connect(mapStatetoProps)(HeaderSection))
