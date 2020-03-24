import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import TheSun from '../../SVG/sun.svg'
import Earth from '../../SVG/earth.svg'
import Jupiter from '../../SVG/jupiter.svg'
import Mars from '../../SVG/mars.svg'
import Saturn from '../../SVG/saturn.svg'
import Mercury from '../../SVG/mercury.svg'
import Venus from '../../SVG/venus.svg'
import Moon from '../../SVG/moon.svg'
import Satellite from '../../SVG/satellite.svg'
import LandingPageStars from '../../SVG/landingPageStars.svg'

const Tester = styled.div`
background-color: linear-gradient(180deg, rgba(39,114,179,1) 0%, rgba(6,83,149,1) 14%, rgba(17,39,101,1) 55%, rgba(99,27,135,1) 96%);  
width: 100% ;
height: 100vh;
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
      <ParallaxLayer offset={0} speed={1} factor={8} style={{ background: 'linear-gradient(180deg, rgba(39,114,179,1) 0%, rgba(6,83,149,1) 30%, rgba(17,39,101,1) 62%, rgba(99,27,135,1) 96%)rgb(39,114,179)', backgroundSize: 'cover'  }} />
      
      <ParallaxLayer offset={0} speed={0.3} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />
      <ParallaxLayer offset={0.6} speed={0.3} factor={2} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />
      <ParallaxLayer offset={1} speed={0.5} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />
      <ParallaxLayer offset={2} speed={0.7} factor={2} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />

      
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
                       >
            <img
          style={{width:'3%', marginLeft: '30%'}}  
          src={Mercury} 
          alt="Mercury" />
        </ParallaxLayer>

      
        <ParallaxLayer offset={1.9} 
                       speed={2}>
          <span>
            <img
          style={{width:'20%'}}  
          src={Jupiter} 
          alt="Jupiter" />
          </span>
        </ParallaxLayer>
      
        <ParallaxLayer speed={0.7} 
                       offset={1}>
          <span>
              <img
            style={{width:'8%', marginLeft: '10%', marginTop:'-10%'}}  
            src={Saturn} 
            alt="Saturn" />
            </span>
        </ParallaxLayer>
     
        <ParallaxLayer speed={3} 
                       offset={1}>
          <span>
              <img
            style={{width:'30%', marginLeft: '60%', marginTop:'-10%'}}  
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
                       speed={1.5}>
          <img
          style={{width:'13%', marginTop:'5%', marginLeft: '17%'}}  
          src={Satellite} 
          alt="Satellite" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} 
                       speed={0.70}>
          <img
          style={{width:'10%', marginTop:'3%', marginLeft: '85%'}}  
          src={Moon} 
          alt="Moon" />
        </ParallaxLayer>
      
        </Tester>
     
 

  </Parallax>


  );
}

export default ParallaxEffect;












