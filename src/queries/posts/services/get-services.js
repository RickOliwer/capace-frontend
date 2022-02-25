import { gql } from "@apollo/client";
import { PAGES_COUNT } from "../../../utils/slugs";

export const GET_SERVICES_URI = gql`
    query GET_SERVICES_URI {
        allServices: gqlServices( first: ${PAGES_COUNT} ) {
            nodes {
              id
              uri
              slug
            }
          }
    }
`