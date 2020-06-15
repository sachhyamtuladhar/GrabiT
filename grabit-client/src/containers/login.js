import React, { Component } from 'react'
import axios from 'axios'

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
            <h1>{this.state.title}</h1>
        )
    }
}

export default Login
