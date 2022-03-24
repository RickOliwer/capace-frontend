import Client from "../../src/apollo/client";
import Blocks from "../../src/components/Blocks";
import Hero from "../../src/components/layout/header/hero";
import { GET_GOOGLE_ADS } from "../../src/queries/google-ads/get-googleads";
import { GET_SERVICE_BY_URI } from "../../src/queries/posts/services/get-service";
import { FALLBACK } from "../../src/utils/slugs";

const GoogleOrt = ({data, ort}) => {
    console.log('ort ===>', ort?.data?.google?.orter?.listaPaOrter);
    let theTitle = []
    ort?.data?.google?.orter?.listaPaOrter?.map((ort) => {
        console.log(data?.singleService?.title + ' ' + ort?.ort);
        theTitle.push(data?.singleService?.title + ' ' + ort?.ort)
    })

    console.log('the title ===>', theTitle);

    return (
        <>
            <Hero hero={data?.singleService} logo={data?.header?.siteLogoUrl} />
            <Blocks block={data?.singleService?.GQL_Flexible_Content} pageTitle={data?.singleService?.title} />
        </>
    );
}

export async function getStaticProps({params}){
    const {data} = await Client.query({
         query: GET_SERVICE_BY_URI,
         variables: {
             uri: '/google-ads'
         }
    })

    const ort = await Client.query({
        query: GET_GOOGLE_ADS,
    })

    return {
        props: {
            data: data || {},
            ort
        }, 
        revalidate: 1,
    }
}

export async function getStaticPaths() {
    const { data } = await Client.query({
        query: GET_GOOGLE_ADS,
    })
    console.log('my data ===>', data);

    const pathsData = [];

    data?.google?.orter?.listaPaOrter && data?.google?.orter?.listaPaOrter?.map( page => {
        pathsData.push( {params: { slug: page.slug }})
    })
    return {
        paths: pathsData,
        fallback: FALLBACK
    }
}
 
export default GoogleOrt;