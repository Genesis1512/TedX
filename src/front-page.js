import React from 'react'
import pics from 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/Images/tedxmain.png'
import 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/front-page.css'
const front = () => {
  return (
    <>
      
        <div className='Front-page'>
            <div className='image'>
        <img src={pics} alt="Logo" className='front-page-Logo'/>  
        </div>
        
        <div className='first-page-content'>
        <h1 className='hell'>Ideas that spark, voices that resonate: Welcome to TEDx.</h1>
        </div>
        </div>
    </>
  )
}

export default front;
