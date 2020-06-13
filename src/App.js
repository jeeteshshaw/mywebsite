import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hompage from './components/Homepage/Hompage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About/About';
import Login from './components/Login/Login';
import Demo from './components/Demo/Demo';
import Signup from './components/Signup/Signup'
import Welcome from './components/Welcome/Welcome'
import Modal from './components/Modules/Modal/Modal'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Hompage} />
          <Route path='/about' component={About} />
          <Route path='/user/login' component={Login} />
          <Route path='/demo' component={Demo} />
          <Route path='/user/register' component={Signup} />
          <Route path='/user/welcome/:name' component={Welcome} />
          <Route path='/modal' component={Modal} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
