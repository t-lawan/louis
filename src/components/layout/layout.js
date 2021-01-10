import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle, TwoColumnSection } from "../../index.styles"
import SEO from "../seo"
import Navbar from "../navbar/navbar";

const LayoutWrapper = styled.div`
  /* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */
`

const MainWrapper = styled.main`
  /* padding: 0.5rem; */
`

const Section = styled.div`
  background: yellow;
  padding: 0.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
`

const SideNavbar = styled.div`
  background: pink;
  height: 100vh;
  padding: 0.5rem;
`
const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <SEO title={props.title} />
      <MainWrapper>
        <TwoColumnSection>
          <Navbar />
          <Section>{props.children}</Section>
        </TwoColumnSection>
      </MainWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
