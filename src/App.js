import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-3 ">
              <Sidebar />
            </div>
            <div className="col-lg-9  app_mainComponent">
              <Navbar />
              <AnimatePresence>
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
