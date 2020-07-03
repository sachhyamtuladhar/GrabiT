import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare  } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Button from '../../UI/Button/Button'

import styles from './Plans.module.scss'



const Plans = () => {
    return (
        <section className={styles.sectionPlans} id="signup">
            <div className="row">
                <h2>Start eating healthy today</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className={styles.planBox}>
                        <div>
                            <h3>Premium</h3>
                            <p className={styles.planPrice}>149$ <span>per month</span></p>
                            <p className={styles.planPriceMeal}>That’s only 13.30$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckSquare} />1 meal every day</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Order 24/7</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Access to newest creations
                                </li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Free delivery</li>
                            </ul>
                        </div>
                        <div>   
                        <Link
                            to= "/register"   
                            className={styles.defaultLink}  
                        >
                            <Button type="HeaderSection">Sign Up</Button>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.planBox}>
                        <div>
                            <h3>Pro</h3>
                            <p className={styles.planPrice}>19$ <span>per month</span></p>
                            <p className={styles.planPriceMeal}>That’s only 14.90$ per meal</p>
                        </div>
                        <div>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckSquare} />1 meal every day</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Order 24/7</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Access to newest creations
                                </li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Free delivery</li>
                            </ul>
                        </div>
                        <div>   
                            <Link
                                to= "/register"   
                                className={styles.defaultLink}  
                            >
                                <Button type="HeaderSection">Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.planBox}>
                        <div>
                            <h3>Starter</h3>
                            <p className={styles.planPrice}>9$ <span>per month</span></p>
                            <p className={styles.planPriceMeal}>19.20$ per meal that is only!</p>
                        </div>
                        <div>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckSquare} />1 meal every day</li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Order from 8 am to 12 pm</li>
                                <li><FontAwesomeIcon icon={faTimes} />Access to newest creations
                                </li>
                                <li><FontAwesomeIcon icon={faCheckSquare} />Free delivery</li>
                            </ul>
                        </div>
                        <div>   
                        <Link
                            to= "/register"   
                            className={styles.defaultLink}  
                        >
                            <Button type="HeaderSection">Sign Up</Button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans
