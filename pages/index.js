
import Client from '../src/apollo/client';
import Blocks from '../src/components/Blocks';
import FrontPage from '../src/components/front-page';
//import Layout from '../src/components/layout';
import Hero from '../src/components/layout/header/hero';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slugs';




export default function Home({ data }) {

  
  return (
    <>
     
      <Hero hero={data?.page} logo={data?.header?.siteLogoUrl} />

      <Blocks block={data?.page?.GQL_Flexible_Content} pageTitle={data?.page?.title}/>
      
      <FrontPage template={data?.page?.pageContent} />
    </>
  )
}


export async function getStaticProps(){
  const { data, errors } = await Client.query({
    query: GET_PAGE,
    variables: {
      uri: '/',
    }
  })
   const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1,
  }

  return handleRedirectsAndReturnData(defaultProps, data, errors, 'page')
}