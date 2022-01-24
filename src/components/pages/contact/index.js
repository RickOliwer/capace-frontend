import ContactIntro from "./contact-intro";


const ContactPage = ({ contactPage }) => {
    console.log('my contact',contactPage);
    return (
        <div>
            <ContactIntro intro={contactPage?.contactIntro} />
        </div>
    );
}
 
export default ContactPage;