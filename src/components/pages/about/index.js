import AboutIntro from "./intro-module";
import AboutTeam from "./team-module";

const About = ({ about }) => {
    
    return ( 
        <div>
            <AboutIntro intro={about} />
            <AboutTeam team={about} />
        </div>
    );
}
 
export default About;