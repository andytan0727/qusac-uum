import React from "react";
import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useNewsRollQuery } from "../StaticQueries/NewsRollQuery";

const NewsRoll = () => {
  const { edges: newsPosts } = useNewsRollQuery();

  return (
    <React.Fragment>
      {newsPosts.map(({ node: post }) => (
        <Card key={post.id}>
          <CardBody>
            <CardTitle>
              <Link className="h3 font-weight-bold" to={`${post.fields.slug}`}>
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
      ))}
    </React.Fragment>
  );
};

export default NewsRoll;
