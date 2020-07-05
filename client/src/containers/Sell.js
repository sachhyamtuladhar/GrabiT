import React, { Component } from 'react'
import Form from '../components/Form/Form'

import axios from 'axios'

class Sell extends Component {
    state = {
        formProperties: {
            name: {
                title:"Name",
                id: "",
                type: 'text',
                placeholder: 'Your Name',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 20
                },
                validity: false,
                value: '',
                touched: false
            },
            description: {
                title:"Description",
                id: "description",
                type: 'textarea',
                placeholder: 'Describe the product',
                validation: {
                    required: true,
                    minLength: 5,
                },
                validity: false,
                value: '',
                touched: false
            },
            price: {
                title:"Price",
                id: "price",
                type: 'text',
                placeholder: 'State your price',
                validation: {
                    required: true,
                    isNumber: true,
                },
                validity: false,
                value: '',
                touched: false
            },
        },
        formIsValid: false,
        error: null
 
    }

    updateForm = (updatedForm, formValidity) => {
        this.setState({
            formProperties: updatedForm,
            formIsValid: formValidity
        })
    }

    sellItem = (formData) =>{
        axios.post('/items', formData)
            .then(res=>{
                console.log(res.data)
                this.props.history.push('/buy')
            })
            .catch(e=>this.setState({
                error: e.response.data
            }))
    }

    render() {
        return (
            <div className="d-flex justify-content-center mt-5">
                
                <div className='card mb-5 custom-form-width' >
                    <div className="card-body">

                        <Form 
                            updateForm={this.updateForm}
                            submitForm = {this.sellItem}
                            formInputs = {this.state.formProperties}
                            title="Sell"
                            error={this.state.error}
                            formIsValid = {this.state.formIsValid}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Sell
