import React from 'react'

import producticon_bg from '../../../Assert/producticon-bg.png'

import classes from './CardItem.module.css'
const CardItem = (props) => {
    return (
        <>
            <div className={classes.list_best_product} >
                <img src={producticon_bg} className={classes.producticon_bg} />
                <span className={classes.producticon_number}>{props.number}</span>

                <img src={props.img} />
                <div className={`${classes.how_to} row`}>
                    <span className={`${classes.title} col-9`}>How to create <br/> mobile-optimized</span>
                    <span className={`${classes.go}`}>GO</span>
                </div>
            </div>
        </>
    )
}

export default CardItem
