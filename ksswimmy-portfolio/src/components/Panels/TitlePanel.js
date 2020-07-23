import React from 'react';
import styled from 'styled-components'
import BottomName from '../../SVG/BottomName.svg'



const BottomPanel = styled.div`
position: absolute;
margin-top: -1px
margin: -22px 
width: 100%
`;

const TitlePanel = () => {
    return (
    <BottomPanel>
        
       

        <img  
        src={BottomName} 
        alt="title panel" />
    </BottomPanel>
    )
}

export default TitlePanel;