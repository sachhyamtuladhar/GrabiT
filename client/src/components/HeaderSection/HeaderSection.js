import React from 'react'
import Button  from '../UI/Button/Button';

import { Waypoint } from 'react-waypoint';
import { withRouter, Link } from 'react-router-dom'

import { connect } from 'react-redux'

import styles from './HeaderSection.module.scss'
import * as actions from '../../store/actions/index'






const HeaderSection = (props) => {
    let loginButtons = null

    
    if(props.location.pathname === '/' && !props.user)
        loginButtons = (<div className="d-flex">
            <Link
                to= "/login" 
                className={styles.defaultLink}  
                >
                <Button type="HeaderSection">Login</Button>
            </Link>
            <Link
                to= "/register"   
                className={styles.defaultLink}  
            >
                <Button type="HeaderSection">Register</Button>
            </Link>
        </div>)

    return (
        <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
            <div className={` ${styles.headerStyle} d-flex justify-content-around align-items-center`} id="headerSection">
                <div className="d-flex flex-column">
                    
                    <h1>Just GrabiT!</h1>
                    {loginButtons}
                    
                </div>
                <div />
            </div>
        </Waypoint>
    )
}

const mapStatetoProps = state => {
    return{
        user: state.auth.user
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onLeave: ()=>dispatch(actions.showNavbar()),
        onEnter: ()=>dispatch(actions.hideNavbar())
    }
}

export default  withRouter(connect(mapStatetoProps, mapDispatchtoProps)(HeaderSection))
