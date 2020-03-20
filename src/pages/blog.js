import React from "react"
import { Link } from "gatsby"
import { graphql} from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog page" />
    <h1>Last post</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <p><Link to={post.node.frontmatter.path}>Read more</Link></p>
            <hr/>
        </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery{
        allMarkdownRemark {
            edges {
                node {
                id
                frontmatter {
                    author
                    date
                    path
                    title
                }
                excerpt
                }
            }
        }
    }
`

export default BlogPage
