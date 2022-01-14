import Head from 'next/head'
import Image from 'next/image'
import Client from '../src/apollo/client';
import { GET_MENUS } from '../src/queries/get-menus';



export default function Home({ menus }) {
  console.warn('menus', menus.headerMenus[2].node)
  return (
    <h1 className="text-3xl font-bold underline">
      
    </h1>
  )
}


export async function getStaticProps(context){
  const { data, loading, networkStatus } = await Client.query({
    query: GET_MENUS
  })

  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges,
      }
    }
  }
}