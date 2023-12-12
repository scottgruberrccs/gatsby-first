import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <main>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
    </Layout>
  )
}

export const Head = () => <title>Homepage</title>

export default IndexPage