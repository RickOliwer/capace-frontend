import isEmpty from "lodash.isempty";
import { useRouter } from "next/router";
import Client from "../../src/apollo/client";
import Blocks from "../../src/components/Blocks";
import Layout from "../../src/components/layout";
import Hero from "../../src/components/layout/header/hero";
import ServicePost from "../../src/components/posts/single-service";
import { GET_SERVICE_BY_URI } from "../../src/queries/posts/services/get-service";
import { GET_SERVICES_URI } from "../../src/queries/posts/services/get-services";
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from "../../src/utils/slugs";

const PostService = ({data}) => {
    const router = useRouter()
    
    if(router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <>
            <Hero hero={data?.singleService} logo={data?.header?.siteLogoUrl} />
            <Blocks block={data?.singleService?.GQL_servicesContent} pageTitle={data?.singleService?.title}/>
            <ServicePost singleService={data?.singleService?.GQL_servicesContent} />
        </>
    );
}
 
export default PostService;

export async function getStaticProps( { params } ){

    const { data, errors } = await Client.query( {
        query: GET_SERVICE_BY_URI,
        variables: {
            uri: params?.slug.join( '/' ),
        }
    } );
    
    const defaultProps = {
        props: {
            data: data || {},
        },
        revalidate: 1,
    }
    return handleRedirectsAndReturnData(defaultProps, data, errors, 'singleService')
}

export async function getStaticPaths() {
    const { data } = await Client.query({
        query: GET_SERVICES_URI,
    })

    const pathsData = [];

    data?.allServices?.nodes && data?.allServices?.nodes.map( myService => {
        console.log('enyone there', myService);
        if( ! isEmpty( myService?.uri && ! isCustomPageUri( myService?.uri ))) {
            const slugs = myService?.uri?.split('/').filter( myServiceSlug => myServiceSlug );
            if(slugs.length > 0){
                pathsData.push( { params: { slug: slugs } } )
            }
        }
    })

    return {
        paths: pathsData,
        fallback: FALLBACK
    }
}