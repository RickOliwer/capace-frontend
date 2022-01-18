import AboutIntro from "./intro-module";

const About = ({ about }) => {
    
    return ( 
        <div>
            <AboutIntro intro={about} />
        </div>
    );
}
 
export default About;