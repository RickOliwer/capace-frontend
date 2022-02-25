import Header from "./header";
import Footer from "./footer";
import head from 'next/head';
import Seo from "../seo";
import isEmpty from "lodash.isempty"
import { sanitize } from "../../utils/miscellaneous";
import Head from "next/head";

const Layout = ({children, data}) => {



    const {page, header, singleCase, singleService, singleCareer, footer, headerMenus, footerMenus} = data || {};
    
    return ( 
        <div>
            <Seo seo={page?.seo || singleCase?.seo || singleService?.seo || singleCareer?.seo} uri={page?.uri || singleCase?.uri || singleService?.uri || singleCareer?.uri} />
            <Head>
                <link rel="shortcut icon" href={ header?.favicon } />
                {page?.seo?.schemaDetails || singleCareer?.seo?.schemaDetails || singleCase?.seo?.schemaDetails || singleService?.seo?.schemaDetails && (
                    <script 
                        type='application/ld+json'
                        className='yoast-schema-graph'
                        key='yoastSchema'
                        dangerouslySetInnerHTML={{ __html: sanitize(page?.seo?.schemaDetails || singleCareer?.seo?.schemaDetails || singleCase?.seo?.schemaDetails || singleService?.seo?.schemaDetails)}}

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