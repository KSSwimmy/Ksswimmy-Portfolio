import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import TheSun from '../../SVG/sun.svg'
import Earth from '../../SVG/earth.svg'
import Jupiter from '../../SVG/jupiter.svg'
import Mars from '../../SVG/mars.svg'
import Mercury from '../../SVG/mercury.svg'

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

 

      
        <ParallaxLayer offset={-0.1} speed={0}>
            <img
          style={{width:'20%', marginLeft: '-3%', marginTop: '4%'}}  
          src={TheSun} 
          alt="sun" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={1.5}>
            <img
          style={{width:'20%', marginLeft: '70%', marginTop:'3%'}}  
          src={Mercury} 
          alt="sun" />
        </ParallaxLayer>
      

      
        <ParallaxLayer offset={0.9} speed={3}>
          <span>
            <img
          style={{width:'100%'}}  
          src={Jupiter} 
          alt="Jupiter" /></span>
        </ParallaxLayer>
      

     
        <ParallaxLayer speed={-0.2} offset={1.3}>
          <span>
              <img
            style={{width:'20%'}}  
            src={Mars} 
            alt="Mars" />
            </span>
        </ParallaxLayer>


      
        <ParallaxLayer offset={3.3} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img
          style={{width:'40%'}}  
          src={Earth} 
          alt="Earth" />
        </ParallaxLayer>
      

     

 

  </Parallax>


  );
}

export default ParallaxEffect;












