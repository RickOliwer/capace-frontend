
import Client from '../src/apollo/client';
import Blocks from '../src/components/Blocks';
import InstaFeeds from '../src/components/instagram/InstaFeeds';
import Hero from '../src/components/layout/header/hero';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slugs';




export default function Home({ data }) {

  
  return (
    <>
     
      <Hero hero={data?.page} logo={data?.header?.siteLogoUrl} />

      <Blocks block={data?.page?.GQL_Flexible_Content} pageTitle={data?.page?.title}/>
      <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
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