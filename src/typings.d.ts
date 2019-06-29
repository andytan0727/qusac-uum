declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "netlify-cms" {
  export default class CMS {
    public static registerPreviewTemplate: (
      label: string,
      previewComponent: React.ReactNode
    ) => void;

    public static registerPreviewStyle: (style: string, config: object) => void;

    public static registerEditorComponent: (config: {
      id: string;
      label: string;
      fields: object;
      pattern: RegExp;
      fromBlock: (
        match: unknown
      ) => {
        id: string;
      };
      toBlock: (obj: { id: string }) => string;
      toPreview: (obj: { id: string }) => string;
    }) => void;
  }
}

declare module "react-reveal" {
  import React, { Component } from "react";
  export class Fade extends Component {}
  export class Flip extends Component {}
  export class Rotate extends Component {}
  export class Bounce extends Component {}
  export class Roll extends Component {}
  export class LightSpeed extends Component {}
  export class Zoom extends Component {}
  export class Slide extends Component<
    {
      left?: boolean;
      right?: boolean;
    },
    {}
  > {}
}
