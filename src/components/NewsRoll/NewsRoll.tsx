import React from "react";
import { Link, navigate } from "gatsby";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useNewsRollQuery } from "../StaticQueries/NewsRollQuery";
import { Fade } from "react-reveal";

export interface NewsRollProps {
  shortPosts?: boolean;
}

const NewsRoll = (props: NewsRollProps) => {
  const { shortPosts } = props;
  const { edges } = useNewsRollQuery();
  const newsPosts = !shortPosts ? edges : edges.slice(0, 3);

  const handleNavigateToNews = () => {
    navigate("/news");
  };

  return (
    <React.Fragment>
      {newsPosts.map(({ node: post }) => (
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
      ))}
      {shortPosts && (
        <button
          className="btn btn-primary mt-4 mb-5"
          onClick={handleNavigateToNews}
        >
          Read More on News
        </button>
      )}
    </React.Fragment>
  );
};

export default NewsRoll;
