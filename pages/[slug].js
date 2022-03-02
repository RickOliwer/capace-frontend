import isEmpty from "lodash.isempty"
import { useRouter } from "next/router";
import Client from "../src/apollo/client";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import { FALLBACK, isCustomPageUri } from "../src/utils/slugs";
import Pages from "../src/components/pages";
import Hero from "../src/components/layout/header/hero";
import { GET_TAX } from "../src/queries/categories";
import { GET_SERVICES_URI } from "../src/queries/posts/services/get-services";
import { GET_SERVICE_BY_URI } from "../src/queries/posts/services/get-service";
import Blocks from "../src/components/Blocks";



const Page = ({ data, response }) => {
    const router = useRouter()
    return (
        <>
            {!isEmpty(data?.page) && (
                <>
                    <Hero hero={data?.page} logo={data?.header?.siteLogoUrl}/>
        
                    <Pages template={data?.page?.pageContent} catergories={response?.data?.catergories?.edges} />
                
                </>
            )}

            {!isEmpty(data?.singleService) && (
                <>
                    <Hero hero={data?.singleService} logo={data?.header?.siteLogoUrl} />
                    <Blocks block={data?.singleService?.GQL_Flexible_Content} pageTitle={data?.singleService?.title} />
                </>
            )}
        </>
    )
}
 
export default Page;

export async function getStaticProps( {params} ) {
    let data = null
	const { data: page, errors } = await Client.query( {
		query: GET_PAGE,
		variables: {
			uri: params?.slug,
		},
	} );
    
    const response = await Client.query({
        query: GET_TAX
    })

    const {data: serv} = await Client.query( {
        query: GET_SERVICE_BY_URI,
        variables: {
            uri: params?.slug,
        }
    } );
    if (page.page) {
        data = page
    }
    if (serv.singleService) {
        data = serv
    }
    
    if(!data.page && !serv.singleService){
        return {
            notFound: true
        }
    }
    
    return {
        props: {
			data: data || {},
            response: response,
            serv: serv || {},
		},

		revalidate: 1,
    }

}


export async function getStaticPaths() {
    
    const { data } = await Client.query({
        query: GET_PAGES_URI
    })

    const { data:res } = await Client.query({
        query: GET_SERVICES_URI,
    })
    

    const pathsData = [];

    data?.pages?.nodes && data?.pages?.nodes.map( page => {
        if(! isEmpty( page?.uri && ! isCustomPageUri( page?.uri )) ) {
            const slugs = page?.uri?.split('/').filter( pageSlug => pageSlug );
            if(slugs.length > 0){
                pathsData.push( {params: { slug: slugs }} )
                
            }
        }
    })

    res?.allServices?.nodes && res?.allServices?.nodes.map( myService => {
        
        pathsData.push( { params: { slug: myService.slug } } )
        // if(myService.length > 0){
            
        // }
    
    })
    
    return {
        paths: pathsData,
        fallback: FALLBACK
    }
}