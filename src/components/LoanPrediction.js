import React from 'react';
import '../style/unexpired.css';


function LoanPrediction() 
{   
    return <div className='unxpiredStyle'>     
                <div className='titleContainer'>
                    <div className='titleStyle'>Loan Prediction</div>
                    <div className='techStyle'><i>( Python, Django, Rest Api, React Native, Redux Toolkit, Sqlite )</i></div>
                </div>
                
                <div className='contentContainer'>
                    <div className='contentStyle'>Loan prediction is a very common real-life problem that every retail bank faces in 
                    their lending operations. If the loan approval process is automated, it can save a lot of man hours and improve 
                    the speed of service to the customers. Loan prediction website offers automated loan eligibility process 
                    based on customer detail provided while filling online application form. These details are Gender, Marital Status, 
                    Education, Number of Dependents, Income, Loan Amount, Credit History and others. We thereby, predict customers who 
                    are eligible to get a loan through this application.
                    </div>

                </div>
                <div className='footnoteStyle'>
                    
                        <a href="https://github.com/aish2792/Loan-Prediction" style={{ textDecoration:'none'}}>
                            <div className='linkStyle'>Click here to view the source code</div>
                        </a>
                    
                </div>
                             

</div>
}
export default LoanPrediction;