import React from 'react';
import TitlePanel from './components/Panels/TitlePanel'
import TopNamePanel from './components/Panels/TopNamePanel'
import './index.css'
import ParallaxEffect from './components/Planets/ParallaxEffect';
import AboutMe from './components/AboutMe/AboutMe'


function App() {
  return (
    <div className="App">
      
    {/* <TitlePanel /> 
    <TopNamePanel /> */}
    <ParallaxEffect />
    <AboutMe />
      
     
        
     
    </div>

  );
}

export default App;
