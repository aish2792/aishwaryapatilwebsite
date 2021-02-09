import React from 'react';
import '../style/unexpired.css';


function Unxpired() 
{   
    return <div className='unxpiredStyle'>     
                <div className='titleContainer'>
                    <div className='titleStyle'>unXpired</div>
                    <div className='techStyle'><i>( Python, Django, Rest Api, React Native, Redux Toolkit, Sqlite )</i></div>
                </div>
                
                <div className='contentContainer'>
                    <div className='contentStyle'>unXpired is a mobile application for tracking expiration dates for any household products 
                        that allows users to store items, prices, along with their expiration dates. The application 
                        notifies the users when an item is closing in on its expiration date.
                        </div>
                    

                </div>
                
                <div className='footnoteStyle'>
                    
                        <a href="https://github.com/aish2792/expirydateapplication" style={{ textDecoration:'none'}}>
                            <div className='linkStyle'>Click here to view the source code</div>
                        </a>
                    
                </div>
                             

</div>
}
export default Unxpired;