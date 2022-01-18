import Header from "./header";
import Footer from "./footer";
import head from 'next/head';
import Seo from "../seo";
import { isEmpty } from "lodash";
import { sanitize } from "../../utils/miscellaneous";

const Layout = ({children, data}) => {

    if(isEmpty(data?.page)){
        return null
    }

    const {page, header, footer, menus} = data || {};
    
    return ( 
        <div>
            <Seo seo={page?.seo} uri={page?.uri} />
            <head>
                <link rel="shortcut icon" href={ header?.favicon } />
                {page?.seo?.schemaDetails && (
                    <script 
                        type='application/ld+json'
                        className='yoast-schema-graph'
                        key='yoastSchema'
                        dangerouslySetInnerHTML={{ __html: sanitize(page?.seo?.schemaDetails)}}

                    />
                )}
            </head>
            <Header header={header} headerMenus={menus?.headerMenus} />
            {children}
            <Footer footer={footer} footerMenus={menus?.footerMenus}/>
        </div>
     );
}
 
export default Layout;