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
            GQL_Flexible_Content {
              sektion {
                ... on GqlService_GqlFlexibleContent_Sektion_Intro {
                  fieldGroupName
                  rubrik1
                  rubrik2
                  rubrik3
                  utdrag
                  knapp {
                    text
                    url {
                      ... on Page {
                        id
                        uri
                      }
                      ... on GQLCareer {
                        id
                        uri
                      }
                      ... on GqlService {
                        id
                        uri
                      }
                      ... on GQLCase {
                        id
                        uri
                      }
                    }
                  }
                  installningar
                  bild {
                    altText
                    id
                    mediaItemUrl
                  }
                  textGrid {
                    rubrik
                    text
                  }
                }
                ... on GqlService_GqlFlexibleContent_Sektion_Blurbs {
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
                ... on GqlService_GqlFlexibleContent_Sektion_KortInfo {
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
                ... on GqlService_GqlFlexibleContent_Sektion_Cases {
                  fieldGroupName
                  rubrik
                  text
                  case {
                    ... on GQLCase {
                      id
                      uri
                      title
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