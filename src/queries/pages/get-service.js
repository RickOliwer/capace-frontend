export const ServicesPage = `
    servicesIntro {
        heading
        excerpt
        services {
            ... on GqlService {
            id
            title
            uri
            featuredImage {
                node {
                altText
                mediaItemUrl
                }
            }
            }
        }
    }
`