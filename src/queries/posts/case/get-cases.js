import { gql } from "@apollo/client";
import { PAGES_COUNT } from "../../../utils/slugs";

export const GET_CASES_URI = gql`
    query GET_CASES_URI {
        allCases: gQLCases( first: ${PAGES_COUNT}) {
            nodes {
              id
              uri
            }
          }
    }
`