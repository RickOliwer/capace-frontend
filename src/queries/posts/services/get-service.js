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
              sektion {
                ... on GqlService_GqlServicescontent_Sektion_Intro {
                  fieldGroupName
                  rubrik1
                  rubrik2
                  utdrag
                  textGrid {
                    rubrik
                    text
                    avslut
                  }
                }
              }
              servicesCase {
                title
                text
                projects {
                  ... on GQLCase {
                    id
                    uri
                    featuredImage {
                      node {
                        altText
                        mediaItemUrl
                      }
                    }
                    GQL_casesContent {
                      tjanster {
                        services
                      }
                    }
                    title
                  }
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