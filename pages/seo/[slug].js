import Client from "../../src/apollo/client";
import Blocks from "../../src/components/Blocks";
import Hero from "../../src/components/layout/header/hero";
import { GET_GOOGLE_ADS } from "../../src/queries/google-ads/get-googleads";
import { GET_SERVICE_BY_URI } from "../../src/queries/posts/services/get-service";
import { FALLBACK } from "../../src/utils/slugs";

const SeoOrt = ({data, orter, ort}) => {
    return (
        <>
            <Hero hero={data?.singleService} logo={data?.header?.siteLogoUrl} googleTitle={orter?.data?.google?.orter?.listaPaOrter} />
            <Blocks block={data?.singleService?.GQL_Flexible_Content} pageTitle={data?.singleService?.title} ort={ort} />
        </>
    );
}
export async function getStaticProps({params}){
    let {data: originData} = await Client.query({
        query: GET_SERVICE_BY_URI,
        variables: {
            uri: '/seo'
        }
    })

    const orter = await Client.query({
        query: GET_GOOGLE_ADS,
    })


    if(!orter?.data?.google?.orter?.listaPaOrter.find(ort => ort.slug === params.slug)){
        return {
            notFound: true
        }
    } 
    
   

    const ort = orter?.data?.google?.orter?.listaPaOrter.find(ort => ort.slug === params.slug)

    let data = {
        ...originData,
        singleService: {
            ...originData.singleService,
            title: `seo ${ort?.ort}`,
            seo: {
                //...originData.singleService.seo,
                title: `Seo i ${ort?.ort}`
                
            },
        }
    }
    //console.log('data ==>', orter?.data?.google?.orter?.listaPaOrter);

    
    return{
        props: {
            data: data || {},
            orter,
            ort
        },
        revalidate: 30,
    }
}

export async function getStaticPaths(){
    const { data } = await Client.query({
        query: GET_GOOGLE_ADS,
    })

    const pathsData = []
    data?.google?.orter?.listaPaOrter && data?.google?.orter?.listaPaOrter?.map( page => {
        pathsData.push( {params: { slug: page.slug }})
    })
    return {
        paths: pathsData,
        fallback: FALLBACK
    }
}
export default SeoOrt;