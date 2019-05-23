import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "gatsby";
import { useNewsRollQuery } from "../StaticQueries/NewsRollQuery";

import styles from "./styles.module.scss";

const NewsRoll = () => {
  const { edges: posts } = useNewsRollQuery();

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <article className="tile is-child box notification">
              <p>
                <Link
                  className={classNames(
                    styles.titleLink,
                    "has-text-primary is-size-4"
                  )}
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <br />
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default NewsRoll;
