import React from 'react'
import TopName from '../../SVG/TopName.svg'
import styled from 'styled-components'
import {Transition} from 'react-spring/renderprops'

// Will make the repetitive font-family property more dynamic



const TopNameP = styled.div`
position: absolute;
margin-top: -1px
margin: -22px 
width: 100%


.heading {font-family: 'Exo 2', sans-serif};

`;

// will look for animation for the slides or use parallax on them. 
// timer for parallax slides?
//jnsefnekn 


const Para = styled.h1`
position: absolute;
  top: 37px;
  left: 46px;
  font-size: 2.5rem;
  font-weight: bold;
  color: white
  

`;

const ParaTwo = styled.h1`
position: absolute;
  top: 40px;
  left: 50px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #813CD9
  
   
`;

const ParaThree = styled.h1`
position: absolute;
  top: 46px;
  left: 55px;
  font-size: 2.5rem;
  font-weight: bolder;
  color: #17135D
  
   
`;

const Portfolio = styled.h1`
position: absolute;
  top: 100px;
  left: 145px;
  font-size: 2.5rem;
  font-weight: 200;
  font-style: italic
  color: white
  font-family: 'Exo 2', sans-serif;
   
`;

 


const TopNamePanel = () => {
    return ( 

    <TopNameP>        
        <img  
        src={TopName} 
        alt="title panel" />

    <Portfolio> 
        PORTFOLIO
    </Portfolio>  

    <ParaThree className="heading"> 
        KIMBERLY SWINTON'S 
    </ParaThree>   
    
    <ParaTwo className="heading"> 
        KIMBERLY SWINTON'S 
    </ParaTwo> 
        
    <Para className="heading"> 
        KIMBERLY SWINTON'S 
    </Para>

    </TopNameP>
    
    );
};




export default TopNamePanel;
