import React, {Component} from 'react'
import {
     Form,
   
  } from 'reactstrap';


import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import * as actionCreators from '../../store/actions/'

import CustomInput from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import styles from './LoginForm.module.scss'

class LoginForm extends Component {
    state={
        loginForm: {
            email: {
                title:"Email",
                id: "email",
                config: {
                    type: 'email',
                    placeholder: 'Enter Your Email Address',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    isEmail: true
                },
                validity: false,
                touched: false,
                login: true
            },
            password: {
                title:"Password",
                id: "password",
                config:{
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                validity: false,
                touched: false,
                login: true

            }
        },
        formIsValid: false,
        loading: false
    }

    componentDidMount(){
        this.props.onClearError();
    }

    submitHandler = (e) => {
        this.setState({
            loading: true
        })
 

        e.preventDefault()

        const formData = {}

        Object.keys(this.state.loginForm).forEach((input)=>{
            formData[input] = this.state.loginForm[input].value
        })

        this.props.onLogin(this.props.history, formData)

        // axios.post('/users/login', formData)
        //     .then(res=>{

        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         })
        //         this.props.onStoreToken(res.data.token, res.data.user)
        //         this.props.history.push('/')
        //     })
        //     .catch(e=>{
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         })
        //         console.log(e)
        //     })
    }

    chackValidity = (value, rules) => {
        let isValid = true;

        if(!rules)
            return

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length > rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length < rules.maxLength && isValid;
        }

        if(rules.isEmail){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = re.test(String(value).toLowerCase());
        }

        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const upDatedForm =  {...this.state.loginForm}
        const upDatedFormEntry =  {...upDatedForm[inputIdentifier]}

        upDatedFormEntry.value = event.target.value
        upDatedFormEntry.validity = this.chackValidity(upDatedFormEntry.value, upDatedFormEntry.validation)
        upDatedFormEntry.touched = true
        upDatedForm[inputIdentifier] = upDatedFormEntry

        
        let formIsValid = true
        
        Object.keys(upDatedForm).forEach(ele=>{
            formIsValid = upDatedForm[ele].validity && formIsValid
        })
        

        this.setState({
            loginForm: upDatedForm,
            formIsValid
        })
    

    }


    render(){

        const formFields = Object.keys(this.state.loginForm).map(
            (inp)=>(
                    <div className="d-flex d-flex py-1 px-2" key={this.state.loginForm[inp].title}>
                        <FontAwesomeIcon icon={faUser} className="d-flex  justify-content-center align-self-center ml-2" />
                        <CustomInput
                            inputtype="input"
                            
                           
                            name={this.state.loginForm[inp].name}
                            id={this.state.loginForm[inp].id}
                            config={this.state.loginForm[inp].config}
                            login={this.state.loginForm[inp].login}
    
                            invalid={!this.state.loginForm[inp].validity}
                            touched={this.state.loginForm[inp].touched}
    
                           
                            changeHandler={(e)=>this.inputChangeHandler(e, inp)}
                        />
                    </div >
                  
            )
        )

        let error = null
        if(this.props.error){
            error = <div className="alert alert-danger">{this.props.error.message}</div>
        }

        return (      
                <Form className="form mb-5">
                    <div className="d-flex flex-column">
                        {error}
                        <div className="shadow  mb-5 bg-white rounded p-0">
                            {formFields}
                        </div>
                        <Button click={this.submitHandler} type="Login" disabled={!this.state.formIsValid}>Login</Button>
                        <Link to="/forgot" className={styles.ForgotLink}>Forgot Password?</Link>
                        <Link to="/register" className={styles.ForgotLink}>Create new Account</Link>
                    </div>
                </Form>
        )
    }
}

const mapStatetoProps = state =>{
    return {
        error: state.auth.error
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onLogin: (history, formdata) => dispatch(actionCreators.login(history, formdata)),
        onClearError: () => dispatch(actionCreators.clearAuthError())
    }
}


export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(LoginForm))
