import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export interface IProgramPageMarkdownRemark {
  html: string;
  frontmatter: {
    title: string;
  };
}

export interface IData {
  data: {
    markdownRemark: IProgramPageMarkdownRemark;
  };
}

export interface ProgramPageTemplateProps {
  title: string;
  content: string;
  contentComponent: Function;
}

export const ProgramPageTemplate = ({
  title,
  content,
  contentComponent,
}: ProgramPageTemplateProps) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="container mt-5">
      <h2>{title}</h2>
      <PageContent className="program-pg-content mt-4" content={content} />
    </div>
  );
};

const ProgramPage = ({ data }: IData) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProgramPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export const ProgramPageQuery = graphql`
  query ProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ProgramPage;
