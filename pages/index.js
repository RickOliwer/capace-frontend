
import Client from '../src/apollo/client';
import FrontPage from '../src/components/front-page';
import Layout from '../src/components/layout';
import Hero from '../src/components/layout/header/hero';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slugs';




export default function Home({ data }) {

  
  return (
    <Layout key="layout" data={data}>
     
      <Hero hero={data?.page} />
      
      <FrontPage template={data?.page?.pageContent} />
    </Layout>
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