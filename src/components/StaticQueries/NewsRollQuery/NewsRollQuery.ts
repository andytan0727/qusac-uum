import { graphql, useStaticQuery } from "gatsby";

const useNewsRollQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark;
};

export default useNewsRollQuery;
