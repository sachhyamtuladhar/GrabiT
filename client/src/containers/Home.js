import React, { Component } from 'react'


import Features from '../components/Homepage/Features/Features'
import Meals from '../components/Homepage/Meals/Meals'
import Steps from '../components/Homepage/Steps/Steps'
import Cities from '../components/Homepage/Cities/Cities'
import Testimonials from '../components/Homepage/Testimonials/Testimonials'
import Plans from '../components/Homepage/Plans/Plans'


class Home extends Component {
    state={
        isFeaturesVisible: false,
        isStepsVisible: false,
        isCitiesVisible: false,
        isTestimonialsVisible: false
    }

    FeaturesEnter = () => {
        this.setState({
            isFeaturesVisible: true
        })
    }
    
    StepsEnter = () => {
        this.setState({
            isStepsVisible: true
        })
    }

    CitiesEnter = () => {
        this.setState({
            isCitiesVisible: true
        })
    }
   
    TestimonialsEnter = () => {
        this.setState({
            isTestimonialsVisible: true
        })
    }
    

    render() {
        return (
            <div className="mt-3">
                    <Features onVisible={this.FeaturesEnter} isVisible={this.state.isFeaturesVisible} />
                    <Meals />
                    <Steps onVisible={this.StepsEnter} isVisible={this.state.isStepsVisible}/>
                    <Cities onVisible={this.CitiesEnter} isVisible={this.state.isCitiesVisible}/>
                    <Testimonials onVisible={this.TestimonialsEnter} isVisible={this.state.isTestimonialsVisible}/>
                    <Plans />
            </div>)
        
    }
}

export default Home
