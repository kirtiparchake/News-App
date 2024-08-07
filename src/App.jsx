import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import './index.css';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  const handleProgress = (progressValue) => {
    setProgress(progressValue);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}
          />
          <Route
            exact
            path="/general"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={handleProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
