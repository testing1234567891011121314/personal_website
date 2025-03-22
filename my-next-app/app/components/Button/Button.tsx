'use client';
import React from 'react'
import styles from './Button.module.css'

const Button = () => {
    return (
        <div className={styles.button}>
            <button onClick={() => console.log("Click")}> This is a Button </button>
        </div>
    )
}

export default Button
