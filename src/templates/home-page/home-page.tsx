import React from "react";
import { graphql } from "gatsby";
import { Bounce } from "react-reveal";

import Layout from "../../components/Layout";
import MediaQueries from "../../components/MediaQueries";
import NewsRoll from "../../components/NewsRoll";

export interface IImageSharp {
  childImageSharp: {
    fluid: {
      src: string;
    };
  };
}

export interface IHomePageTemplateFrontMatter {
  image: IImageSharp;
  heading: string;
  subheading: string;
  thirdSectionHeading: string;
  thirdSectionText: string;
  thirdSectionImage: IImageSharp;
}

export interface IHomePageTemplateProps extends IHomePageTemplateFrontMatter {
  showNews?: boolean;
}

export interface IHomePageSecondSectionProps {
  showNews: boolean | undefined;
}

export interface IHomePageThirdSectionProps {
  heading: string;
  text: string;
  image: IImageSharp;
}

export interface IData {
  data: {
    markdownRemark: {
      frontmatter: IHomePageTemplateFrontMatter;
    };
  };
}

const JoinUsButton = () => (
  <button className="btn btn-outline-primary mt-4">Join Us</button>
);

const HomeSecondDisplaySection = ({
  showNews,
}: IHomePageSecondSectionProps) => {
  return showNews ? (
    <main className="container mt-5">
      <h1>Latest News</h1>
      <section className="mt-3">
        <NewsRoll shortPosts />
      </section>
    </main>
  ) : (
    <div
      style={{
        width: "100%",
        height: "70vh",
        backgroundColor: "#222222",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="display-3">News Placeholder</p>
    </div>
  );
};

const HomeThirdDisplaySection = ({
  heading,
  text,
  image,
}: IHomePageThirdSectionProps) => {
  return (
    <section
      className="bg-dark"
      style={{
        height: "75vh",
      }}
    >
      <MediaQueries.Default>
        <div className="d-flex align-items-center">
          <Bounce>
            <div className="container h-100 d-flex flex-column justify-content-center w-50">
              <h1 className="text-light text-center">{heading}</h1>
              <p className="container text-light">{text}</p>
            </div>
          </Bounce>

          <div
            style={{
              width: "50%",
              height: "75vh",
              backgroundColor: "white",
              backgroundImage: `url(${
                image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundClip: "cover",
              clipPath: "polygon(41% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </MediaQueries.Default>

      <MediaQueries.Mobile>
        <div className="h-100 d-flex flex-column justify-content-center">
          <h1 className="text-light text-center mt-4">{heading}</h1>
          <p className="container text-light">{text}</p>
        </div>
      </MediaQueries.Mobile>
    </section>
  );
};

const HomeRegisterWithUsSection = () => {
  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center bg-light"
      style={{
        height: "75vh",
      }}
    >
      <h1>Interested?</h1>
      <button className="btn btn-outline-primary mt-3">Register With Us</button>
    </section>
  );
};

export const HomePageTemplate = ({
  image,
  heading,
  subheading,
  thirdSectionHeading,
  thirdSectionText,
  thirdSectionImage,
  showNews,
}: IHomePageTemplateProps) => {
  const overlayStyles: React.CSSProperties = {
    width: "100%",
    height: "inherit",
    backgroundColor: "#f6648c",
    opacity: 0.6,
    position: "absolute",
    zIndex: 0,
  };

  return (
    <React.Fragment>
      <header>
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "90vh",
            backgroundImage: `url(${
              image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundClip: "cover",
          }}
        >
          <div style={overlayStyles}></div>
          <div
            className="container d-flex flex-column align-items-center shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              padding: "2rem 3rem",
              zIndex: 1,
            }}
          >
            <MediaQueries.Desktop>
              <div className="row">
                <div
                  className="col"
                  style={{
                    borderRight: "2px solid black",
                  }}
                >
                  <p className="display-2 p-2">{heading}</p>
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <p className="display-4 text-center">{subheading}</p>
                  <JoinUsButton />
                </div>
              </div>
            </MediaQueries.Desktop>
            <MediaQueries.Tablet>
              <div className="row">
                <div
                  className="col"
                  style={{
                    borderRight: "2px solid black",
                  }}
                >
                  <p className="p-2 font-weight-light">{heading}</p>
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <p className="text-center font-weight-light">{subheading}</p>
                  <JoinUsButton />
                </div>
              </div>
            </MediaQueries.Tablet>
            <MediaQueries.Mobile>
              <p className="text-center font-weight-light">{heading}</p>
              <p className="font-weight-light">{subheading}</p>
              <JoinUsButton />
            </MediaQueries.Mobile>
          </div>
        </div>
      </header>
      <HomeSecondDisplaySection showNews={showNews} />
      <HomeThirdDisplaySection
        heading={thirdSectionHeading}
        text={thirdSectionText}
        image={thirdSectionImage}
      />
      <HomeRegisterWithUsSection />
    </React.Fragment>
  );
};

const HomePage = ({ data }: IData) => {
  const {
    frontmatter: {
      image,
      heading,
      subheading,
      thirdSectionHeading,
      thirdSectionText,
      thirdSectionImage,
    },
  } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        image={image}
        heading={heading}
        subheading={subheading}
        thirdSectionHeading={thirdSectionHeading}
        thirdSectionText={thirdSectionText}
        thirdSectionImage={thirdSectionImage}
        showNews
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomePageTemplate {
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
        thirdSectionHeading
        thirdSectionText
        thirdSectionImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
