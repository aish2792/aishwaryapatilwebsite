import React from 'react'; 
import '../style/about.css';
import ashe from '../assets/Ashe.jpg';
import resume from '../assets/resume.pdf';


function AboutMe()
        {
        return <div className='aboutStyle'>
                <div className='resumeContainer'>
                        <div className='contentContainer'>
                                        <span>
                                        <p className="h3text">Meet Aishwarya</p>
                                        </span>       
                                        <span>
                                        <p className='contentText'>Hi there! I am an aspiring full-stack developer currently pursuing a Master’s in Computer Science at Drexel University.
                                        Before coming to the US, I had been working at <a href="https://www.lntinfotech.com/" className='linkStyle1'><u className='underStyle'>L&T Infotech</u></a>, India as a Senior Test engineer and a business analyst, actively 
                                        participating in all the phases of Software Development LifeCycle including interacting with the clients on daily basis. </p>
                                        <p className='contentText'>
                                        During my time there (2014 - 2019), being on the testing side of the SDLC, I realized I am fascinated by the way any 
                                        application is developed. The yearning to be on the creation side of the SDLC became the motivation behind pursuing my graduate degree. 
                                        With that hope coupled with excitement, I came to the US in 2019. In Fall 2020, I interned at <a href="https://seedstages.com/" className='linkStyle1'><u className='underStyle'>Seedstages</u></a> as a Full Stack Web Developer, working on the front-end features and a robust back-end for a mobile application.
                                        
                                        </p>
                                        <p className='contentText'>
                                        Apart from studying, I am a passionate dog lover 🐕, a plant mother 🌵, a doodler ✏️, a fitness enthusiast 🏋️‍♀️, and an in-progress chef 👩‍🍳.
                                        </p> 

                                        </span>

                        </div>
                        <div className='btnContainer'>

                                        <a href={resume} className="buttonResume" download='Aishwarya_Patil_Resume'>Resumé</a> 
                        
                        </div>
                </div>     
                        
                
                <div className='imageContainer'>
                        <img src={ashe} className='imageStyle' width='auto' height='550'/>
                </div>
                
    </div>
        }
export default AboutMe;