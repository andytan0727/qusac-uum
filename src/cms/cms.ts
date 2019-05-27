import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import NewsPostPreview from "./preview-templates/NewsPostPreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import ProgramPagePreview from "./preview-templates/ProgramPagePreview";
import SolutionPagePreview from "./preview-templates/SolutionPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("news", NewsPostPreview);
CMS.registerPreviewTemplate("program", ProgramPagePreview);
CMS.registerPreviewTemplate("solution", SolutionPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewStyle(
  `
      html,
      body {
        color: #444;
        font-size: 14px;
      }

      body {
        padding: 20px;
      }

      h1 {
        margin-top: 20px;
        color: #666;
        font-weight: bold;
        font-size: 32px;
      }

      img {
        max-width: 100%;
      }
    `,
  { raw: true }
);

CMS.registerEditorComponent({
  id: "youtube",
  label: "Youtube",
  fields: [{ name: "id", label: "Youtube Video ID" }],
  pattern: /^{{\s?youtube (\S+)\s?}}/,
  fromBlock: function(match) {
    return {
      id: match[1],
    };
  },
  toBlock: function(obj) {
    return "{{ youtube " + obj.id + " }}";
  },
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' +
      obj.id +
      '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  },
});
