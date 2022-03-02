export const FrontPage = `

  homeServices {
    heading
    excerpt
  }
  homeCase {
    heading
    excerpt
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
      }
    }
  }
  homeCustomers {
    heading
    kunder {
      altText
      mediaItemUrl
      id
    }
  }
  homeInstagram {
    heading
    url
  }
`