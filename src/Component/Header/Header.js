import React from 'react'
import classes from './Header.module.css'
import logo from '../../Assert/logo.png'

const Header = () => {
    return (
        <>
            <div className={`${classes.navbar} row`}>
                <div className={`${classes.logo} col-3`}>
                    <img src={logo} />
                </div>
                <div className={`${classes.menu} col`}>
                    <span id="introduction">
                        Introduction
                    </span>
                    <span id={classes.solution}>
                        solution
                    </span>
                    <span id={classes.rate_plan}>
                        Rate plan
                    </span>
                    <span className={classes.rectangle}>|</span>
                    <span id={classes.login}>
                        login
                    </span>
                    <span id={classes.apply}>
                        Apply for free use
                    </span>
                </div>
            </div>

        </>
    )
}

export default Header
