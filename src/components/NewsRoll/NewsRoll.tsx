import React from "react";
import { Link, navigate } from "gatsby";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useNewsRollQuery } from "../StaticQueries/NewsRollQuery";
import { Zoom, Fade } from "react-reveal";

export interface NewsRollProps {
  shortPosts?: boolean;
}

const NewsRoll = (props: NewsRollProps) => {
  const { shortPosts } = props;
  const { edges: newsPosts } = useNewsRollQuery();

  const handleNavigateToNews = () => {
    navigate("/news");
  };

  return (
    <React.Fragment>
      {!shortPosts ? (
        newsPosts.map(({ node: post }) => (
          <Fade key={post.id}>
            <Card>
              <CardBody>
                <CardTitle>
                  <Link
                    className="h3 font-weight-bold"
                    to={`${post.fields.slug}`}
                  >
                    {post.frontmatter.title}
                  </Link>
                </CardTitle>
                <CardSubtitle>Created at {post.frontmatter.date}</CardSubtitle>
                <CardText>{post.excerpt}</CardText>
                <Link className="btn btn-outline-dark" to={post.fields.slug}>
                  <span className="d-inline-flex align-items-center">
                    Read more <FaArrowRight className="ml-1" />
                  </span>
                </Link>
              </CardBody>
            </Card>
          </Fade>
        ))
      ) : (
        <div>
          {newsPosts.slice(0, 3).map(({ node: post }) => {
            return (
              <Zoom key={post.id}>
                <Card>
                  <CardBody>
                    <CardTitle>
                      <Link
                        className="h3 font-weight-bold"
                        to={`${post.fields.slug}`}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </CardTitle>
                    <CardSubtitle>
                      Created at {post.frontmatter.date}
                    </CardSubtitle>
                    <CardText>{post.excerpt}</CardText>
                    <Link
                      className="btn btn-outline-dark"
                      to={post.fields.slug}
                    >
                      <span className="d-inline-flex align-items-center">
                        Read more <FaArrowRight className="ml-1" />
                      </span>
                    </Link>
                  </CardBody>
                </Card>
              </Zoom>
            );
          })}
          <button
            className="btn btn-primary mt-4 mb-5"
            onClick={handleNavigateToNews}
          >
            Read More on News
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default NewsRoll;
