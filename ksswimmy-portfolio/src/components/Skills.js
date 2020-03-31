import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import LandingPageStars from '../SVG/bodyStars.svg'

const Page = styled.div`
width: 100%;
height: 100vh;
`
const CenteredContainer = styled.div`

`
const TitleContainer = styled.div`
width: 500px;
text-align: center;
display: flex;
flex-direction: column;


`
const SubtDiv = styled.div`
font-weight: 900;
margin-top: 0px;
color: #DCE3FF;
font-size: 3.5rem;
text-align: center;
`
const CircleDiv = styled.div`
display: flex;
lex-direction: row;
`
const Circles = styled.div`
width: 186px;
height: 186px;
border-radius: 50%; 
color: #DCE3FF; 
background-color: #1E0030;
font-size: 3.3rem;
font-weight: 900;
display: flex;
flex-direction: column;
text-align: center;
`
const ParentCSpan = styled.span`

`
const NumberDiv = styled.span`
margin-top: 30px;
`
const Sub = styled.span`
`

const SkillsDiv = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`
const SkillsBorderDiv = styled.div`
width: 300px;
margin-bottom: 0px;
margin-left: 90px;
`

const Skills = () => {
    // eslint-disable-next-line
    let parallax;
  return (
    <Page>
        <Parallax className="layer" pages={1} ref={ref => parallax = ref}> 
            <ParallaxLayer offset={0} factor={1} style={{ backgroundColor: '#1c0049', backgroundSize: 'cover'  }} />
            <ParallaxLayer offset={0.1} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />

            <ParallaxLayer>
            <CenteredContainer>
                <TitleContainer>
                    <SkillsBorderDiv 
                        style={{borderBottomStyle: 'solid',
                        borderBottomColor: '#DCE3FF', borderWidth: 'thin'}}>
                        <SkillsDiv>SKILLS</SkillsDiv>
                    </SkillsBorderDiv>
                    <SubtDiv>MY DEVELOPMENT PROCESS</SubtDiv>
                </TitleContainer>
                <CircleDiv>
                    <Circles>
                        <NumberDiv>1</NumberDiv> 
                        <Sub>Concept</Sub>
                    </Circles>
                </CircleDiv>
            </CenteredContainer>
            </ParallaxLayer>



        </Parallax>
    </Page>
)}

export default Skills;