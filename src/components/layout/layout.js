import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { GlobalStyle, TwoColumnSection } from "../../index.styles";
import SEO from "../seo";

const LayoutWrapper = styled.div`
    padding: 1rem;
    max-height: 100vh;
    max-width: 100vw;
`

const MainWrapper = styled.main`
    padding: 0.5rem; 
`

const Section = styled.div`
    /* background: pink; */
`
const Layout = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle />
            <SEO title={props.title} />
            <MainWrapper>
                <TwoColumnSection>
                    <Section>
                        {props.children}
                    </Section>
                    <div>
                        Hello
                    </div>
                </TwoColumnSection>
            </MainWrapper>
  
        </LayoutWrapper>


    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    colour: PropTypes.string
}


export default Layout;