import React from 'react';
import logo from './logo.svg';
import './App.css';
// import LaunchContainer from './components/Launch';
import Launch from './components/Launch'
import LaunhDetails from './components/LaunchDetails';
import LaunhDetailsContainer from './components/LaunchDetails';
import Globlestate from './components/globlestate'


function App() {
  return (
    <div className="App">
      <Globlestate>
        <Launch/>
        <LaunhDetailsContainer/>  
      </Globlestate>
    </div>
  );
}

export default App;
