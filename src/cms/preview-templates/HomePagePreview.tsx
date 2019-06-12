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
      heading={entry.getIn(["data", "heading"])}
      subheading={entry.getIn(["data", "subheading"])}
      thirdSectionHeading={entry.getIn(["data", "thirdSectionHeading"])}
      thirdSectionText={entry.getIn(["data", "thirdSectionText"])}
      thirdSectionImage={entry.getIn(["data", "thirdSectionImage"])}
    />
  );
};

export default HomePagePreview;
