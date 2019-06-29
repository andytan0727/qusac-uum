import { graphql, useStaticQuery } from "gatsby";

export interface IAllMarkdownRemark {
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

export interface INewsRollQuery {
  allMarkdownRemark: IAllMarkdownRemark;
}

const useNewsRollQuery = (): IAllMarkdownRemark => {
  const { allMarkdownRemark } = useStaticQuery<INewsRollQuery>(
    graphql`
      query NewsRollQuery {
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
