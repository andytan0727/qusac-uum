import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export interface INewsPostFrontmatter {
  date?: string;
  title: string;
  description: string;
  tags: string[];
}

export interface INewsPostMarkdownRemark {
  id: string;
  html: string;
  frontmatter: INewsPostFrontmatter;
}

export interface IData {
  data: {
    markdownRemark: INewsPostMarkdownRemark;
  };
}

export interface NewsPostTemplateProps extends INewsPostFrontmatter {
  content: React.ReactNode;
  contentComponent: Function;
  helmet: React.ReactNode;
}

export const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}: NewsPostTemplateProps) => {
  const PostContent = contentComponent || Content;

  return (
    <React.Fragment>
      {helmet || ""}
      <div className="container mt-5">
        <h1>{title}</h1>
        <p>{description}</p>
        <PostContent content={content} className="news-post" />
        {tags && tags.length ? (
          <div style={{ marginTop: `3rem` }}>
            <h4>Tags</h4>
            <ul className="d-flex justify-content-start align-items-center list-unstyled mt-4">
              {tags.map(tag => (
                <li key={tag + `tag`} className="ml-3">
                  <Link to={`/tags/${kebabCase(tag)}/`}>
                    <span className="badge badge-pill badge-info px-3 py-2 font-weight-bold">
                      {tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

const NewsPost = ({ data }: IData) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;

export default NewsPost;
