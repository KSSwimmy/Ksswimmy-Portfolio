import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import TheSun from '../../SVG/sun.svg'
import Earth from '../../SVG/earth.svg'
import Jupiter from '../../SVG/jupiter.svg'
import Mars from '../../SVG/mars.svg'
import Mercury from '../../SVG/mercury.svg'
import Venus from '../../SVG/venus.svg'

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

 

      
        <ParallaxLayer offset={0} speed={0.5}>
            <img
          style={{width:'20%', marginLeft: '-3%'}}  
          src={TheSun} 
          alt="sun" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={2.7}>
            <img
          style={{width:'20%', marginLeft: '70%', marginTop:'10%'}}  
          src={Mercury} 
          alt="mercury" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0} style={{ opacity: 0.7 }}>
            <img
          style={{width:'3%', marginLeft: '30%'}}  
          src={Venus} 
          alt="venus" />
        </ParallaxLayer>
      
        <ParallaxLayer offset={3} speed={3}>
          <span>
            <img
          style={{width:'100%'}}  
          src={Jupiter} 
          alt="Jupiter" /></span>
        </ParallaxLayer>
      

     
        <ParallaxLayer speed={-0.2} offset={2}>
          <span>
              <img
            style={{width:'20%'}}  
            src={Mars} 
            alt="Mars" />
            </span>
        </ParallaxLayer>


      
        <ParallaxLayer offset={0.9} speed={2.9}>
          <img
          style={{width:'45%', marginTop:'20%', marginLeft: '30%'}}  
          src={Earth} 
          alt="Earth" />
        </ParallaxLayer>
      

     

 

  </Parallax>


  );
}

export default ParallaxEffect;












