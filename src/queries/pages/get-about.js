
export const AboutPage =`
        aboutIntro {
            headingOne
            excerpt
            text
            headingTwo {
                heading
                text
            }
            headingThree {
                heading
                text
            }
            headingFour {
                heading
                text
            }
            headingFive {
                heading
                text
            }
        }
        aboutTeam {
            heading
            excerpt
            team {
            ... on GQLEmployee {
                id
                GQL_employeesContent {
                employeeIntro {
                    image {
                    mediaItemUrl
                    }
                    role
                    namn
                    email
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
                featuredImage {
                node {
                    mediaItemUrl
                    title
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