import { gql } from "@apollo/client";
import {HeaderFooter} from "../get-menus";
import { AboutPage } from "./get-about";


export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
      ${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
		pageContent {
			pageTemplate
			${AboutPage}
		}
		
        featuredImage {
            node {
              mediaItemUrl
            }
        }
	  }
	  
	}
`;