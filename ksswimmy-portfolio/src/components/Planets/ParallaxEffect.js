import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import TheSun from '../../SVG/sun.svg'
import Earth from '../../SVG/earth.svg'
import Jupiter from '../../SVG/jupiter.svg'
import Mars from '../../SVG/mars.svg'

const Tester = styled.div`
    

`

const PlanetDiv = styled.div`
.ChildContainer

`


//functional component
const ParallaxEffect = () => {
    let parallax;
  return (


    <Parallax className="layer" pages={4} ref={ref => parallax = ref}>

    <Tester>

      <PlanetDiv className="sunDiv">
        <ParallaxLayer offset={0} speed={0}>
          <span>
            <img
          style={{width:'100%'}, {paddingBottom: 700}}  
          src={TheSun} 
          alt="sun" />
          </span>
        </ParallaxLayer>
      </PlanetDiv>

      <PlanetDiv className="earthDiv">
        <ParallaxLayer offset={1.2} speed={1}>
          <span><img
          style={{width:'100%'}}  
          src={Earth} 
          alt="Earth" />
          </span>
        </ParallaxLayer>
      </PlanetDiv>

      <PlanetDiv className="jupiterDiv">
        <ParallaxLayer offset={0.9} speed={3}>
          <span>
            <img
          style={{width:'100%'}}  
          src={Jupiter} 
          alt="Jupiter" /></span>
        </ParallaxLayer>
      </PlanetDiv>

      <PlanetDiv className="jupiterDiv">
        <ParallaxLayer speed={-0.2} offset={1.3}>
          <span>
              <img
            style={{width:'100%'}}  
            src={Mars} 
            alt="Mars" />
            </span>
        </ParallaxLayer>
      </PlanetDiv>

    </Tester>

  </Parallax>


  );
}

export default ParallaxEffect;












