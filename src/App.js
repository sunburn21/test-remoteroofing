// importing libraries and components
import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// importing required components
import Home from './components/home';
import Series from './components/series';
import Movies from './components/movies';
import Error from './components/error';
import Header from './components/header';
import Footer from './components/footer';

// importing the css 
import './App.css';


// The main App component
class App extends Component{
  render(){
    return (
      // Implemented React Router
      <Router>
        <Header/>
        <div className='main-content'>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/series' exact component={Series} />
            <Route path='/movies' exact component={Movies} />
            <Route component={Error}/>
        </Switch>
        </div>
        <Footer/>
      </Router>
    )
  }
}

export default App;
