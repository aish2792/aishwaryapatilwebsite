import React from 'react';
import '../style/projects.css';


function Projects() 
{   
    return <div className='wholeProjectContainer'>  
                <div className='projectContainer'>
                    <div className='projectHeaderContainer'> 
                        <h1 className='projectHeaderStyle'>Projects </h1> 
                    </div> 
                </div>  
                
                <div className='projectContentContainer'>
                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/expirydateapplication" className='underHyperLink'><u className='projectUnderline'>UnXpired</u></a><span className='subtextStyle'><i> ( Python, Django, Rest Api, React Native, Redux Toolkit, SQLite )</i></span></p>
                        <p className='desctextStyle'>unXpired is a mobile application for notifying the users when an item is closing in on its expiration date</p>

                    </div>

                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/Loan-Prediction"  className='underHyperLink'><u className='projectUnderline'>Loan Prediction</u></a><span className='subtextStyle'><i> ( Python, Django, Rest Api, React Native, Redux Toolkit, SQLite )</i></span></p>
                        <p className='desctextStyle'>Loan prediction website offers automated loan eligibility process 
                    based on customer detail provided while filling online application form.</p>

                    </div>

                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/Image-filtering"  className='underHyperLink'><u className='projectUnderline'>Loan Prediction</u></a><span className='subtextStyle'><i> ( Python, Flask, HTML/CSS, Javascript )</i></span></p>
                        <p className='desctextStyle'>Kaleidoscope is color-based image filtering website built upon image filtering mechanism based on color, using a machine
                     learning algorithm i.e. K Means Algorithm.</p>

                    </div>

                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/Movie-Reviews" className='underHyperLink'><u className='projectUnderline'>Loan Prediction</u></a><span className='subtextStyle'><i> ( Python )</i></span></p>
                       
                        <p className='desctextStyle'>Movie Reviews is Naïve Bayes Classifier that analyzes the sentiment
                     conveyed in text (reviews given by the users).</p>
                        
                    </div>   
                    <a href="/" className='goHome'>Go Home</a>   
                </div>
                             
</div>
}
export default Projects;