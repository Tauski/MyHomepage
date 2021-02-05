import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' component={Resume}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;