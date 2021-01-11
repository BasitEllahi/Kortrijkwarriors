// gatsby-node.js
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogTemplate = path.resolve('./src/templates/BlogPost.js')
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)

    return
  }
  const BlogPosts = result.data.allContentfulBlogPost.edges

  BlogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: BlogTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}
