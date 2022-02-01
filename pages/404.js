import Client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/get-menus";


function Custom404({ data }) {
    
    return (

            <div>
                <h1>404</h1>
            </div>

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
        revalidate: 1,
	};
}