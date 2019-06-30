import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export interface ITagsTemplateAllMarkdownRemark {
  totalCount: number;
  edges: Array<{
    node: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
  }>;
}

export interface IData {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: ITagsTemplateAllMarkdownRemark;
  };
}

export interface ITagsRouteProps extends IData {
  pageContext: { tag: string[] };
}

const TagRoute = (props: ITagsRouteProps) => {
  const posts = props.data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug} className="mb-3">
      <Link to={post.node.fields.slug}>
        <h4 className="text-dark">{post.node.frontmatter.title}</h4>
      </Link>
    </li>
  ));
  const tag = props.pageContext.tag;
  const title = props.data.site.siteMetadata.title;
  const totalCount = props.data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`;

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />
      <div className="container mt-5">
        <main style={{ marginBottom: "6rem" }}>
          <h1>{tagHeader}</h1>
          <ul className="d-flex flex-column justify-content-center mt-5">
            {postLinks}
          </ul>
          <p>
            <Link to="/tags/">Browse all tags</Link>
          </p>
        </main>
      </div>
    </Layout>
  );
};

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default TagRoute;
