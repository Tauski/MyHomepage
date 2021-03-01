import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/ScrollToTop';

/*MAIN FUNCTION route clickables to corresponding pages*/
/*NAVBAR, creates navigation bar on top of the screen*/
/*SCROLLTOTOP always scroll top of screen when changing pages*/ 

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' component={Resume}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
