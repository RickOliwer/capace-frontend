import ContactInfo from "./contact-info";
import ContactIntro from "./contact-intro";


const ContactPage = ({ contactPage }) => {
    console.log('my contact',contactPage);
    return (
        <div>
            <ContactIntro intro={contactPage?.contactIntro} />
            <ContactInfo info={contactPage?.contactInfo} />
        </div>
    );
}
 
export default ContactPage;