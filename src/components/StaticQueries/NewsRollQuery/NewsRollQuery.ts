import { graphql, useStaticQuery } from "gatsby";

export interface INewsRollQueryData {
  edges: Array<{
    node: {
      id: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
      };
      excerpt: string;
    };
  }>;
}

const useNewsRollQuery = (): INewsRollQueryData => {
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
