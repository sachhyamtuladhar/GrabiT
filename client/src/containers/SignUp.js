import React, { Component } from 'react'

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actionCreators from '../store/actions'

import Form from '../components/Form/Form'

import Spinner from '../components/UI/Spinner/Spinner'



class SignUp extends Component {
    state={
        signupForm: {
            name: {
                title:"Name",
                id: "",
                type: 'text',
                placeholder: 'Your Name',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 7
                },
                validity: false,
                value: '',
                touched: false
            },
            email: {
                title:"Email",
                id: "email",
                type: 'email',
                placeholder: 'Your E-Mail',
                validation: {
                    required: true,
                    minLength: 5,
                    isEmail: true
                },
                validity: false,
                value: '',
                touched: false
            },
            password: {
                title:"Password",
                id: "password",
                type: 'password',
                placeholder: 'Your E-Mail',
                validation: {
                    required: true,
                    minLength: 5
                },
                validity: false,
                value: '',
                touched: false
            }
        },
        formIsValid: false
 
    }

    updateForm = (updatedForm) => {
        this.setState({
            signupForm: updatedForm
        })
    }
    
    render(){
        let form = <Form 
                        updateForm={this.updateForm}
                        submitForm = {(formData)=>this.props.onSignup(this.props.history, formData)}
                        formInputs = {this.state.signupForm}
                        onCancel = {this.props.history.goBack}
                        title="Register"
                    />

        if(this.props.loading){
            form = <Spinner />
        }
        return (
            <div className="d-flex justify-content-center mt-5">
                

                <div className='card mb-5' >
                        <div className="card-body">
                            {form}
                            <hr />
                            <div className="d-flex justify-content-center">
                                Already have an Account?
                                <Link to="/login" className="ml-2">Sign In</Link>
                            </div>
                        </div>

                </div>

                

            </div>
        )

    }
    
}

const mapDispatchtoProps = dispatch => {
    return {
        onSignup: (history, formdata) => dispatch(actionCreators.signup(history, formdata)),
    }
}

const mapStatetoProps = state => {
    return{
        loading: state.auth.isLoading
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SignUp)
