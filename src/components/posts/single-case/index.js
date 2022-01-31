
import isEmpty from "lodash.isempty";
import FirstSection from "./module-one";
import SecondSection from "./module-two";

const CasePost = ( { singleCase, title } ) => {
    console.log('hello', title);
    return (
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">
            <FirstSection firstSection={singleCase} />
            {isEmpty(singleCase?.slutresultat[0]?.slutresultatImg) ? null : (
                <SecondSection secondSection={singleCase} />

            )}
        </main>
    );
}
 
export default CasePost;