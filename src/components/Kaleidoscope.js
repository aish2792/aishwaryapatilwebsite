import React from 'react';
import '../style/unexpired.css';


function Kaleidoscope() 
{   
    return <div className='unxpiredStyle'>     
                <div className='titleContainer'>
                    <div className='titleStyle'>Kaleidoscope</div>
                    <div className='techStyle'><i> ( Python, Flask, HTML/CSS, Javascript )</i></div>
                </div>
                
                <div className='contentContainer'>
                    <div className='contentStyle'>Kaleidoscope website is built upon image filtering mechanism based on color, using a machine
                     learning algorithm i.e. K Means Algorithm. It provides users with a predominant set of colors from the images. The users 
                     can select amongst a predefined set of colors to see which image has a similar approximate color in the top 10 colors
                      of the given images. The users can also upload their own images and play with the website to enjoy the color based 
                      filtering. 
                    </div>

                </div>
                <div className='footnoteStyle'>
                    
                        <a href="https://github.com/aish2792/Image-filtering" style={{ textDecoration:'none'}}>
                            <div className='linkStyle'>Click here to view the source code</div>
                        </a>
                    
                </div>
                             

</div>
}
export default Kaleidoscope;