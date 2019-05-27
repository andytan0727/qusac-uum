import React from "react";
import { NewsPostTemplate } from "../../templates/news-post";

export interface NewsPostPreviewProps {
  entry: {
    getIn: Function;
  };
  widgetFor: Function;
}

const NewsPostPreview = ({ entry, widgetFor }: NewsPostPreviewProps) => (
  <NewsPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

export default NewsPostPreview;
