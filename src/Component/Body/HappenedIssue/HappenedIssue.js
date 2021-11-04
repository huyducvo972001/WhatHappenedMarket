import React from 'react'
import classes from './HappenedIssue.module.css'
import oj2 from '../../../Assert/news-object-02.png'
import oj3 from '../../../Assert/news-object-03.png'
import oj4 from '../../../Assert/news-object-04.png'
import oj5 from '../../../Assert/news-object-03_.png'
import oj6 from '../../../Assert/news-object-05.png'
import img_new1 from '../../../Assert/news-img-01.png'

import bBrand from '../../../Assert/news-img-02.PNG'
import cBrand from '../../../Assert/news-img-03.png'
import dBrand from '../../../Assert/news-img-04.png'
import eBrand from '../../../Assert/news-img-05.png'

const HappenedIssue = () => {
    return (
        <div className={classes.happened_issue}>
            <div className={classes.happened_header}>
                <div className={classes.new_oj2}>
                    <img src={oj3} width="95px"/>
                </div>
                <div className={classes.new_oj3}>
                    <img src={oj2} width="119px"/>
                </div>               
                <h1>Happened’s issue</h1>
                <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            </div>
            <div className={classes.see_more}>
                SEE MORE
            </div>
            <div className={classes.happened_body}>
                <div className={classes.whpn_issue}>
                    <p>whpnissue</p>
                    <img src={img_new1} width="100%"/>
                </div>
                <div className={classes.b_brand}>
                    <p>B BRAND</p>
                    <img src={bBrand} width="100%"/>
                </div>
                <div className={classes.c_brand}>
                    <p>C BRAND</p>
                    <img src={cBrand} width="100%"/>
                </div>
                <div className={classes.d_brand}>
                    <p>D BRAND</p>
                    <img src={dBrand} width="100%"/>
                </div>
                <div className={classes.e_brand}>
                    <p>E BRAND</p>
                    <img src={eBrand} width="100%"/>
                </div>
                <div className={classes.new_oj4}>
                    <img src={oj4} width="119px"/>
                </div>
                <div className={classes.new_oj5}>
                    <img src={oj5} width="167px"/>
                </div>
                <div className={classes.new_oj6}>
                    <img src={oj6} width="133px"/>
                </div>
            </div>
        </div>
    )
}

export default HappenedIssue
