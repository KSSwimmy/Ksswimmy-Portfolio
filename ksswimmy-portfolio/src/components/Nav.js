import React from 'react';
import { useSpring } from 'react-spring'
import styled from 'styled-components'

const NavBarParent = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const NavBar = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;

`

const NavButton = styled.nav`

`
const Button = styled.button`
background:none;
border:none;
font-size: 2.5em;
`

const Nav = () => {
    const [, setY] = useSpring(() => ({ y: 0 }))
return(
<NavBarParent>    
    <NavBar>
     <nav>
        <Button 
            onClick={() => {
                setY({
                y: 0,
                reset: true,
                from: { y: window.scrollY },
                onFrame: props => window.scroll(0, props.y)
                })
            }}
            >
                ABOUT
            </Button>
            <Button>
                SKILLS 
            </Button>
            <Button>
                DEVELOPER 
            </Button>
            <Button>
                DESIGNER
        </Button>
     </nav>
    </NavBar>
        <NavButton>
            <Button>
                SAY HI!
            </Button>
        </NavButton>
    
</NavBarParent>
)
}

export default Nav;