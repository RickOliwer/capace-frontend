
import Client from '../src/apollo/client';
import Blocks from '../src/components/Blocks';
import getInstaFeed from '../src/components/instagram/InstaFeeds';
//import InstaFeeds from '../src/components/instagram/InstaFeeds';
import Hero from '../src/components/layout/header/hero';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slugs';




export default function Home({ data, instagram }) {

  console.log('instagram feed', instagram.data);
  
       
  return (
    <>
     
      <Hero hero={data?.page} logo={data?.header?.siteLogoUrl} />

      <Blocks block={data?.page?.GQL_Flexible_Content} pageTitle={data?.page?.title}/>
      <div className='container layout contain layout-top'>
        {instagram?.data?.map((feed) => {
          if(feed?.media_type === "VIDEO"){
            return (
              <video
                width='100%'
                height='auto' 
                src={feed?.media_url} 
                type="video/mp4" 
                controls playsinline>
              </video>
            )
          }else if(feed?.media_type === "CAROUSEL_ALBUM"){
            return (
              <img 
                width='100%'
                height='auto'
                id={feed?.id} 
                src={feed?.media_url} 
                alt={feed?.caption} 
              />
            )
          } else {
            return (

              <img 
                  width='100%'
                  height='auto'
                  id={feed?.id} 
                  src={feed?.media_url} 
                  alt={feed?.caption} 
              />
            )
          }
        })}
      </div>
      {/* <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} /> */}
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

  const instagram = await getInstaFeed()
   const defaultProps = {
    props: {
      data: data || {},
      instagram,
    },
    revalidate: 30,
  }

  return handleRedirectsAndReturnData(defaultProps, data, errors, 'page')
}