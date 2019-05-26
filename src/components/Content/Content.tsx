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

/**
 * Content component for regular string content (Without any special parsing)
 *
 * For example, a text content without any HTML code is considered regular string
 * Text content with HTML code is considering HTML content and
 * it has to be used with the HTMLContent in order to display correctly
 *
 * @param {IContent} { content, className }
 */
const Content = ({ content, className }: IContent) => (
  <div className={className}>{content}</div>
);

/**
 * Content component to be used with HTML code (eg: what obtained from Gatsby Graphql)
 *
 * In addition, this component converts YouTube indicator in HTML,
 * (format: {{ youtube YOUTUBE_ID }}) to responsive iframe with Bootstrap 4
 *
 * @param {IHTMLContent} { content, className }
 */
const HTMLContent = ({ content, className }: IHTMLContent) => {
  const regex = /{{ youtube (\w+) }}/gm;
  const matchId = regex.exec(content);
  const contentReplacedWithEmbed = matchId
    ? content.replace(
        regex,
        `
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${
        matchId[1]
      }">
      </iframe>
    </div>
  `
      )
    : content;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: contentReplacedWithEmbed }}
    />
  );
};

export default Content;
export { HTMLContent };
