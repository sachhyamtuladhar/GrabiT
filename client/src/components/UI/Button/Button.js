import React from 'react'

import styles from './Button.module.scss'

export default function Button(props) {
    
    return (
        <div 
            className={[styles.Button, styles[props.type]].join(' ')} 
            onClick={props.click}
            disabled={props.disabled}
        >
            {props.children}
        </div>
    )
}
