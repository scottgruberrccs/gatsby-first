import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

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

export const Head = () => <title>Homepage</title>

export default IndexPage