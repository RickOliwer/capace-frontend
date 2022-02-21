import isEmpty from "lodash.isempty";
import { useRouter } from "next/router";
import Client from "../../src/apollo/client";
import Blocks from "../../src/components/Blocks";
import Hero from "../../src/components/layout/header/hero";
import { GET_CAREER_BY_SLUG } from "../../src/queries/posts/career/get-career";
import { GET_CAREERS_URI } from "../../src/queries/posts/career/get-careers";
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from "../../src/utils/slugs";


const PostCareer = ({data}) => {

    const router = useRouter()

    if(router.isFallback){
        return <div>Loading...</div>
    }

    console.log('hello block', data);
    return (
        <>
            <Hero hero={data?.singleCareer} logo={data?.header?.siteLogoUrl}/>
            <Blocks block={data?.singleCareer?.GQL_flexibleCareer} />
        </>
    );
}
 
export default PostCareer;

export async function getStaticProps( { params } ){
    const { data, errors } = await Client.query( {
        query: GET_CAREER_BY_SLUG,
        variables: {
            uri: params?.slug,
        },
    } );

    const defaultProps = {
		props: {
			data: data || {},
		},

		revalidate: 1,
	};

    return handleRedirectsAndReturnData(defaultProps, data, errors, 'singleCareer')
}

export async function getStaticPaths() {
    const { data } = await Client.query({
        query: GET_CAREERS_URI,
    })

    const pathsData = [];
    data?.singleCareers?.nodes && data?.singleCareers?.nodes.map( careerPost => {
            
        if(careerPost.length > 0){
            pathsData.push( { params: { slug: careerPost } } )
        }
    })

    return {
        paths: pathsData,
        fallback: FALLBACK
    }
}