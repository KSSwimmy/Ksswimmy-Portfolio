import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import TheSun from '../../SVG/sun.svg'
import Earth from '../../SVG/earth.svg'
import Jupiter from '../../SVG/jupiter.svg'

const Tester = styled.h1`
    color: white
`

const TheSunn = styled.div`
display: flex;
justify-content: flex-start;
`


//functional component
const ParallaxEffect = () => {
    let parallax;
  return (
<Tester>
    <Parallax className="layer" pages={3} ref={ref => parallax = ref}>
      <ParallaxLayer offset={0} speed={0}>
        <TheSunn><img
        style={{width:'100%'}}  
        src={TheSun} 
        alt="sun" /></TheSunn>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={1}>
        <span><img
        // style={{width:'100%'}}  
        src={Earth} 
        alt="sun" /></span>
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={3}>
        <span><img
        // style={{width:'100%'}}  
        src={Jupiter} 
        alt="sun" /></span>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.2} offset={1.3}>
        <span>I'm going in the other direction!</span>
      </ParallaxLayer>
    </Parallax>
</Tester>
  );
}

export default ParallaxEffect;












