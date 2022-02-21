import Intro from "./sections/intro";

const Blocks = ( { block } ) => {
    return (
        <main className="layout">
            {block?.section?.map((block, index) => {
                return <Block key={`block${index}`} section={block} />
            })}
        </main>
    );
}
 
export default Blocks;

export const Block = ( { section } ) => {
    switch (section.fieldGroupName) {
        case "GQLCareer_GqlFlexiblecareer_Section_Intro":
            return <Intro content={section} />
            break;
        default:
            return  <div>{section.fieldGroupName}</div>;
            break;
    }
}