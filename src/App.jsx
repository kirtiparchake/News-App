import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className=''>
        <Router>
          <Navbar /> {/* Navbar is placed outside Routes */}
          <Routes>
            <Route exact path="/General" element={<News key={"general"} pageSize={6} country="in" category="General"/>} />
            <Route exact path="/Business" element={<News key={"business"} pageSize={6} country="in" category="Business"/>} />
            <Route exact path="/Entertainment" element={<News key={"entertainment"} pageSize={6} country="in" category="Entertainment"/>} />
            <Route exact path="/Sports" element={<News key={"sports"} pageSize={6} country="in" category="Sports"/>} />
            <Route exact path="/Technology" element={<News key={"technology"} pageSize={6} country="in" category="Technology"/>} />
            <Route exact path="/Health" element={<News key={"health"} pageSize={6} country="in" category="Health"/>} />
            <Route exact path="/Science" element={<News key={"science"} pageSize={6} country="in" category="Science"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
