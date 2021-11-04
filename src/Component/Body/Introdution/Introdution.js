import React from 'react'
import banner_main from '../../../Assert/main-banner.png'
import classes from './Introduction.module.css'

const Introdution = () => {
    return (
        <>
            <div className={classes.banner_main}>
                <img src={banner_main} />
            </div>
            <div className={classes.introdution}>
                <p className={classes.what_happened}>
                    What Happened!
                </p>
                <p className={classes.content}>
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create
                    mobile-optimized videos in minutes.
                </p>
            </div>
        </>
    )
}

export default Introdution
