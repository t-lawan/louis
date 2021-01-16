import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "gatsby"
import { size } from "../../index.styles";

const NavbarWrapper = styled.div`
  height: 100vh;
  padding: 0.25rem;
`

const NavbarSectionWrapper = styled.div`
  padding: 1rem 0;
  @media (max-width: ${size.mobileL}) {
    padding: 0.25rem 0;
  }
`

const NavbarLinksWrapper = styled.div``

const NavbarLink = styled(Link)`
  display: block;
`

const NavbarSectionLink = styled(NavbarLink)`
  text-decoration: underline;
  
`

const NavbarSectionTitle = styled.p`
  text-decoration: underline;
  @media (max-width: ${size.mobileL}) {
   margin-bottom: 0.25rem;
  }
`
const Navbar = props => {
  let sidebarLinks = props.sidebar_links;
  return (
    <NavbarWrapper>
      <NavbarLink to={"/"}>
        {" "}
        {props.site_info ? props.site_info.name : "louis mason "}{" "}
      </NavbarLink>
      {sidebarLinks.map((link, index) => (
        <NavbarSectionWrapper key={index}>
          {link.isLink ? (
            <NavbarSectionLink to={`/${link.linkedPage.slug}`}>
              {link.title}{" "}
            </NavbarSectionLink>
          ) : (
            <NavbarSectionTitle> {link.title}</NavbarSectionTitle>
          )}
          {link.pages ? (
            <NavbarLinksWrapper>
              {link.pages.map((page, i) => (
                <NavbarLink to={`/${page.slug}`} key={i}>
                  {" "}
                  {page.title}
                </NavbarLink>
              ))}
            </NavbarLinksWrapper>
          ) : null}
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
