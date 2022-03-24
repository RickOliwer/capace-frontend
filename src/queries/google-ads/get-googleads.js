import { gql } from "@apollo/client";

export const GET_GOOGLE_ADS = gql `
query GET_GOOGLE_ADS {
    google: gqlOrter {
      orter {
        listaPaOrter {
          ort
          slug
        }
      }
    }
  }
`