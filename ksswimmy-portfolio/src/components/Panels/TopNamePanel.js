import React from 'react'
import TopName from '../../SVG/TopName.svg'
import styled from 'styled-components'

// Will make the repetitive font-family property more dynamic

const TopNameP = styled.div`
position: absolute;
margin-top: -1px
margin: -22px 
width: 100%
`;

const Para = styled.h1`
position: absolute;
  top: 37px;
  left: 46px;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  font-family: 'Exo 2', sans-serif;
   
`;

const ParaTwo = styled.h1`
position: absolute;
  top: 40px;
  left: 50px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #813CD9
  font-family: 'Exo 2', sans-serif;
   
`;

const ParaThree = styled.h1`
position: absolute;
  top: 46px;
  left: 55px;
  font-size: 2.5rem;
  font-weight: bolder;
  color: #17135D
  font-family: 'Exo 2', sans-serif;
   
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

    <ParaThree> 
        KIMBERLY SWINTON'S 
    </ParaThree>   
    
    <ParaTwo> 
        KIMBERLY SWINTON'S 
    </ParaTwo> 
        
    <Para> 
        KIMBERLY SWINTON'S 
    </Para>

    </TopNameP>
    
    );
};




export default TopNamePanel;
