import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "gatsby";

const NavbarWrapper = styled.div`
  height: 100vh;
  padding: 0.5rem;
`

const NavbarSectionWrapper =  styled.div`
  padding: 1rem 0;
`

const NavbarLinksWrapper =  styled.div`

`

const NavbarLink = styled(Link)`
  display: block;
`

const NavbarSectionTitle =  styled.p`
text-decoration: underline;
`
const Navbar = props => {
  let sidebarLinks = props.sidebar_links;

  return (
    <NavbarWrapper>
      <NavbarLink to={'/'}> {props.site_info ?  props.site_info.name : "louis mason "} </NavbarLink>
      {sidebarLinks.map((link, index) => (
        <NavbarSectionWrapper key={index}>
          <NavbarSectionTitle> {link.title}</NavbarSectionTitle>
          <NavbarLinksWrapper>
            {link.pages.map((page, i) => (
              <NavbarLink to={`/${page.slug}`} key={i}> {page.title}</NavbarLink>
            ))}
          </NavbarLinksWrapper>
        </NavbarSectionWrapper>
      ))}
    </NavbarWrapper>
  )
}

const mapStateToProps = state => {
  return {
    sidebar_links: state.sidebar_links,
    site_info: state.site_info
  }
}

export default connect(
  mapStateToProps,
  null
)(Navbar)
