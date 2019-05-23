import { graphql, useStaticQuery } from "gatsby";

export interface ISiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<ISiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
