import CasePage from "./case";
import About from "./about";
import ContactPage from "./contact";
import ServicePage from "./services";

const Pages = ({template, catergories}) => {
    return ( 
        
        <main className="my-6 mx-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">

            {template?.pageTemplate == 'About' ? (
                <About about={template}/>
            ) : null}

            {template?.pageTemplate == 'Services' ? (
                <ServicePage servicePage={template} />
            ) : null}

            {template?.pageTemplate == 'Case' ? (
                <CasePage casePage={template} tax={catergories} />
            ) : null}

            {template?.pageTemplate == 'Contact' ? (
                <ContactPage contactPage={template} />
            ) : null}
        </main>
     );
}
 
export default Pages;