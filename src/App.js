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
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App" style={{display: 'flex', flexDirection: 'column', flex: 1}}>

        <Header />
        <Route path='/' exact component={Introduction}/>
        <Route path='/' exact component={Experience}/>
        <Route path='/Unxpired' component={Unxpired}/>
        <Route path='/LoanPrediction' component={LoanPrediction}/>
        <Route path='/Kaleidoscope' component={Kaleidoscope}/>
        <Route path='/MovieReviews' component={MovieReviews}/>
        <Route path='/aboutme' component={AboutMe}/>
        <Footer />

    </div>

    </Router>
    
  );
}

export default App;
