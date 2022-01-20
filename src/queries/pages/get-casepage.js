
export const CasePage = `
caseIntro {
    heading
    excerpt
    text
    projects {
      ... on GQLCase {
        id
        title
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
        gQLCaseCategories {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;