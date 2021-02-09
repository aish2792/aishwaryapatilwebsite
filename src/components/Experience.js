import React from 'react';
import '../style/experience.css';

function Experience() 
{ 
    return <div className='cardContainer'>
        <div className='projectsTitle'>
            My Projects
        </div>
        <div className='rowContainer'>
            
                <a href="/Unxpired">
                        <h2 className='underline--magical'>Xpiration</h2> 
                </a>

                <a href="/LoanPrediction">   
                        <h2 className='underline--magical'>Loan Prediction</h2>
                </a>

                <a href="/Kaleidoscope">
                    <h2 className='underline--magical'>Kaleidoscope</h2>
                </a>
 
                <a href='MovieReviews'>
                    <h2 className='underline--magical'>Movie Reviews</h2>
                </a>
    
        </div>
    </div>
}
export default Experience;