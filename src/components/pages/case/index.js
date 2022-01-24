import Case from "./cases";
import IntroCase from "./intro-module";

const CasePage = ({ casePage, tax}) => {
    return (
        <div>
            <IntroCase intro={casePage?.caseIntro} />
            <Case cases={casePage?.caseIntro} taxMenu={tax} />
        </div>
    );
}
 
export default CasePage;