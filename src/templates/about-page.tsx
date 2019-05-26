import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export interface IAboutPageMarkdownRemark {
  html: string;
  frontmatter: {
    title: string;
  };
}

export interface IData {
  data: {
    markdownRemark: IAboutPageMarkdownRemark;
  };
}

export interface AboutPageTemplateProps {
  title: string;
  content: string;
  contentComponent: Function;
}

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
}: AboutPageTemplateProps) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="container mt-5">
      <h2>{title}</h2>
      <PageContent className="about-pg-content mt-4" content={content} />
    </div>
  );
};

const AboutPage = ({ data }: IData) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default AboutPage;
