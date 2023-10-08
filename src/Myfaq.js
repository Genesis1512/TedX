import React,{useState} from 'react'

const Myfaq = ({id,question,answer}) => {
    const [show , setshow] = useState(false);
  return (
   
    <>
    <section className='main-main'>
        <div className='main'>
        <h5><div className='plus' onClick={()=>{
            setshow(!show)
        }}>  {show? "-" : "+" }   </div> {question}</h5>
        </div>
        <div className='cont'>
            { show &&  <p>{answer}</p>}
        </div>
       
       
        </section>  
    </>
  )
}

export default Myfaq
