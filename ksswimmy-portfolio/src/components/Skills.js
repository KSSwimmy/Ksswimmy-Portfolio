import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import LandingPageStars from '../SVG/bodyStars.svg'
import Arrow from '../SVG/arrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 ,faCss3Alt, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons'





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
const SubtDiv = styled.h2`
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
const SkillDesripContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`
const PL = styled.div`
text-align: center;
width: 500px;
margin: 15px;
`
const Icons = styled.span`
font-size: 7rem;
width: 400px;
text-align: center;
margin: 0 auto;
display: flex;
justify-content: space-between;
margin-top: 50px;

`

const Serve = styled.ul`
list-style-type: none;
text-align: center;
margin: 15px;
font-size: 2.2rem;
`
const Ht = styled.h2`
font-weight: 900;
margin: 0 auto;
color: #DCE3FF;
font-size: 3.5rem;

`


const Skills = () => {
    // eslint-disable-next-line
    let parallax;
  return (
    <Page>
        <Parallax className="layer" pages={1} ref={ref => parallax = ref}> 
            
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
                </CircleDiv >
            </CenteredContainer>

            <SkillDesripContainer style={{borderTopStyle: 'solid',
                                   borderTopColor: '#DCE3FF', borderWidth: 'thin', margin: '50px'}}>
                <PL>
                    <Ht>PROGRAMMING LANGUAGES</Ht>
                    <Icons>
                        <FontAwesomeIcon icon={faHtml5} />
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <FontAwesomeIcon icon={faJava} />
                        <FontAwesomeIcon icon={faJs} />
                        <FontAwesomeIcon icon={faPython} />
                    </Icons>
                </PL>
                <Serve>
                    <Ht>SERVICES</Ht>
                    <li>Website Development</li>
                    <li>Website Design</li>
                    <li>Logos</li>
                    <li>Corporate Identity</li>
                    <li>Flyers, Brochures, Posters, etc</li>
                </Serve>
            </SkillDesripContainer>
            </ParallaxLayer>



        </Parallax>
    </Page>
)}

export default Skills;