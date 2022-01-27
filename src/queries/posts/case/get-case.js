import { gql } from "@apollo/client";
import { HeaderFooter } from "../../get-menus";

export const GET_CASE_BY_SLUG = gql`
    query GET_CASE_BY_SLUG($uri: String){
        ${HeaderFooter}
        singleCase: gQLCaseBy(uri: $uri) {
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
            GQL_casesContent {
              case {
                caseTitle
                caseExcerpt
                caseText
              }
              tjanster {
                servicesTitle
                services
              }
              bransch {
                branschTitle
                branschBransch
                branschUrl
              }
              uppdraget {
                uppdragetTitle
                uppdragetText
              }
              processen {
                processenTitle
                processenText
              }
              slutresultat {
                slutresultatTitle
                slutresultatText
                slutresultatImg {
                  altText
                  id
                  mediaItemUrl
                }
              }
            }
          }
    }
    
`