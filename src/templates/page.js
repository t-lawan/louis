import React from "react"
import Layout from "../components/layout/layout"
import PageContent from "../components/page-content/page-content";
import { Convert } from "../utility/convert";

const Page = props => {
  let pageContent = Convert.toPageModel(props.pageContext)
  return (
    <Layout title={pageContent.title}>
      <PageContent pageContent={pageContent} />
    </Layout>
  )
}

export default Page
