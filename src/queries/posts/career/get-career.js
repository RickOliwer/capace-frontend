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
        section {
          ... on GQLCareer_GqlFlexiblecareer_Section_Intro {
            fieldGroupName
            heading1
            heading2
            text
          }
          ... on GQLCareer_GqlFlexiblecareer_Section_HeadingText {
            fieldGroupName
            heading
            list {
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