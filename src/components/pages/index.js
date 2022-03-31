

import ContactPage from "./contact";
import ServicePage from "./services";

const Pages = ({template}) => {
    return ( 
        
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">

            {template?.pageTemplate == 'Services' ? (
                <ServicePage servicePage={template?.servicesIntro} />
            ) : null}


            {template?.pageTemplate == 'Contact' ? (
                <ContactPage />
            ) : null}
        </main>
     );
}
 
export default Pages;