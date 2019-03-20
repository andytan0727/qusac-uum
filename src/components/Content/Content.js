import React from "react";
import PropTypes from "prop-types";

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

HTMLContent.propTypes = Content.propTypes;

export default Content;
export { HTMLContent };
