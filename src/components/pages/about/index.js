
import AboutReview from "./review-module";

const About = ({ about }) => {
    return ( 
        <div>

            <AboutReview review={about?.aboutCustomerReview} />
        </div>
    );
}
 
export default About;