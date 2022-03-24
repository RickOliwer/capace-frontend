import Blurb from "./sections/blurb";
import CardInfo from "./sections/cardInfo";
import Cases from "./sections/cases";
import HeadingText from "./sections/headingText";
import Intro from "./sections/intro";
import Kundcase from "./sections/Kundcase";
import Kunder from "./sections/Kunder";
import Sidmarkering from "./sections/Sidmarkering";

const Blocks = ( { block, pageTitle, catergories } ) => {
    return (
        <main className="layout">
            {block?.sektion?.map((block, index) => {
                return <Block key={`block${index}`} section={block} title={pageTitle} tax={catergories}/>
            })}
        </main>
    );
}
 
export default Blocks;

export const Block = ( { section, title, tax } ) => {
    switch (section.fieldGroupName) {
        case "GQLCareer_GqlFlexiblecareer_Sektion_Intro":
            return <Intro content={section} />
            break;
        case "GQLCareer_GqlFlexiblecareer_Sektion_HeadingText":
            return <HeadingText content={section} />
            break;
        case "GqlService_GqlFlexibleContent_Sektion_Intro":
            return <Intro content={section} title={title} />
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
        default:
            return  <div>{section.fieldGroupName}</div>;
            break;
    }
}