import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import Client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import Image from 'next/image'


const Pages = ({ data }) => {
    const router = useRouter()
    console.log('my about', data?.page?.pageContent);

    if( router.isFallback){
        return <div>Loading...</div>
    }
    const hasImg = data?.page?.featuredImage && data?.page?.featuredImage?.node?.mediaItemUrl ? true : false
    return (
        <Layout key="layout" data={data}>
            <div className="hero">

                {hasImg && 
                    <div 
                    className="relative block w-screen h-screen"
                    >
                        <Image 
                        layout="fill" 
                        objectFit="cover" 
                        src={data?.page?.featuredImage?.node?.mediaItemUrl} 
                        priority />
                    </div>
                } 
                
                <div className="overlay">

                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 right-0 p-10 mr-6 md:mr-10 lg:mr-28">
                            <h1 className="text-3xl font-semibold text-white pb-7 lg:text-8xl">{data?.page?.title} <span>.</span></h1>
                        </div>

                    {/* //Site title & taglines */}
                    </div>
                </div>
            </div>

            <main>
                <div>{data?.page?.pageContent?.pageTemplate}</div>

                {data?.page?.pageContent?.pageTemplate == 'About' ? (
                    <h1>hello about</h1>
                ) : null}

                {data?.page?.pageContent?.pageTemplate == 'Services' ? (
                    <h1>hello services</h1>
                ) : null}

                {data?.page?.pageContent?.pageTemplate == 'Case' ? (
                    <h1>hello case</h1>
                ) : null}

                {data?.page?.pageContent?.pageTemplate == 'Contact' ? (
                    <h1>hello contact</h1>
                ) : null}
            </main>

        </Layout>
    )
}
 
export default Pages;

export async function getStaticProps( {params} ) {
	const { data } = await Client.query( {
		query: GET_PAGE,
		variables: {
			uri: params?.slug.join( '/' ),
		},
	} );


	return {
		props: {
			data: {
                header: data?.header || [],

                menus: {
                  headerMenus: data?.headerMenus?.edges || [],
                  footerMenus: data?.footerMenus?.edges || [],
                },
        
                footer: data?.footer || [],
                page: data?.page ?? {},
                path: params?.slug.join('/'),
            }
		},

		revalidate: 1,
	};

}


export async function getStaticPaths() {
    const { data } = await Client.query({
        query: GET_PAGES_URI
    })

    const pathsData = [];

    data?.pages?.nodes && data?.pages?.nodes.map( page => {
        if(! isEmpty( page?.uri ) ) {
            const slugs = page?.uri?.split('/').filter( pageSlug => pageSlug );
            pathsData.push( {params: { slug: slugs }} )
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}