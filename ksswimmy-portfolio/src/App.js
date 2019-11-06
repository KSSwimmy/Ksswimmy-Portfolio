import React from 'react';
import TitlePanel from './components/Panels/TitlePanel'
import TopNamePanel from './components/Panels/TopNamePanel'
import './index.css'
import ParallaxEffect from './components/Planets/ParallaxEffect';


function App() {
  return (
    <div className="App">
      <TitlePanel /> 
      <TopNamePanel />
      <ParallaxEffect />
    </div>
  );
}

export default App;