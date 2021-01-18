import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utility/richtext"
import { size } from "../../index.styles"
import Img from "gatsby-image"

export const PageWrapper = styled.div``
export const PageTitle = styled.p``
const Image = styled(Img)``
const ImageWrapper = styled.div`
  padding-bottom: 0.5rem;
  @media (max-width: ${size.mobileL}) {
    padding-bottom: 0.25rem;
  }
`
const generateSection = (section, index) => {
  let render
  switch (section.type) {
    case "images":
      if (section.images) {
          render = (
              <div key={index}>
                {section.images.map((img, ind) => (
                     <ImageWrapper key={ind}>
                        <Image fluid={img.fluid} />
                      </ImageWrapper>
                ))}
              </div>
          )
      }
      break
    case "image":
      if (section.image && section.image.fluid) {
        render = (
          <ImageWrapper key={index}>
            <Image fluid={section.image.fluid} />
          </ImageWrapper>
        )
      }
      break
    case "text":
      render = (
        <div key={index}>
          {documentToReactComponents(
            JSON.parse(section.text.raw),
            richTextOptions
          )}
        </div>
      )
      break
    default:
      break
  }

  return render
}
const PageContent = props => {
  let page = props.pageContent;
  return (
    <PageWrapper>
      {page.title && page.showTitle ? <PageTitle>  {page.title.toUpperCase()}</PageTitle> : null}
      {page.sections
        ? page.sections.map((sec, index) => generateSection(sec, index))
        : null}
    </PageWrapper>
  )
}

export default PageContent
