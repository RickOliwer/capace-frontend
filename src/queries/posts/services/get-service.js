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
                  rubrik3
                  utdrag
                  textGrid {
                    rubrik
                    text
                  }
                }
                ... on GqlService_GqlServicescontent_Sektion_Blurbs {
                  fieldGroupName
                  blurb {
                    ikon {
                      altText
                      mediaItemUrl
                      id
                    }
                    rubrik
                    text
                  }
                }
                ... on GqlService_GqlServicescontent_Sektion_KortInfo {
                  fieldGroupName
                  kort {
                    bild {
                      altText
                      id
                      mediaItemUrl
                    }
                    rubrik
                    text
                  }
                }
                ... on GqlService_GqlServicescontent_Sektion_Cases {
                  fieldGroupName
                  rubrik
                  text
                  case {
                    ... on GQLCase {
                      id
                      uri
                      featuredImage {
                        node {
                          altText
                          id
                          mediaItemUrl
                        }
                      }
                      GQL_casesContent {
                        tjanster {
                          services
                        }
                      }
                    }
                  }
                }
              }
            }
          } 
    }
`