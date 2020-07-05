import React from 'react'

import {
    Container, Col, Form,
    FormGroup, Label, 
    
} from 'reactstrap';

import CustomInput from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const submitHandler = (submitForm, formInputs, e) => {
  

    e.preventDefault()

    const formData = {}

    Object.keys(formInputs).forEach((input)=>{
        formData[input] = formInputs[input].value
    })

 
    submitForm(formData)
 
}

const chackValidity = (value, rules) => {
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

const inputChangeHandler = (event, inputIdentifier, upDateForm, formInputs) => {
    const upDatedForm =  {...formInputs}
    const upDatedFormEntry =  {...upDatedForm[inputIdentifier]}

    upDatedFormEntry.value = event.target.value
    upDatedFormEntry.validity = chackValidity(upDatedFormEntry.value, upDatedFormEntry.validation)
    upDatedFormEntry.touched = true
    upDatedForm[inputIdentifier] = upDatedFormEntry

    
    let formIsValid = true
    
    Object.keys(upDatedForm).forEach(ele=>{
        formIsValid = upDatedForm[ele].validity && formIsValid
    })
    

    upDateForm(upDatedForm, formIsValid)


}

const form = props => {
    const formFields = Object.keys(props.formInputs).map(
        (inp)=>(
            <Col key={props.formInputs[inp].title}>
                <FormGroup>
                <Label>{props.formInputs[inp].title}</Label>
                <CustomInput
                    type={props.formInputs[inp].type}
                    
                    config={{
                        name: props.formInputs[inp].name,
                        id:props.formInputs[inp].id,
                        placeholder: props.formInputs[inp].placeholder
                    }}

                    invalid={!props.formInputs[inp].validity}
                    touched={props.formInputs[inp].touched}
                   
                    changeHandler={(e)=>inputChangeHandler(e, inp, props.updateForm, props.formInputs)}
                />
                </FormGroup>
            </Col>
        )
    )
    return (      
        <Container className="App">
            <h2>{props.title}</h2>
            {props.error ? <div className="alert alert-danger">{props.error.message}</div> : null }
            <Form className="form">
                {formFields}
                <div className="d-flex justify-content-around">
                    <Button 
                        click={submitHandler.bind(null, props.submitForm, props.formInputs)}  
                        type="Success"
                        disabled={!props.formIsValid}
                    >Submit</Button>
                    <Button click={props.onCancel}  type="Danger">Cancel</Button>
                </div>
            </Form>
       </Container>
    )
}

export default form
