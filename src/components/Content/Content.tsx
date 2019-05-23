import React from "react";

interface IClassName {
  className: string;
}

export interface IContent extends IClassName {
  content: React.ReactNode;
}

export interface IHTMLContent extends IClassName {
  content: string;
}

const Content = ({ content, className }: IContent) => (
  <div className={className}>{content}</div>
);

const HTMLContent = ({ content, className }: IHTMLContent) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export default Content;
export { HTMLContent };
