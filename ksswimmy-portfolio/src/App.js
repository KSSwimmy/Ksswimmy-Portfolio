import React from 'react';
import TitlePanel from './components/Panels/TitlePanel'
import TopNamePanel from './components/Panels/TopNamePanel'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <TopNamePanel />
      <TitlePanel /> 
    </div>
  );
}

export default App;
