module.exports = {
  siteMetadata: {
    title: "Qusac UUM",
    description: "Qusac UUM Static Website",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-sass",
      includePaths: [`${__dirname}/src`],
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            subsets: [`latin`],
            variants: ["400", "600", "700"],
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
            variants: ["300", "400", "700"],
          },
        ],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/img`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        // develop: true, // Activates purging in npm run develop
        printRejected: true,
        purgeOnly: ["/global.scss", "bootstrap/"],
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
