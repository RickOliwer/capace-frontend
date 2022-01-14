import { gql } from '@apollo/client'

export const GET_PAGES = gql`
query MyQuery {
    mypages: pages {
      edges {
        node {
          title
          uri
        }
      }
    }
  }
`