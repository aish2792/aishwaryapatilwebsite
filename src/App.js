import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Unxpired from './components/Unxpired';
import LoanPrediction from './components/LoanPrediction';
import Kaleidoscope from './components/Kaleidoscope';
import MovieReviews from './components/MovieReviews';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub, faInstagramSquare , faGoogle} from "@fortawesome/free-brands-svg-icons";




function App() {
  return (
    <Router>
      {/* <div className="App" style={{display: 'flex', flexDirection: 'column', flex: 1}}> */}
      <div className='container'>
      

        {/* <Header /> */}
        <Route path='/' exact component={AboutMe}/>
        {/* <Route path='/' exact component={Experience}/> */}
        <Route path='/Projects' component={Projects}/>
        {/* <Route path='/Unxpired' component={Unxpired}/>
        <Route path='/LoanPrediction' component={LoanPrediction}/>
        <Route path='/Kaleidoscope' component={Kaleidoscope}/>
        <Route path='/MovieReviews' component={MovieReviews}/> */}
        {/* <Route path='/aboutme'   component={AboutMe}/> */}
        

    
        </div>
        <div class="clear"></div>
        <footer className="footer fixed-bottom">
        <div className="container">
          <div className="row justify-content-center rowStyle">

            <div className="col-xs-12"> 
              <a
                  className="faLinkedin app-link social-media-list "
                  href="https://www.linkedin.com/in/aishwarya-patil2792"
                  target="_blank"
                  rel="noopener noreferrer"
                  >

                  <FontAwesomeIcon icon={faLinkedin} size="2x" className='iconStyle'/>
              </a>

       
         
            <a
              className="faGithub app-link social-media-list iconPadding"
              href="https://github.com/aish2792/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <FontAwesomeIcon icon={faGithub} size="2x" className='iconStyle'/>
            </a>

          

            <a
              className="fatwitter app-link social-media-list"
              href = "mailto:aishp2792@gmail.com?subject = Feedback&body = Message"
              target="_blank"
              rel="noopener noreferrer"
              >
              <FontAwesomeIcon icon={faGoogle} size="2x" className='iconStyle'/>
            </a>


            </div>
            
          </div>
          <div className='row justify-content-center'>
          <p className="footerNote">© 2020-present designed by Aishwarya Patil</p>
          </div>
          
          
          
        </div>
      </footer>
    </Router>
    
    
  );
}

export default App;
