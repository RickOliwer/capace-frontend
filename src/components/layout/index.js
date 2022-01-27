import Header from "./header";
import Footer from "./footer";
import head from 'next/head';
import Seo from "../seo";
import isEmpty from "lodash.isempty"
import { sanitize } from "../../utils/miscellaneous";
import Head from "next/head";

const Layout = ({children, data}) => {

    if(isEmpty(data?.page || data?.singleCase)){
        return null
    }

    const {page, header, singleCase, footer, headerMenus, footerMenus} = data || {};
    
    return ( 
        <div>
            <Seo seo={page?.seo || singleCase?.seo} uri={page?.uri || singleCase?.seo} />
            <Head>
                <link rel="shortcut icon" href={ header?.favicon } />
                {page?.seo?.schemaDetails && (
                    <script 
                        type='application/ld+json'
                        className='yoast-schema-graph'
                        key='yoastSchema'
                        dangerouslySetInnerHTML={{ __html: sanitize(page?.seo?.schemaDetails)}}

                    />
                )}
            </Head>

            <Header header={header} headerMenus={headerMenus?.edges} page={page}/>
            {children}
            <Footer footer={footer} footerMenus={footerMenus?.edges}/>
        </div>
     );
}
 
export default Layout;