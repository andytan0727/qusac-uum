import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

import tagStyles from "../../styles/tags.module.scss";

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
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className={tagStyles.taglist}>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
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
