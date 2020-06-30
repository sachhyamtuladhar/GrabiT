import React from 'react'

import appIphone from '../../../assets/img/app-iPhone.png'
import downloadApp from '../../../assets/img/download-app.svg'
import downloadAppAndroid from '../../../assets/img/download-app-android.png'

import styles from './Steps.module.scss'

const Steps = () => {
    return (
        <section className="step-section" id="steps">
            <div className="row">
                <h2>How it works &mdash; Simple as 1, 2, 3</h2>
            </div>
            <div className="row justify-content-around">
                <div className={`col-md-6  ${styles.StepBox}`}>
                    <img src={appIphone} alt="iphone image" className={`${styles.appScreen} js--wp-2`} />
                </div>
                <div className={`col-md-6  ${styles.StepBox}`}>
                    <div className={styles.workSteps}>
                        <div>1</div>
                        <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                    </div>
                    <div className={styles.workSteps}>
                        <div>2</div>
                        <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                    </div>
                    <div className={styles.workSteps}>
                        <div>3</div>
                        <p>	Enjoy your meal after less than 20 minutes. See you the next time!</p>
                    </div>
                    
                    <a href="#" className={styles.btnApp}><img src={downloadApp} alt="App Store Button" /></a>
                    <a href="#" className={styles.btnApp}><img src={downloadAppAndroid} alt="Play Store Button" /></a>
                </div>
            </div>
        </section>
    )
}

export default Steps
