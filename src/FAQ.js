import React, {useState} from 'react'
import 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/FAQ.css'
import {Question} from 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/FAQ-api.js'
import Myfaq from 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/Myfaq.js'

const FAQ = () => {
   const [data, setdata] = useState(Question)

  return (
    <>
    <div className='Overall'>
    <h1>FAQ</h1>  
    <br />
    
    <section className='main-main'>
    <div className='main'>
    {
      data.map((curElem)=>{
        return <Myfaq  key={curElem.id} {...curElem}/>;
        <br />
      }) 
    }

</div>
</section>
    </div>
    </>
  )
}

export default FAQ
