import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className="d-flex justify-content-around pt-3">
                <div>
                    <ul className={styles.footerNav}>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>
                <div >
                    <ul className={styles.socialLinks}>
                        <li><a href="#">  <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare}  /><div className={styles.socialMedia}>Facebook</div></a></li>
                        <li><a href="#">  <FontAwesomeIcon className={styles.icon} icon={faInstagram}  /><div className={styles.socialMedia}>Instagram</div></a></li>
                        <li><a href="#">  <FontAwesomeIcon className={styles.icon} icon={faGooglePlus}  /><div className={styles.socialMedia}>Google+</div></a></li>
                        <li><a href="#">  <FontAwesomeIcon className={styles.icon} icon={faTwitter}  /><div className={styles.socialMedia}>Twitter</div></a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex  justify-content-center">
                <p>Copyright &copy; 2020 by GrabiT!. All rights belongs to GrabiT!</p>
            </div>
        </footer>
    )
}

export default Footer




