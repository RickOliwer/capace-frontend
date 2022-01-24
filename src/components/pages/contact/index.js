import ContactHours from "./contact-hours";
import ContactInfo from "./contact-info";
import ContactIntro from "./contact-intro";
import ContactMap from "./contact-map";


const ContactPage = ({ contactPage }) => {
    return (
        <div>
            <ContactIntro intro={contactPage?.contactIntro} />
            <ContactInfo info={contactPage?.contactInfo} />
            <ContactHours hours={contactPage?.contactOpeningHours} />
            <ContactMap maps={contactPage?.contactMap} />
        </div>
    );
}
 
export default ContactPage;