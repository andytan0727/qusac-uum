import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

export interface IAboutPagePreviewProps {
  entry: {
    getIn: Function;
  };
  widgetFor: Function;
}

const AboutPagePreview = ({ entry, widgetFor }: IAboutPagePreviewProps) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default AboutPagePreview;
