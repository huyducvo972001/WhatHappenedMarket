import React from 'react'
import HappenedIssue from './HappenedIssue/HappenedIssue'
import Introdution from './Introdution/Introdution'
import Products from './Products/Products'
import Story from './Story/Story'
import WhatHappened from './WhatHappened/WhatHappened'

const Body = () => {
    return (
        <>
         <Introdution/>   
         <Products/>
         <Story/>
         <HappenedIssue/>
         <WhatHappened/>
        </>
    )
}

export default Body
