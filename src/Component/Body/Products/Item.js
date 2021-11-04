import React from 'react'
import classes from './Item.module.css'


const Item = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.item_img}>
                <img src={props.img} />
            </div>
            <div className={classes.item_name}>
                [What happen] How to create
            </div>
            <div className={classes.item_footer}>
                <span className={classes.price}>2,500 won</span>
                <span className={classes.favorite}><i class="fas fa-heart"></i>236</span>
            </div>
        </div>
    )
}

export default Item
