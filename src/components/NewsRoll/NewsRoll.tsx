import React from "react";
import { Link, navigate } from "gatsby";
import { FaArrowRight } from "react-icons/fa";
import { useNewsRollQuery } from "../StaticQueries/NewsRollQuery";
import { Fade } from "react-reveal";

export interface INewsRollProps {
  shortPosts?: boolean;
}

const NewsRoll = (props: INewsRollProps) => {
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
          <div className="card mt-3">
            <div className="card-body">
              <div className="card-title">
                <Link className="h3" to={`${post.fields.slug}`}>
                  {post.frontmatter.title}
                </Link>
              </div>
              <div className="card-subtitle text-muted">
                Created at {post.frontmatter.date}
              </div>
              <p className="card-text">{post.excerpt}</p>
              <Link className="btn btn-outline-dark mt-3" to={post.fields.slug}>
                <span className="d-inline-flex align-items-center">
                  Read more <FaArrowRight className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
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
