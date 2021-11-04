import React from 'react'
import CardItem from './CardItem'
import classes from './Products.module.css'
import best_p1 from '../../../Assert/best-image-01.png'
import best_p2 from '../../../Assert/best-image-02.png'
import best_p3 from '../../../Assert/best-image-03.png'
import img_item2 from '../../../Assert/products/img-02.png'
import img_item3 from '../../../Assert/products/img-03.png'
import img_item4 from '../../../Assert/products/img-04.png'
import img_item5 from '../../../Assert/products/img-05.png'
import img_item6 from '../../../Assert/products/img-06.png'
import img_item1 from '../../../Assert/products/img-01.png'
import img_item7 from '../../../Assert/products/img-07.png'
import img_item8 from '../../../Assert/products/img-08.png'
import img_item9 from '../../../Assert/products/img-09.png'
import img_item10 from '../../../Assert/products/img-10.png'
import img_item11 from '../../../Assert/products/img-11.png'
import img_item12 from '../../../Assert/products/img-12.png'
import img_item13 from '../../../Assert/products/img-13.png'
import img_item14 from '../../../Assert/products/img-14.png'
import img_item15 from '../../../Assert/products/img-15.png'
import img_item16 from '../../../Assert/products/img-16.png'
import img_item17 from '../../../Assert/products/img-17.png'
import img_item18 from '../../../Assert/products/img-18.png'
import img_item19 from '../../../Assert/products/img-19.png'
import img_item20 from '../../../Assert/products/img-20.png'
import img_item21 from '../../../Assert/products/img-21.png'
import img_item22 from '../../../Assert/products/img-22.png'
import img_item23 from '../../../Assert/products/img-23.png'
import img_item24 from '../../../Assert/products/img-24.png'
import img_item25 from '../../../Assert/products/img-25.png'
import Item from './Item'


const Products = () => {
    return (
        <>
            <div className={classes.best_product}>
                <p className={classes.title}>Best Product</p>
                <p className={classes.content}>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first</p>
                <div className={`${classes.item} row`}>
                    <CardItem img={best_p1} number='01' />
                    <CardItem img={best_p2} number='02' />
                    <CardItem img={best_p3} number='03' />
                </div>
            </div>
            <div className={classes.products}>
                <Item img={img_item1} />
                <Item img={img_item2} />
                <Item img={img_item3} />
                <Item img={img_item4} />
                <Item img={img_item5} />
                <Item img={img_item6} />
                <Item img={img_item7} />
                <Item img={img_item8} />
                <Item img={img_item9} />
                <Item img={img_item10} />
                <Item img={img_item11} />
                <Item img={img_item12} />
                <Item img={img_item13} />
                <Item img={img_item14} />
                <Item img={img_item15} />
                <Item img={img_item16} />
                <Item img={img_item17} />
                <Item img={img_item18} />
                <Item img={img_item19} />
                <Item img={img_item20} />
                <Item img={img_item21} />
                <Item img={img_item22} />
                <Item img={img_item23} />
                <Item img={img_item24} />
                <Item img={img_item25} />

            </div>
            <div className={classes.see_more}>
               <p>SEE MORE</p>
            </div>
        </>
    )
}

export default Products
