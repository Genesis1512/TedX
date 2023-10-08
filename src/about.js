import React from 'react';
import 'C:/Users/KAUSTUBH/Desktop/tedx webd/tedx/src/about.css';
import image2 from'../src/Images/team.jpg';
import image1 from'../src/Images/ted1.jpeg';

const about = () => {
  return (
    <>
        {/* <div classNameName='open' id='About'>
            <h1 classNameName='teg'>ABOUT</h1>
            
            
            <div classNameName='container'>
              <div classNameName='first card'>
            <div classNameName ='contri'>
                <h1 classNameName='jac'>HISTORY</h1>
            
           <div classNameName=' back'>
           TEDx, an independently organized program licensed by TED, is an emblematic platform for fostering the dissemination of "Ideas Worth Spreading." The acronym TED originally stood for Technology, Entertainment, and Design, and TEDx has extended this legacy, incorporating various disciplines and subjects. These localized events gather thought leaders, visionaries, artists, and innovators to share their insights and experiences in the signature TED talk format—a compelling presentation of 18 minutes or less.
            </div>
            </div>
            </div>
            <div classNameName='second card'>

            <div classNameName ='contri'>
                <h1 classNameName='jac'>Team</h1>
            
           <div classNameName=' back '>
           TEDx events are organized by a team of volunteers who work together to bring the event to life. The team usually includes a lead organizer, who is responsible for overseeing the event and managing the team, a speaker curator, who selects and coaches the speakers, a marketing and communications coordinator, who promotes the event and manages social media, a sponsor coordinator, who secures funding and partnerships, and a logistics coordinator, who handles the event's technical and operational needs. Other roles may include volunteer coordinators, graphic designers, and stage managers.            </div>
            </div>
            </div>
            </div> */}

        {/* <div classNameName='container'>
          <div classNameName='card'>
            <img classNameName='img' src={image1} />
              <div classNameName='intro'>
                <h1>history</h1>
              <p>  TEDx, an independently organized program licensed by TED, is an emblematic platform for fostering the dissemination of "Ideas Worth Spreading." 
              </p>
              </div>
            
          </div>
        

        <div classNameName='container'>
          <div classNameName='card'>
            <img classNameName='img' src={image2} />
              <div classNameName='intro'>
                <h1>team</h1>
<p>           TEDx events are organized by a team of volunteers who work together to bring the event to life. The team usually includes a lead organizer, who is responsible for overseeing the event and managing the team, a speaker curator, who selects and coaches the speakers, a marketing and communications coordinator, who promotes the event and manages social media, a sponsor coordinator, who secures funding and partnerships, and a logistics coordinator, who handles the event's technical and operational needs. Other roles may include volunteer coordinators, graphic designers, and stage managers.           
</p>
              </div>
            
          </div>
        </div>
        </div> */}

<div className='open' id='About'>
            <h1 className='teg'>ABOUT</h1>

        <div className="container">

            <div className="card">
                <img className="cook picer" src={image1} alt="dfkvnsj" />
                <div className="intro-2 jagger1">
                    <h1 className="tpoic">HISTORY</h1>
                    <p  className="intro-para">TED was created in 1984 by Richard Saul Wurman and co-founded by Harry Marks.</p>
                    <a href="https://tedxwinterpark.com/how-tedx-started/#:~:text=The%20Mission%20of%20Tedx&text=TED%20was%20created%20in%201984,into%20a%20world%2Drenowned%20event.">
                        <button  className="button">Click For  More</button>
                      </a>
               
               
                </div>
            </div>

             <div className="card">
                <img className="cook picer" src={image2} alt="dfkvnsj" />
                <div className="intro-2 jagger2" >
                    <h1 className="tpoic">Team</h1>
                    <p className="intro-para">           
                    lead organizer, speaker curator, marketing and communications,  collaborate to bring the event to life.
 </p>
                    <a href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/volunteers-staff/build-your-team">
                        <button className="button">Click For  More</button>
                      </a>
               
          </div>    
          </div> 
          </div>
          </div>
    </>
  )
}

export default about
