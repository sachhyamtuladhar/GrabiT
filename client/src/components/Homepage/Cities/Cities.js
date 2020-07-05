import React from 'react'


import berlinImg from '../../../assets/img/berlin.jpg'
import lisbonImg from '../../../assets/img/lisbon-3.jpg'
import londonImg from '../../../assets/img/london.jpg'
import sanFransiscoImg from '../../../assets/img/san-francisco.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChessQueen } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


import styles from './Cities.module.scss'

const Cities = () => {
    return (
        <section className={styles.sectionCites} id="cities">
            <div className="row">
                <h2>We're currently in these cities</h2>
            </div>
            <div className="row js--wp-3">
                <div className={`col-md-3 ${styles.box}`}>
                    <img src={lisbonImg} alt="" />
                    <h3>Lisbon</h3>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faUser} className={styles.iconSmall} />
                        1600+ happy eaters
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faChessQueen} className={styles.iconSmall} />

                        60+ top chefs
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.iconSmall} />
                        <a href="###">@grabit_lx</a>
                    </div>
                </div>
                <div className={`col-md-3 ${styles.box}`}>
                    <img src={sanFransiscoImg} alt="" />
                    <h3>San Fransisco</h3>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faUser} className={styles.iconSmall} />
                        3700+ happy eaters
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faChessQueen} className={styles.iconSmall} />
                        160+ top chefs
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.iconSmall} />
                        <a href="##">@grabit_sf</a>
                    </div>
                </div>
                
                <div className={`col-md-3 ${styles.box}`}>
                    <img src={berlinImg} alt="" />
                    <h3>Berlin</h3>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faUser} className={styles.iconSmall} />
                        41200+ happy eaters
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faChessQueen} className={styles.iconSmall} />
                        50+ top chefs
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.iconSmall} />
                        <a href="##">@grabit_berlin</a>
                    </div>
                </div>
                
                <div className={`col-md-3 ${styles.box}`}>
                    <img src={londonImg} alt="" />
                    <h3>London</h3>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faUser} className={styles.iconSmall} />
                        2300+ happy eaters
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faChessQueen} className={styles.iconSmall} />
                        110+ top chefs
                    </div>
                    <div className={styles.cityFeature}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.iconSmall} />
                        <a href="##">@grabit_london</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cities
