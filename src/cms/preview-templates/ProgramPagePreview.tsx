import React from "react";
import { ProgramPageTemplate } from "../../templates/program-page";

export interface IProgramPagePreviewProps {
  entry: {
    getIn: Function;
  };
  widgetFor: Function;
}

const ProgramPagePreview = ({ entry, widgetFor }: IProgramPagePreviewProps) => (
  <ProgramPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default ProgramPagePreview;
