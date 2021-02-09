import React from 'react';
import '../style/unexpired.css';


function MovieReviews() 
{   
    return <div className='unxpiredStyle'>     
                <div className='titleContainer'>
                    <div className='titleStyle'>Movie Reviews</div>
                    <div className='techStyle'><i> ( Python )</i></div>
                </div>
                
                <div className='contentContainer'>
                    <div className='contentStyle'>In this code, I have implemented a Naïve Bayes Classifier that analyzes the sentiment
                     conveyed in text. When given a selection of text as input, the code
 will return whether the text is positive, negative, or neutral. The code uses a corpus
of movie reviews as training and testing data, using the number of stars assigned to each review
by its author as the truth data (1 star is negative, 5 stars is positive).
                    </div>

                </div>
                <div className='footnoteStyle'>
                    
                        <a href="https://github.com/aish2792/Movie-Reviews" style={{ textDecoration:'none'}}>
                            <div className='linkStyle'>Click here to view the source code</div>
                        </a>
                    
                </div>
                             

</div>
}
export default MovieReviews;