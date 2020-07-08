import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Myaccount from './Myacount';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App(){

    return(
      <Router>
    <div className="App">
      <Nav/>

      <Switch>
         <Route path= "/" exact component={Home}/>
         <Route path="/Myaccount" component={Myaccount}/>
      </Switch>

    </div>
      </Router>
    );
}

export default App;
