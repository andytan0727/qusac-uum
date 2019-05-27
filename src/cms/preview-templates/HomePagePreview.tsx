import React from "react";
import { HomePageTemplate } from "../../templates/home-page";

export interface HomePagePreviewProps {
  entry: {
    getIn: Function;
  };
  getAsset: Function;
}

const HomePagePreview = ({ entry }: HomePagePreviewProps) => {
  return (
    <HomePageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      subheading={entry.getIn(["data", "subheading"])}
    />
  );
};

export default HomePagePreview;
