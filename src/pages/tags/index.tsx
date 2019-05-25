import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export interface ITagsAllMarkdownRemark {
  group: Array<{
    fieldValue: string;
    totalCount: number;
  }>;
}

export interface IData {
  data: {
    site: {
      siteMetadata: { title: string };
    };
    allMarkdownRemark: ITagsAllMarkdownRemark;
  };
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: IData) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <div className="container mt-5">
      <div style={{ marginBottom: "6rem" }}>
        <h1>Tags</h1>
        <ul
          className="mt-3"
          style={{
            lineHeight: "2rem",
            listStyle: "square",
          }}
        >
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}{" "}
                <span
                  className="badge badge-info"
                  style={{
                    fontSize: ".9rem",
                  }}
                >
                  {tag.totalCount}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
