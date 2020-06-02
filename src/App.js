import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Series from './components/series';
import Movies from './components/movies';
import Error from './components/error';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component{
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <div className='content'>
            <Route path='/' exact component={Home} />
            <Route path='/series' exact component={Series} />
            <Route path='/movies' exact component={Movies} />
            {/* <Route component={Error}/> */}
          </div>
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;
