import React from 'react'
import classes from './Story.module.css'
import window from '../../../Assert/window.png'
import oj1 from '../../../Assert/object-01.png'
import oj2 from '../../../Assert/object-02.png'
import oj3 from '../../../Assert/object-03.png'
import oj4 from '../../../Assert/object-04.png'
import oj5 from '../../../Assert/object-05.png'
import oj6 from '../../../Assert/object-06.png'
import oj7 from '../../../Assert/object-07.png'

const Story = () => {
    return (
        <div className={classes.brand_story}>
            <div className={classes.title}>
                <p>Brand Story</p>
                <div className={classes.content}>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</div>
            </div>
            <div className={classes.line}></div>
            <div className={classes.object1}>
                <img src={oj1}/>
            </div>
            <div className={classes.object2}>
                <img src={oj2}/>
            </div>
            <div className={classes.object3}>
                <img src={oj3}/>
            </div>
            <div className={classes.object4}>
                <img src={oj4}/>
            </div>
            <div className={classes.object5}>
                <img src={oj5}/>
            </div>
            <div className={classes.object6}>
                <img src={oj6}/>
            </div>
            <div className={classes.object7}>
                <img src={oj7}/>
            </div>
            <div className={`${classes.window}`}>
                <div>
                    <img src={window}/>
                </div>
                <div className={`${classes.window_content} `}>
                    <p className={classes.window_title}>What Happened’s Brand story</p>
                    <p className={classes.window_contt}>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>
                    <div className={classes.see_more}>
                        SEE MORE
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Story
