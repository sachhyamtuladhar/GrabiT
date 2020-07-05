import React, { Component } from 'react'

import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

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

    componentDidMount(){
        this.props.onClearError();
    }

    updateForm = (updatedForm, formValidity) => {
        this.setState({
            signupForm: updatedForm,
            formIsValid: formValidity
        })
    }
    
    render(){
        let redirect = null

        if(this.props.user)
            redirect = <Redirect to='/' />

        let form = <Form 
                        updateForm={this.updateForm}
                        submitForm = {(formData)=>this.props.onSignup(this.props.history, formData)}
                        formInputs = {this.state.signupForm}
                        onCancel = {this.props.history.goBack}
                        title="Register"
                        error={this.props.error}
                        formIsValid = {this.state.formIsValid}
                    />

        if(this.props.loading){
            form = <Spinner />
        }
        return (
            <div className="d-flex justify-content-center mt-5">
                {redirect}

                <div className='card mb-5 custom-form-width' >
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
        onClearError: () => dispatch(actionCreators.clearAuthError()),
        onSignup: (history, formdata) => dispatch(actionCreators.signup(history, formdata))
    }
}

const mapStatetoProps = state => {
    return{
        loading: state.auth.isLoading,
        error: state.auth.error,
        user: state.auth.user
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SignUp)
