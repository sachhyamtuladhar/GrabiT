import React, { Component } from 'react'

import axios from 'axios'
import Product from '../components/Product/Product'
import Spinner  from '../containers/../containers/../components/UI/Spinner/Spinner'

class Buy extends Component {
    state = {
        items: [],
        loading: true
    }

    componentDidMount(){

        axios.get('/items/all')
            .then(
                res=>{
                    console.log(res)
                    this.setState({
                        items: res.data,
                        loading: false
                    })
                }
            ).catch(e=>{
                console.log(e.response)
                
            })
    }

    render() {
        let items = this.state.items.map(item=>
            <div class="col-lg-3 col-md-6">
                <Product item={item}/>
            </div>
        )
        if(this.state.loading)
            items=<Spinner />
        return (
            <div class="container">
                <div class="row">
                    {items}
                </div>
            </div>
        )
    }
}

export default Buy
