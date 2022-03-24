import AboutCareer from "./career-module";
import AboutReview from "./review-module";
import AboutTeam from "./team-module";

const About = ({ about }) => {
    return ( 
        <div>

            <AboutTeam team={about?.aboutTeam} />
            <AboutCareer career={about?.aboutCareer} />
            <AboutReview review={about?.aboutCustomerReview} />
        </div>
    );
}
 
export default About;