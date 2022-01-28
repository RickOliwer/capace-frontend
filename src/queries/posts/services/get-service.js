import { gql } from "@apollo/client";
import { HeaderFooter } from "../../get-menus";

export const GET_SERVICE_BY_URI = gql`
    query GET_SERVICE_BY_URI($uri: String){
        ${HeaderFooter}
        singleService: gqlServiceBy(uri: $uri) {
            uri
            title
            slug
            id
            seo {
                breadcrumbs {
                    text
                    url
                  }
                  title
                  metaDesc
                  metaRobotsNoindex
                  metaRobotsNofollow
                  opengraphAuthor
                  opengraphDescription
                  opengraphTitle
                  schemaDetails
                  opengraphImage {
                    sourceUrl
                  }
                  opengraphSiteName
                  opengraphPublishedTime
                  opengraphModifiedTime
                  twitterTitle
                  twitterDescription
                  twitterImage {
                    sourceUrl
                  }
            }
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            GQL_servicesContent {
              servicesIntro {
                introTitle
                introText
                underRubriker {
                  title
                  text
                }
              }
              servicesInfo {
                infoTitle
                infoExcerpt
                cards {
                  bild {
                    altText
                    id
                    mediaItemUrl
                  }
                  title
                  text
                }
              }
              servicesShortFacts {
                icone {
                  altText
                  id
                  mediaItemUrl
                }
                title
                text
              }
            }
          } 
    }
`