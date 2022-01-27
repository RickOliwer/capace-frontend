export const FrontPage = `
homeIntro {
    heading
    excerpt
    text
    image {
      altText
      mediaItemUrl
    }
  }
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