const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const queryResults = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);

  if (queryResults.errors) {
    queryResults.errors.forEach(e => console.error(e.toString()));
    throw new Error(queryResults.errors);
  }

  const posts = queryResults.data.allMarkdownRemark.edges;

  posts.forEach(edge => {
    const id = edge.node.id;
    const postTemplate = String(edge.node.frontmatter.templateKey);

    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${postTemplate}/${postTemplate}.tsx`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags/tags.tsx`),
      context: {
        tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
