import React from 'react';
import './index.css'
import ParallaxEffect from './components/Planets/ParallaxEffect';
import AboutMe from './components/AboutMe/AboutMe';
import styled from 'styled-components'


const AppDiv = styled.div`

`

function App() {
  return (
    <div className="App">
    <ParallaxEffect />
    {/* <AboutMe /> */}
    </div>

  );
}

export default App;
