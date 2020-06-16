import React, { Component } from 'react'

import { Link } from 'react-router-dom'



class Home extends Component {
    render() {
        return (
            <div className="d-flex mt-5 justify-content-around">
                <Link 
                    to='/login'
                    className="btn btn-success"
                >
                    Login
                </Link>
                <Link 
                    to='/register'
                    className="btn btn-success"
                >
                    Signup
                </Link>
            </div>
        )
    }
}

export default Home
