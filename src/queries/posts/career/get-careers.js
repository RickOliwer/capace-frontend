import { gql } from "@apollo/client";
import { PAGES_COUNT } from "../../../utils/slugs";

export const GET_CAREERS_URI = gql`
query GET_CAREERS_URI {
    singleCareers: gQLCareers( first: ${PAGES_COUNT}) {
      nodes {
        id
        uri
      }
    }
  }
`