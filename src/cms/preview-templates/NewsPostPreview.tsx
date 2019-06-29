import React from "react";
import { NewsPostTemplate } from "../../templates/news-post";

export interface INewsPostPreviewProps {
  entry: {
    getIn: Function;
  };
  widgetFor: Function;
}

const NewsPostPreview = ({ entry, widgetFor }: INewsPostPreviewProps) => (
  <NewsPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

export default NewsPostPreview;
