import React from 'react'

import { Animated } from "react-animated-css";
import { Waypoint } from 'react-waypoint';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faInfinity, faClock, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

import styles from'./Features.module.scss'

const Features = props => (
    
    <section className={styles.Features} id="features" >
        <div className="row">
            <h2>Get food fast &mdash; not fast food.</h2>
            <p className={styles.LongCopy}>
                Hello, we’re GrabiT!, your new premium delivery service. We know you’re always busy. No time for shopping. So let us take care of that, we’re really good at it, we promise!
            </p>
        </div>
        <Waypoint onEnter={props.onVisible} >
            <Animated animationIn="fadeIn" isVisible={props.isVisible}>
                <div className="row js--wp-1">
                    <div className="col-md box">
                        <h3>
                            <FontAwesomeIcon icon={faInfinity} className={styles.iconBig} />
                            Up to 365 days
                        </h3>
                        <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
                        </p>
                    </div>
                    <div className="col-md box">
                        <h3> 
                            <FontAwesomeIcon icon={faClock } className={styles.iconBig} />
                            Ready in 20
                        </h3>
                        <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.  
                        </p>
                    </div>
                    <div className="col-md box">
                        <h3>
                            <FontAwesomeIcon icon={faCarrot} className={styles.iconBig} />
                            100% organic
                        </h3>
                        <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better! 
                        </p>
                    </div>
                    <div className="col-md box">
                        <h3>
                            <FontAwesomeIcon icon={faPizzaSlice} className={styles.iconBig} />
                            Order anything
                        </h3>
                        <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
                        </p>
                    </div>
                </div>
            </Animated>
        </Waypoint>
    </section>
)


export default Features
