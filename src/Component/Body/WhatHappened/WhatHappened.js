import React from 'react'
import classes from './WhatHappened.module.css'
import vd from '../../../Assert/video.png'
import vdoj1 from '../../../Assert/video-object-01.png'
import vdoj2 from '../../../Assert/video-object-02.png'
import vdoj3 from '../../../Assert/video-object-03.png'
import vdoj4 from '../../../Assert/video-object-04.png'
import vdoj5 from '../../../Assert/video-object-05.png'
import vdoj6 from '../../../Assert/video-object-06.png'
import vdoj7 from '../../../Assert/video-object-07.png'
import vdoj8 from '../../../Assert/video-object-08.png'
import vdoj9 from '../../../Assert/video-object-09.png'

const WhatHappened = () => {
    return (
        <div className={classes.what_happened}>
             <div className={classes.vdoj1}>
                <img src={vdoj1} />
            </div>
            <div className={classes.vdoj2}>
                <img src={vdoj2} />
            </div>
            <div className={classes.vdoj3}>
                <img src={vdoj3} width="146px"/>
            </div>
             <div className={classes.vdoj4}>
                <img src={vdoj4} />
            </div>
            <div className={classes.vdoj5}>
                <img src={vdoj5} />
            </div>
            <div className={classes.vdoj6}>
                <img src={vdoj6} width="130px" />
            </div>
            <div className={classes.vdoj7}>
                <img src={vdoj7} width="146px" />
            </div>
            <div className={classes.vdoj8}>
                <img src={vdoj8} />
            </div>
            <div className={classes.vdoj9}>
                <img src={vdoj9} />
            </div>
            <div className={classes.happened_header}>
                <h1>what happened</h1>
                <p>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </p>
            </div>
            <div className={classes.see_more}>
                SEE MORE
            </div>
            <div className={classes.vd}>
                <img src={vd} width="1251px"/>
            </div>
        </div>
    )
}

export default WhatHappened
