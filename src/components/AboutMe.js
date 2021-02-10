import React from 'react'; 
import '../style/about.css';
import ashe from '../assets/Ashe.jpg';
import resume from '../assets/resume.pdf';


function AboutMe()
        {
        return <div className='aboutStyle row'>
                <div className='resumeContainer col-xs-12 col-sm-12 col-md-8'>
                        
                        <div>
                        <p className="h3textabout">🙏 नमस्ते, I am Aishwarya!</p>
                                
                        
                                <p className='contentText'> I am an aspiring full-stack developer currently pursuing a Master’s in Computer Science at Drexel University.
                                Before coming to the US, I had been working at <a href="https://www.lntinfotech.com/" className='linkStyle1'><u className='underStyle'>L&T Infotech</u></a>, India as a Senior Test Engineer and a Business Analyst, actively 
                                participating in all the phases of Software Development LifeCycle (SDLC) including interacting with the clients on daily basis. </p>
                                <p className='contentText'>
                                During my time there (2014 - 2019), being on the testing side of the SDLC, I realized I am fascinated by the way the 
                                software products are developed. The yearning to be on the creation side of the SDLC became the motivation behind pursuing my graduate degree. 
                                With that hope coupled with excitement, I came to the US in 2019. In Fall 2020, I interned at <a href="https://seedstages.com/" className='linkStyle1'><u className='underStyle'>Seedstages</u></a> as a full-stack web developer, working on the front-end features and a robust back-end for a mobile application.
                                
                                </p>
                                <p className='contentText'>
                                Apart from studying, I am a passionate dog lover 🐕, a plant mother 🌵, a doodler ✏️, a fitness enthusiast 🏋️‍♀️, and an in-progress chef 👩‍🍳.
                                </p> 

                        </div>
                        

                        <div className='container'>
                        <div className='row btnPaddStyle'> 
                                <div className='col-xs-2 btnStyle'>
                                        {/* <div className=''> */}
                                                <a href={resume} className="buttonResume" download='Aishwarya_Patil_Resume'>Resumé</a> 
                                        {/* </div> */}
                                </div>
                                <div className='col-xs-2 btnStyle'>
                                        
                                        {/* <div className='btnStyle'> */}
                                                <a href="/Projects" className="buttonResume" >Projects</a> 
                                        {/* </div> */}
                                
                
                                </div>
                                      
                        </div>

                        </div>
   
                </div>     
                        
                
                <div className='imageContainer col-xs-12 col-sm-12 col-md-4'>
                        <img src={ashe} className='imageStyle img-fluid' max-width='100%' height='auto'/>
                </div>
                
    </div>

        
        }
export default AboutMe;