import React,{Fragment} from 'react'
import Features from './Features/Features'
import Meals from './Meals/Meals'
import Steps from './Steps/Steps'

const homepage = () => {
    return (
        <Fragment>
            <Features />
            <Meals />
            <Steps />
        </Fragment>
    )
}

export default homepage
