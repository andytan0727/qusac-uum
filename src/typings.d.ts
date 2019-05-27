declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "netlify-cms" {
  export default class CMS {
    static registerPreviewTemplate: (
      label: string,
      previewComponent: React.ReactNode
    ) => void;

    static registerPreviewStyle: (style: string, config: object) => void;

    static registerEditorComponent: (config: {
      id: string;
      label: string;
      fields: object;
      pattern: RegExp;
      fromBlock: (
        match: any
      ) => {
        id: string;
      };
      toBlock: (obj: { id: string }) => string;
      toPreview: (obj: { id: string }) => string;
    }) => void;
  }
}
