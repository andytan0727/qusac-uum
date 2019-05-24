import React from "react";
import { Link, graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/Layout";
import MediaQueries from "../components/MediaQueries";

export interface IHomePageFrontMatter {
  image: any;
  title: string;
  heading: string;
  subheading: string;
}

export interface IData {
  data: {
    markdownRemark: {
      frontmatter: IHomePageFrontMatter;
    };
  };
}

export const HomePageTemplate = ({
  image,
  title,
  heading,
  subheading,
}: IHomePageFrontMatter) => (
  <React.Fragment>
    <header>
      <Container
        className="d-flex flex-column justify-content-center  align-items-center mt-n5"
        style={{
          height: "90vh",
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover",
          backgroundPosition: `center`,
          backgroundAttachment: `fixed`,
          backgroundClip: "cover",
        }}
        fluid
      >
        <MediaQueries.Default>
          <h1 className="display-1 text-center">{heading}</h1>
          <h1 className="display-4">{subheading}</h1>
        </MediaQueries.Default>
        <MediaQueries.Mobile>
          <h1 className="text-center font-weight-light">
            ASEAN MATHEMATICS COMPETITION
          </h1>
          <h5 className="font-weight-light">An event by UUM QUSAC</h5>
        </MediaQueries.Mobile>
      </Container>
    </header>

    <div className="container mt-5" />
  </React.Fragment>
);

const HomePage = ({ data }: IData) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;

export default HomePage;
