import React, { Component } from 'react'
import axios from 'axios'

import SignupForm from '../components/SignupForm/SignupForm'


class Login extends Component {
    state = {
        error: false,
        title: 'hello'
    }


    componentDidMount(){
        axios.get('/login')
            .then(res=>{
                this.setState({
                    title: res.data.title
                })
                this.checkPurchasable(res.data)
            }).catch(error=>{
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-sm-4"></div>

                <div className='card col-sm-4 mx-5' >
                        <div className="card-body">
                            <SignupForm title={this.state.title} />
                        </div>
                </div>

                <div className="col-sm-4"></div>

            </div>
        )
    }
}

export default Login
