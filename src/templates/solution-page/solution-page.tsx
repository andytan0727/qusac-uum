import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";

export interface ISolutionPageMarkdownRemark {
  html: string;
  frontmatter: {
    title: string;
  };
}

export interface IData {
  data: {
    markdownRemark: ISolutionPageMarkdownRemark;
  };
}

export interface ISolutionPageTemplateProps {
  title: string;
  content: string;

  // the following props is not used in CMS preview
  contentComponent?: Function;
}

export const SolutionPageTemplate = ({
  title,
  content,
  contentComponent,
}: ISolutionPageTemplateProps) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="container mt-5">
      <h1>{title}</h1>
      <PageContent className="solution-pg-content mt-4" content={content} />
    </div>
  );
};

const SolutionPage = ({ data }: IData) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SolutionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export const SolutionPageQuery = graphql`
  query SolutionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default SolutionPage;
