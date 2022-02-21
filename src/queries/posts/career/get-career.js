import { gql } from "@apollo/client";
import { HeaderFooter } from "../../get-menus";

export const GET_CAREER_BY_SLUG = gql`
query GET_CAREER_BY_SLUG($uri: String) {
    ${HeaderFooter}
    singleCareer: gQLCareerBy(uri: $uri) {
      id
      uri
      title
      slug
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
      GQL_flexibleCareer {
        sektion {
          ... on GQLCareer_GqlFlexiblecareer_Sektion_Intro {
            fieldGroupName
            rubrik1
            rubrik2
            utdrag
          }
          ... on GQLCareer_GqlFlexiblecareer_Sektion_HeadingText {
            fieldGroupName
            rubrik
            lista {
              text
            }
            textBox {
              text
            }
          }
        }
      }
    }
  }
`