
export const AboutPage =`
        aboutIntro {
            headingOne
            excerpt
            text
            subHeading {
                section {
                heading
                text
                }
            }
        }
        aboutTeam {
            heading
            excerpt
            team {
              ... on GQLEmployee {
                id
                uri
                slug
                GQL_employeesContent {
                  employeeIntro {
                    role
                    namn
                    email
                    image {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        aboutCareer {
            heading
            excerpt
            jobs {
            ... on GQLCareer {
                id
                title
                uri
                slug
                featuredImage {
                  node {
                      mediaItemUrl
                      title
                      altText
                  }
                }
            }
            }
        }
        aboutCustomerReview {
            heading
            excerpt
            reviews {
            heading
            text
            }
        }
`;