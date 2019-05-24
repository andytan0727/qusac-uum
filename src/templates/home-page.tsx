import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Button } from "reactstrap";

import Layout from "../components/Layout";
import MediaQueries from "../components/MediaQueries";
import NewsRoll from "../components/NewsRoll";

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

const JoinUsButton = () => (
  <Button className="mt-4" color="primary" outline>
    Join Us
  </Button>
);

export const HomePageTemplate = ({
  image,
  title,
  heading,
  subheading,
}: IHomePageFrontMatter) => {
  return (
    <React.Fragment>
      <header>
        <Container
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "80vh",
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundClip: "cover",
          }}
          fluid
        >
          <div
            className="container d-flex flex-column align-items-center shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              padding: "2rem 3rem",
            }}
          >
            <MediaQueries.Desktop>
              <Row>
                <Col
                  style={{
                    borderRight: "2px solid black",
                  }}
                >
                  <h1 className="display-2 p-2">{heading}</h1>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <h5 className="display-4 text-center">{subheading}</h5>
                  <JoinUsButton />
                </Col>
              </Row>
            </MediaQueries.Desktop>
            <MediaQueries.Tablet>
              <Row>
                <Col
                  style={{
                    borderRight: "2px solid black",
                  }}
                >
                  <h1 className="p-2 font-weight-light">{heading}</h1>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <h5 className="text-center font-weight-light">
                    {subheading}
                  </h5>
                  <JoinUsButton />
                </Col>
              </Row>
            </MediaQueries.Tablet>
            <MediaQueries.Mobile>
              <h1 className="text-center font-weight-light">{heading}</h1>
              <h5 className="font-weight-light">{subheading}</h5>
              <JoinUsButton />
            </MediaQueries.Mobile>
          </div>
        </Container>
      </header>

      <main className="container mt-5">
        <h1>Latest News</h1>
        <section className="mt-3">
          <NewsRoll />
        </section>
      </main>
    </React.Fragment>
  );
};

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
