
import Client from '../src/apollo/client';
import Blocks from '../src/components/Blocks';
import getInstaFeed from '../src/components/instagram/InstaFeeds';
import Hero from '../src/components/layout/header/hero';
import { GET_PAGE } from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slugs';


export default function Home({ data, instagram }) {

  

  return (
    <>
     
      <Hero hero={data?.page} logo={data?.header?.siteLogoUrl} />

      <Blocks block={data?.page?.GQL_Flexible_Content} pageTitle={data?.page?.title}/>
      <div className='m-auto layout contain layout-top'>
        <div className='mb-7'>
          <h2 className="text-5xl uppercase lg:text-7xl">instagram<span className="text-capace-oranges">.</span></h2>
          <a className='hover:text-capace-oranges' rel="noreferrer" target="_blank" href="https://www.instagram.com/capace_media/?hl=sv">@capace_media</a>

        </div>
        <div className='container'>
          {instagram?.data?.map((feed) => {
            if(feed?.media_type === "VIDEO"){
              return (


                  <video key={feed?.id}
                    width='100%'
                    height='auto' 
                    src={feed?.media_url} 
                    type="video/mp4" 
                    controls playsinline>
                    
                  </video>

              )
            }else if(feed?.media_type === "CAROUSEL_ALBUM"){
              return (
                <div key={feed?.id}>

                  <img 
                    width='100%'
                    height='auto'
                    id={feed?.id} 
                    src={feed?.media_url} 
                    alt={feed?.caption} 
                  />
                </div>
              )
            } else {
              return (
                <div key={feed?.id}>

                  <img 
                      width='100%'
                      height='auto'
                      id={feed?.id} 
                      src={feed?.media_url} 
                      alt={feed?.caption} 
                  />
                </div>
              )
            }
          })}
        </div> 
      </div>
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