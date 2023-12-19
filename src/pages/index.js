import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <main>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/mets.png" alt="Mets"/>
    </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"></Seo>

export default IndexPage