import { gql } from "@apollo/client";
import {HeaderFooter} from "../get-menus";
import { AboutPage } from "./get-about";
import SeoFragment from "../fragments/seo";
import { CasePage } from "./get-casepage";


export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
      ${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
		seo {
			...SeoFragment
		}
		pageContent {
			pageTemplate
			${AboutPage}
			${CasePage}
		}
		
        featuredImage {
            node {
              mediaItemUrl
			  altText
            }
        }
	  }
	  
	}
	${SeoFragment}
`;