import { graphql, useStaticQuery } from "gatsby";

export interface ISiteMetadataQuery {
  title: string;
  description: string;
}

const useSiteMetadata = (): ISiteMetadataQuery => {
  const { site } = useStaticQuery(
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
