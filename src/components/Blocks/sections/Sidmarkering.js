import isEmpty from "lodash.isempty";
import Link from "next/link";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";

const Sidmarkering = ({content}) => {
    return (
        <section className="my-64 text-center contain ">
            <h2 className="text-5xl lg:text-9xl text-capace-oranges border-text">{content?.rubrik}</h2>
            <div className="page-mark">
                {handleParse(content?.text)}
            </div>
            <BackgroundColor bg="#FF752E" color="white" />
            {!isEmpty(content?.knapp?.url?.uri) && (
                <Link href={content?.knapp?.url?.uri}><a className="text-white border-white capace-button">{content?.knapp?.text}</a></Link>
            )}

        </section>
    );
}
 
export default Sidmarkering;