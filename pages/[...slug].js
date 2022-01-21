import isEmpty from "lodash.isempty"
import { useRouter } from "next/router";
import Client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import { FALLBACK, isCustomPageUri } from "../src/utils/slugs";
import { handleRedirectsAndReturnData } from '../src/utils/slugs';
import Pages from "../src/components/pages";
import Hero from "../src/components/layout/header/hero";
import { GET_TAX } from "../src/queries/categories";


const Page = ({ data, response }) => {
    const router = useRouter()

    if( router.isFallback){
        return <div>Loading...</div>
    }
    
    return (
        <Layout data={data}>
            <Hero hero={data?.page} />

            <Pages template={data?.page?.pageContent} catergories={response?.data?.catergories?.edges}/>

            

        </Layout>
    )
}
 
export default Page;

export async function getStaticProps( {params} ) {
	const { data, errors } = await Client.query( {
		query: GET_PAGE,
		variables: {
			uri: params?.slug.join( '/' ),
		},
	} );

    const response = await Client.query({
        query: GET_TAX
    })

	const defaultProps = {
		props: {
			data: data || {},
            response: response,
		},

		revalidate: 1,
	};
    return handleRedirectsAndReturnData(defaultProps, data, errors, 'page')
}


export async function getStaticPaths() {
    const { data } = await Client.query({
        query: GET_PAGES_URI
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

    return {
        paths: pathsData,
        fallback: FALLBACK
    }
}