import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import { isLoaded, setPages, setSidebarLinks, setSiteInfo } from "../../store/actions"
const State = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulPage {
          edges {
            node {
              contentful_id
              slug
              seoDescription {
                seoDescription
              }
              sections {
                contentful_id
                title
                image {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
                text {
                  raw
                }
                type
                images {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              title
            }
          }
        }
        allContentfulSiteInfo {
          edges {
            node {
              name
              description {
                description
              }
            }
          }
        }

        allContentfulSidebarSection {
          edges {
            node {
              contentful_id
              title
              pages {
                contentful_id
                slug
                title
              }
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulPage, allContentfulSidebarSection, allContentfulSiteInfo } = data

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let sidebarLinks = Convert.toModelArray(
      allContentfulSidebarSection,
      Convert.toSidebarLinks
    )   
    let siteInfo = Convert.toModelArray(allContentfulSiteInfo, Convert.toSiteModel)[0]

    sidebarLinks.reverse()

    props.setPages(pages)
    props.setSiteInfo(siteInfo);
    props.setSidebarLinks(sidebarLinks)
    props.loaded()
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPages: pages => dispatch(setPages(pages)),
    setSiteInfo: site_info => dispatch(setSiteInfo(site_info)),
    setSidebarLinks: sidebarLinks => dispatch(setSidebarLinks(sidebarLinks)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)