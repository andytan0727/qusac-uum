import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { useNewsRollQuery } from "../StaticQueries/NewsRollQuery";

import styles from "./styles.module.scss";

export interface IData {
  edges: Array<{
    node: {
      id: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
      };
      excerpt: string;
    };
  }>;
}

const NewsRoll = () => {
  const { edges: posts }: IData = useNewsRollQuery();

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

export default NewsRoll;
