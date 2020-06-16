import React, {Component} from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class LoginForm extends Component {
    state={
        orderForm: {
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
                    minLength: 5
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
    }

    render(){

        const formFields = Object.keys(this.state.orderForm).map(
            (inp)=>(
                <Col key={this.state.orderForm[inp].title}>
                    <FormGroup>
                    <Label>{this.state.orderForm[inp].title}</Label>
                    <Input
                        type={this.state.orderForm[inp].type}
                        name={this.state.orderForm[inp].name}
                        id={this.state.orderForm[inp].id}
                        placeholder={this.state.orderForm[inp].placeholder}
                    />
                    </FormGroup>
                </Col>
            )
        )
        

        return (      
            <Container className="App">
                <h2>Register</h2>
                <Form className="form">
                {formFields}
                <Button>Submit</Button>
                </Form>
           </Container>
        )
    }
}

export default LoginForm
