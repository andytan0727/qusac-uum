import React from "react";
import { SolutionPageTemplate } from "../../templates/solution-page";

export interface ISolutionPagePreviewProps {
  entry: {
    getIn: Function;
  };
  widgetFor: Function;
}

const SolutionPagePreview = ({
  entry,
  widgetFor,
}: ISolutionPagePreviewProps) => (
  <SolutionPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default SolutionPagePreview;
