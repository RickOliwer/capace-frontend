import Blurb from "./sections/blurb";
import CardInfo from "./sections/cardInfo";
import Cases from "./sections/cases";
import GoogleReviews from "./sections/GoogleReviews";
import HeadingText from "./sections/headingText";
import Intro from "./sections/intro";
import Karriar from "./sections/Karriar";
import Kundcase from "./sections/Kundcase";
import Kunder from "./sections/Kunder";
import Sidmarkering from "./sections/Sidmarkering";
import Team from "./sections/Team";

const Blocks = ( { block, pageTitle, catergories, ort } ) => {
    return (
        <main className="layout">
            {block?.sektion?.map((block, index) => {
                return <Block key={`block${index}`} section={block} title={pageTitle} tax={catergories} ort={ort} />
            })}
        </main>
    );
}
 
export default Blocks;

/**
 * returns components that matches the fieldGropName for acf/flexible content
 * @param {*} param0 
 * @returns string
 */
export const Block = ( { section, title, tax, ort } ) => {
    switch (section.fieldGroupName) {
        case "GQLCareer_GqlFlexiblecareer_Sektion_Intro":
            return <Intro content={section} />
            break;
        case "GQLCareer_GqlFlexiblecareer_Sektion_HeadingText":
            return <HeadingText content={section} />
            break;
        case "GqlService_GqlFlexibleContent_Sektion_Intro":
            return <Intro content={section} title={title} ort={ort} />
            break;
        case "GqlService_GqlFlexibleContent_Sektion_Blurbs":
            return <Blurb content={section} />
            break;
        case "GqlService_GqlFlexibleContent_Sektion_KortInfo":
            return <CardInfo content={section} />
            break;
        case "GqlService_GqlFlexibleContent_Sektion_Cases":
            return <Cases content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Intro":
            return <Intro content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Sidmarkering":
            return <Sidmarkering content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Cases":
            return <Cases content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Kunder":
            return <Kunder content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Kundcase":
            return <Kundcase content={section} taxMenu={tax} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Team":
            return <Team content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Karriar":
            return <Karriar content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_GoogleReviews":
            return <GoogleReviews content={section} />
            break;
        case "Page_GqlFlexibleContent_Sektion_Blurbs":
            return <Blurb content={section} />
            break;
        default:
            return  <div>{section.fieldGroupName}</div>;
            break;
    }
}