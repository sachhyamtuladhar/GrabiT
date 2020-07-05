import React from 'react'
import grabitLogo from '../../assets/logo/grabit5-transparent.png'
import styles from './Logo.module.scss'

const logo = () => {
    return (
        <div className={styles.Logo}>
            <img src={grabitLogo} alt="logo"></img>
        </div>
    )
}

export default logo
