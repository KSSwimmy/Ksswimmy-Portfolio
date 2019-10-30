import React from 'react';
import 'antd/dist/antd.css';
import BottomName from '../../SVG/BottomName.svg'
import styled from 'styled-components'


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