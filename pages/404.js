import Client from "../src/apollo/client";
import Footer from "../src/components/layout/footer";
import Header from "../src/components/layout/header";
import { GET_MENUS } from "../src/queries/get-menus";


function Custom404({ data }) {
    const {header, footer, headerMenus, footerMenus} = data || {};
    return (
        <>
            <Header header={header} headerMenus={headerMenus?.edges} />
            <div className="relative block w-screen h-screen bg-gray-900">

                <div className="relative w-full h-full">
                    <div className="absolute bottom-0 right-0 p-10 mr-6 md:mr-10 lg:mr-28">
                        <h1 className="z-50 text-3xl font-semibold text-white pb-7 lg:text-8xl">404 <span>.</span></h1>
                    </div>
                </div>

            </div> 

            <div>
                404
            </div>

            <Footer footer={footer} footerMenus={footerMenus?.edges} />
        </>
    )
}

export default Custom404

export async function getStaticProps() {

	const {data} = await Client.query( {
		query: GET_MENUS
	} );

	return {
		props: {
			data: data || {}
		},
	};
}