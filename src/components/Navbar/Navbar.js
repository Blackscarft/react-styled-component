import React, { useState, useEffect } from 'react'
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaTimes,  FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../GlobalStyles'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HaburgerMenu,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect( () =>  {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        {/* setting color icon */}
        <IconContext.Provider value={{ color: '#fff' }} > 
            <Nav>
                <NavbarContainer>

                    <NavLogo to="/">
                        <NavIcon />
                        ULTRA
                    </NavLogo>

                    <HaburgerMenu onClick={handleClick}>
                        { click ? <FaTimes/> : <FaBars/> }
                    </HaburgerMenu>

                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'> Home </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'> Services </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'> Products </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary> SIGN UP </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button fontBig primary> SIGN UP </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar