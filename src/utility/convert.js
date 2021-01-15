import { PageModel } from "../models/PageModel"
import { PageSection } from "../models/PageSection"
import { SidebarLinks } from "../models/SidebarLinks"
import { PageLink } from "../models/PageLink"
import { SiteModel } from "../models/SiteInfoModel";

export class Convert {
  static toPageModel = contentfulModel => {
    let sections = []
    if (contentfulModel.sections) {
      contentfulModel.sections.forEach(section => {
        sections.push(Convert.toPageSection(section))
      })
    //   console.log('SECTI BEF', sections);
    //   sections = sections.reverse();
    //   console.log('SECTI AFT', sections);

    }

    return new PageModel(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.showTitle,
      contentfulModel.slug,
      contentfulModel.seoDescription ? contentfulModel.seoDescription.seoDescription : "",
      sections
    )
  }

  static toPageLink = contentfulModel => {
    return new PageLink(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.slug
    )
  }

  static toSiteModel = contentfulModel => {
    return new SiteModel(
      contentfulModel.name,
      contentfulModel.description ? contentfulModel.description.description : ''
    )
  }

  static toPageSection = contentfulModel => {
    return new PageSection(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.type,
      contentfulModel.image,
      contentfulModel.images,
      contentfulModel.text
    )
  }

  static toSidebarLinks = contentfulModel => {
    let pages = []
    if (contentfulModel.pages) {
      contentfulModel.pages.forEach(page => {
        pages.push(Convert.toPageLink(page))
      })
    }
    return new SidebarLinks(
      contentfulModel.contentful_id,
      contentfulModel.title,
      contentfulModel.order,
      contentfulModel.pages,
      contentfulModel.isLink,
      contentfulModel.linkedPage
    )
  }
  static toModelArray = (query, modelConverter) => {
    const modelArray = []
    query.edges.forEach(contentfulModel => {
      let model = modelConverter(contentfulModel.node)
      modelArray.push(model)
    })
    return modelArray
  }
}
