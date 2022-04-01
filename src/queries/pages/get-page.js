import { gql } from "@apollo/client";
import {HeaderFooter} from "../get-menus";
import SeoFragment from "../fragments/seo";
import { ServicesPage } from "./get-service";



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
			${ServicesPage}
		}
		GQL_Flexible_Content {
			sektion {
				... on Page_GqlFlexibleContent_Sektion_Kundcase{
					fieldGroupName
					projekt {
						... on GQLCase {
						  id
						  title
						  uri
						  featuredImage {
							node {
							  altText
							  mediaItemUrl
							}
						  }
						  GQL_casesContent {
							tjanster {
							  services
							}
						  }
						  gQLCaseCategories {
							edges {
							  node {
								id
								name
							  }
							}
						  }
						}
					  }
				}
				... on Page_GqlFlexibleContent_Sektion_GoogleReviews {
					fieldGroupName
					rubrik1
					rubrik2
					text
					andvandGoogleApi
					omdomen{
					  omdome
					}
				  }
				... on Page_GqlFlexibleContent_Sektion_Karriar {
					fieldGroupName
					rubrik
					text
					ledigaJobb {
						... on GQLCareer {
						id
						title
						uri
						slug
						featuredImage {
						  node {
							  mediaItemUrl
							  title
							  altText
						  }
						}
					  }
					}
				  }
				... on Page_GqlFlexibleContent_Sektion_Team{
					fieldGroupName
					rubrik
					text
					anstallda {
						... on GQLEmployee {
							id
							uri
							slug
							GQL_employeesContent {
								employeeIntro {
									role
									namn
									email
									image {
										altText
										mediaItemUrl
									}
								}
							}
						}
					
					}
				}
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
			  ... on Page_GqlFlexibleContent_Sektion_Kunder {
				fieldGroupName
				rubrik
				logotyper {
					logo{
						altText
				  		id
				  		mediaItemUrl
					}
				}
			  }
			  ... on Page_GqlFlexibleContent_Sektion_Sidmarkering {
				fieldGroupName
				rubrik
				text
				knapp {
					text
					url {
						... on Page{
						id
						uri
						}
					}
				}
			  }
			  ... on Page_GqlFlexibleContent_Sektion_Blurbs {
				fieldGroupName
				rubrik1
				rubrik2
				rubrik3
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