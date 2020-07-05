import React from 'react'
import Button from '../UI/Button/Button'

import styles from './Product.module.scss'

const Product = props  => {
    console.log(props)
    return (
        <div class={`card ${styles.Product}`}>
            <img class="card-img-top" src="https://i.imgur.com/1o3KcN6.png" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.item.name}</h5>
                <p class="card-text">{props.item.description}</p>
                <p class="card-text">$ {props.item.price}</p>
                <Button type="HeaderSection">Buy</Button>
            </div>
        </div>
    )
}

export default Product
