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

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/series' exact component={Series} />
          <Route path='/movies' exact component={Movies} />
          <Route component={Error}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
