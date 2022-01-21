import { gql } from "@apollo/client";

export const GET_TAX = gql`
query GET_TAX {
    catergories: gQLCaseCategories {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`