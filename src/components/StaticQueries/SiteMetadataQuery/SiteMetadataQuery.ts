import { graphql, useStaticQuery } from "gatsby";

export interface ISiteMetadata {
  title: string;
  description: string;
}

export interface ISiteMetadataQuery {
  site: {
    siteMetadata: ISiteMetadata;
  };
}

const useSiteMetadata = (): ISiteMetadata => {
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
