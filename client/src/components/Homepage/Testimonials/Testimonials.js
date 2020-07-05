import React from 'react'

import customer1img from '../../../assets/img/customer-1.jpg'
import customer2img from '../../../assets/img/customer-2.jpg'
import customer3img from '../../../assets/img/customer-3.jpg'


import styles from './Testimonials.module.scss'

const Testimonials = () => {
    return (
        <section className={styles.sectionTestimonials}>
            <div className="row">
                <h2>Our customers can't live without us</h2>
            </div>
            <div className="row js--wp-4">
                <div className="col span-1-of-3">
                    <blockquote>Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                        <cite><img src={customer1img} alt="" />Duncan</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
                        <cite><img src={customer2img} alt="" />Joana Silva</cite>
                    </blockquote>
                </div>
                <div className="col span-1-of-3">
                    <blockquote>I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
                        <cite><img src={customer3img} alt="" />Milton Chapman</cite>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
