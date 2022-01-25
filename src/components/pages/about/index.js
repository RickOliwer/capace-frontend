import AboutCareer from "./career-module";
import AboutIntro from "./intro-module";
import AboutReview from "./review-module";
import AboutTeam from "./team-module";

const About = ({ about }) => {
    console.log('about', about);
    return ( 
        <div>
            <AboutIntro intro={about?.aboutIntro} />
            <AboutTeam team={about?.aboutTeam} />
            <AboutCareer career={about?.aboutCareer} />
            <AboutReview review={about?.aboutCustomerReview} />
        </div>
    );
}
 
export default About;