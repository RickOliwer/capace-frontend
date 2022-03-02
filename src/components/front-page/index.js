import HomeCase from "./home-case";

import HomeService from "./home-service";

const FrontPage = ( {template} ) => {
    return (
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">

            <HomeService serv={template?.homeServices} />
            <HomeCase cases={template?.homeCase} customers={template?.homeCustomers} />
        </main>
    );
}
 
export default FrontPage;