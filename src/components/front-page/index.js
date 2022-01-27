import HomeCase from "./home-case";
import HomeCustomer from "./home-customer";
import HomeIntro from "./home-intro";
import HomeService from "./home-service";

const FrontPage = ( {template} ) => {
    return (
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">
            <HomeIntro intro={template?.homeIntro} />
            <HomeService serv={template?.homeServices} />
            <HomeCase cases={template?.homeCase} />
            <HomeCustomer customers={template?.homeCustomers} />
        </main>
    );
}
 
export default FrontPage;