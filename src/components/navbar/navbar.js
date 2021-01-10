import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"


const NavbarWrapper= styled.div`
    background: pink;
    height: 100vh;
    padding: 0.5rem;
`
const Navbar = props => {
  return (
    <NavbarWrapper>
        <p> Navbar </p>
    </NavbarWrapper>
  )
}


export default Navbar
