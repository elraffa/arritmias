import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        menuLinks {
                          name
                          link
                        }
                        invitados {
                          name
                          country
                          filename
                          flag
                        }
                    }
                }
                
            }
        `
    )
    return site.siteMetadata
}