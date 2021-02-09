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
                        {/* <a href= style={{ textDecoration:'none'}}>
                            <div className='projectlinkStyle'>Click here to view the source code</div>
                        </a> */}
                    </div>

                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/Loan-Prediction"  className='underHyperLink'><u className='projectUnderline'>Loan Prediction</u></a><span className='subtextStyle'><i> ( Python, Django, Rest Api, React Native, Redux Toolkit, SQLite )</i></span></p>
                        <p className='desctextStyle'>Loan prediction website offers automated loan eligibility process 
                    based on customer detail provided while filling online application form.</p>
                        {/* <a href=style={{ textDecoration:'none'}}>
                            <div className='projectlinkStyle'>Click here to view the source code</div>
                        </a> */}
                    </div>

                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/Image-filtering"  className='underHyperLink'><u className='projectUnderline'>Loan Prediction</u></a><span className='subtextStyle'><i> ( Python, Flask, HTML/CSS, Javascript )</i></span></p>
                        <p className='desctextStyle'>Kaleidoscope is color-based image filtering website built upon image filtering mechanism based on color, using a machine
                     learning algorithm i.e. K Means Algorithm.</p>
                        {/* <a href= style={{ textDecoration:'none'}}>
                            <div className='projectlinkStyle'>Click here to view the source code</div>
                        </a> */}
                    </div>

                    <div className='singleProjectContainer'>
                        <p className='projectContentStyle'><a href="https://github.com/aish2792/Movie-Reviews" className='underHyperLink'><u className='projectUnderline'>Loan Prediction</u></a><span className='subtextStyle'><i> ( Python )</i></span></p>
                       
                        <p className='desctextStyle'>Movie Reviews is Naïve Bayes Classifier that analyzes the sentiment
                     conveyed in text (reviews given by the users).</p>
                        
                    </div>   
                    <a href="/" className='goHome'>Go Home</a>   
                </div>
                {/* <div className='titleContainer'>
                    <div className='titleStyle'>Projects</div> */}
                    {/* <div className='techStyle'><i>( Python, Django, Rest Api, React Native, Redux Toolkit, SQLite )</i></div> */}
                {/* </div> */}
{/*                 
                <div className='contentContainer'>
                    <div>
                        unXpired
                    </div>
                    <div>
                        Loan Prediction
                    </div>
                    <div>
                        Kaleidoscope
                    </div>
                    <div>
                        Movie Reviews
                    </div> */}
                    {/* <div className='contentStyle'>unXpired is a mobile application for tracking expiration dates for any household products 
                        that allows users to store items, prices, along with their expiration dates. The application 
                        notifies the users when an item is closing in on its expiration date.
                        </div> */}
                    

                {/* </div> */}
                
                {/* <div className='footnoteStyle'>
                    
                        <a href="https://github.com/aish2792/expirydateapplication" style={{ textDecoration:'none'}}>
                            <div className='linkStyle'>Click here to view the source code</div>
                        </a>
                    
                </div> */}
                             

</div>
}
export default Projects;