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
import Moon from '../../SVG/moon.svg'
import Satellite from '../../SVG/satellite.svg'

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

 

      
        <ParallaxLayer offset={0} 
                       speed={0.5}>
            <img
          style={{width:'20%', marginLeft: '-3%'}}  
          src={TheSun} 
          alt="Sun" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} 
                       speed={2.7}>
            <img
          style={{width:'20%', marginLeft: '70%', marginTop:'10%'}}  
          src={Venus} 
          alt="Venus" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} 
                       speed={0}
                       style={{ opacity: 0.7 }}>
            <img
          style={{width:'2%', marginLeft: '30%'}}  
          src={Mercury} 
          alt="Mercury" />
        </ParallaxLayer>

      
        <ParallaxLayer offset={3} 
                       speed={4}>
          <span>
            <img
          style={{width:'50%'}}  
          src={Jupiter} 
          alt="Jupiter" /></span>
        </ParallaxLayer>
      

     
        <ParallaxLayer speed={2} 
                       offset={2}>
          <span>
              <img
            style={{width:'20%', marginLeft: '30%'}}  
            src={Mars} 
            alt="Mars" />
            </span>
        </ParallaxLayer>


      
        <ParallaxLayer offset={0.95} 
                       speed={2.15}>
          <img
          style={{width:'45%', marginTop:'20%', marginLeft: '25%'}}  
          src={Earth} 
          alt="Earth" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} 
                       speed={2}>
          <img
          style={{width:'15%', marginTop:'23%', marginLeft: '10%'}}  
          src={Satellite} 
          alt="Satellite" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} 
                       speed={0.70}>
          <img
          style={{width:'8.10%', marginTop:'3%', marginLeft: '85%'}}  
          src={Moon} 
          alt="Moon" />
        </ParallaxLayer>
      

     

 

  </Parallax>


  );
}

export default ParallaxEffect;












