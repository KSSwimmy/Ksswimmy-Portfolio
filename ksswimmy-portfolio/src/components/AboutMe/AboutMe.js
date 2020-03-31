import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import LandingPageStars from '../../SVG/bodyStars.svg'
import MyPic from '../../SVG/me.jpg'




const Page = styled.div`
width: 100%;
height: 100vh;

`
const AboutMeDiv = styled.div`
margin-left: -35px;
width: 100%;
height: 100vh;
display: flex;
margin-top: 75px;
`
const Me = styled.div`
width: 400px
text-align: center;
margin: 100px 20px 20px 80px;
`
const AboutBorderDiv = styled.div`
width: 300px;
margin-bottom: 40px;
margin-left: 90px;
`
const About = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`
const FirstP = styled.div`

`
const SecP = styled.div`

`
const TheHTwo = styled.h2`
font-weight: 400;
color: #DCE3FF;
`
const TheParagraphDiv = styled.div`
font-size: 2.2rem;
width: 530px;
`


const AboutMe = () => {
    // eslint-disable-next-line
    let parallax;
  return (
    <Page>
        <Parallax className="layer" pages={1} ref={ref => parallax = ref}> 
            <ParallaxLayer offset={0} factor={1} style={{ background: 'linear-gradient(180deg, rgba(99,27,135,1) 0%, rgba(17,39,101,1) 8%, rgba(28,0,73,1) 97%)', backgroundSize: 'cover'  }} />
            <ParallaxLayer offset={0.1} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />


            <ParallaxLayer>
                <AboutMeDiv>
                    <Me>
                        <img
                        style={{borderRadius: '30px', width: '85%'}}  
                        src={MyPic} 
                        alt="That's Me" />
                    </Me>
                    <TheParagraphDiv>
                        <AboutBorderDiv 
                            style={{borderBottomStyle: 'solid',
                            borderBottomColor: '#DCE3FF', borderWidth: 'thin'}}>
                            <About>ABOUT</About>
                        </AboutBorderDiv>
                        <FirstP>
                            <TheHTwo>Hi! It's Me!</TheHTwo>
                            <p>I am a Full Stack Software Engineer and UX Designer from South Carolina with a background in design, retail, and hospitality. I'm capable of creating beautiful web applications and business branding design from top to bottom. Building awesome, functional, and eye catching products that people will use is my passion!</p> 
                        </FirstP>
                        <SecP>
                            <p>I’m also a mobile Paint & Sip hostess, who I loves to paint on denim jackets from time to time! (The Painting Gallivanter)</p>
                        </SecP>
                    </TheParagraphDiv>
                </AboutMeDiv>
            </ParallaxLayer>

        </Parallax>
    </Page>
    )
}






export default AboutMe;