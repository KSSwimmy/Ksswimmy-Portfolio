import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import LandingPageStars from '../SVG/bodyStars.svg'
import Arrow from '../SVG/arrow.svg'

const Page = styled.div`
width: 100%;
height: 100vh;
`
const CenteredContainer = styled.div`
text-align: center;
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: column;
align-content: center;
`
const TitleContainer = styled.div`
width: 100%;
text-align: center;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

 
`
const SubtDiv = styled.div`
font-weight: 900;
margin: 0 auto;
color: #DCE3FF;
font-size: 3.5rem;
text-align: center;

`
const CircleDiv = styled.div`
width: 89%;
display: flex;
lex-direction: row;
justify-content: space-evenly;
text-align: center;
margin: 0 auto;
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

const NumberDiv = styled.span`
margin-top: 30px;
`
const Sub = styled.span`
`

const SkillsDiv = styled.h1`
width: 100%;
font-weight: 900;
margin: 0 auto;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`
const SkillsBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;

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

                    <span>
                        <img
                        style={{width:'55%', marginTop: '50px'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </span>

                    <Circles>
                        <NumberDiv>2</NumberDiv> 
                        <Sub>Design</Sub>
                    </Circles>

                    <span>
                        <img
                        style={{width:'55%', marginTop: '50px'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </span>

                    <Circles>
                        <NumberDiv>3</NumberDiv> 
                        <Sub>Code</Sub>
                    </Circles>

                    <span>
                        <img
                        style={{width:'55%', marginTop: '50px'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </span>

                    <Circles>
                        <NumberDiv>4</NumberDiv> 
                        <Sub>Nap</Sub>
                    </Circles>

                    <span>
                        <img
                        style={{width:'55%', marginTop: '50px'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </span>

                    <Circles>
                        <NumberDiv>5</NumberDiv> 
                        <Sub>Repeat</Sub>
                    </Circles>
                </CircleDiv>
            </CenteredContainer>
            </ParallaxLayer>



        </Parallax>
    </Page>
)}

export default Skills;