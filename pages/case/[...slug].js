import isEmpty from "lodash.isempty";
import { useRouter } from "next/router";
import Client from "../../src/apollo/client";
import Layout from "../../src/components/layout";
import Hero from "../../src/components/layout/header/hero";
import CasePost from "../../src/components/posts/single-case";
import { GET_CASE_BY_SLUG } from "../../src/queries/posts/case/get-case";
import { GET_CASES_URI } from "../../src/queries/posts/case/get-cases";
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from "../../src/utils/slugs";


const PostCase = ({data}) => {

    const router = useRouter()

    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (
        <Layout key={data?.singleCase?.id} data={data}>
            <Hero hero={data?.singleCase} logo={data?.header?.siteLogoUrl}/>
            <CasePost singleCase={data?.singleCase?.GQL_casesContent} />
        </Layout>
    );
}
 
export default PostCase;

export async function getStaticProps( { params } ){
    const { data, errors } = await Client.query( {
        query: GET_CASE_BY_SLUG,
        variables: {
            uri: params?.slug.join( '/' ),
        },
    } );

    const defaultProps = {
		props: {
			data: data || {},
		},

		revalidate: 1,
	};

    return handleRedirectsAndReturnData(defaultProps, data, errors, 'singleCase')
}

export async function getStaticPaths() {
    const { data } = await Client.query({
        query: GET_CASES_URI,
    })

    const pathsData = [];
    data?.allCases?.nodes && data?.allCases?.nodes.map( myCase => {
        if (! isEmpty( myCase?.uri && ! isCustomPageUri( myCase?.uri )) ) {
            const slugs = myCase?.uri?.split('/').filter( myCaseSlug => myCaseSlug );
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