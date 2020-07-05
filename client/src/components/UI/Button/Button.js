import React from 'react'

import styles from './Button.module.scss'

export default function Button(props) {
    const classes=[styles[props.type]]
    if (props.disabled)
        classes.push(styles.Disabled)
    return (
        <div 
            className={[styles.Button, ...classes].join(' ')} 
            onClick={props.disabled ? null : props.click } 
            
        >
            {props.children}
        </div>
    )
}
