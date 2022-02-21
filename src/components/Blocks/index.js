import HeadingText from "./sections/headingText";
import Intro from "./sections/intro";

const Blocks = ( { block } ) => {
    return (
        <main className="layout">
            {block?.sektion?.map((block, index) => {
                return <Block key={`block${index}`} section={block} />
            })}
        </main>
    );
}
 
export default Blocks;

export const Block = ( { section } ) => {
    switch (section.fieldGroupName) {
        case "GQLCareer_GqlFlexiblecareer_Sektion_Intro":
            return <Intro content={section} />
            break;
        case "GQLCareer_GqlFlexiblecareer_Sektion_HeadingText":
            return <HeadingText content={section} />
            break;
        case "GqlService_GqlServicescontent_Sektion_Intro":
            return <Intro content={section} />
            break;
        default:
            return  <div>{section.fieldGroupName}</div>;
            break;
    }
}