import { gql } from "@apollo/client";
import {HeaderFooter} from "../get-menus";
import { AboutPage } from "./get-about";
import SeoFragment from "../fragments/seo";
import { CasePage } from "./get-casepage";
import { ContactPage } from "./get-contact";
import { ServicesPage } from "./get-service";
import { FrontPage } from "./get-frontpage";



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
			${ContactPage}
			${ServicesPage}
			${FrontPage}
		}
		GQL_Flexible_Content {
			sektion {
			  ... on Page_GqlFlexibleContent_Sektion_Intro {
				fieldGroupName
				rubrik1
				rubrik2
				rubrik3
				utdrag
				knapp {
				  text
				  url {
					... on Page {
					  id
					  uri
					}
					... on GQLCareer {
					  id
					  uri
					}
					... on GqlService {
					  id
					  uri
					}
					... on GQLCase {
					  id
					  uri
					}
				  }
				}
				installningar
				bild {
				  altText
				  id
				  mediaItemUrl
				}
				textGrid {
				  rubrik
				  text
				}
			  }
			  ... on Page_GqlFlexibleContent_Sektion_Blurbs {
				fieldGroupName
				blurb {
				  ikon {
					altText
					mediaItemUrl
					id
				  }
				  rubrik
				  text
				}
			  }
			  ... on Page_GqlFlexibleContent_Sektion_KortInfo {
				fieldGroupName
				kort {
				  bild {
					altText
					id
					mediaItemUrl
				  }
				  rubrik
				  text
				}
			  }
			  ... on Page_GqlFlexibleContent_Sektion_Cases {
				fieldGroupName
				rubrik
				text
				case {
				  ... on GQLCase {
					id
					uri
					title
					featuredImage {
					  node {
						altText
						id
						mediaItemUrl
					  }
					}
					GQL_casesContent {
					  tjanster {
						services
					  }
					}
				  }
				}
			  }
			}
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