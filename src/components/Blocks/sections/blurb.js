import isEmpty from "lodash.isempty";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";
import HandleImage from "../functions/handleImage";

const Blurb = ( { content } ) => {
    const blurbLenght = content?.blurb?.length
    console.log('content?.blurb? ====>', content?.blurb);
    if(isEmpty(content?.blurb)){
        return null
    }
    return (
        <div className={`grid layout-top contain grid-cols-1 gap-20 ${blurbLenght === 1 ? 'grid-cols-1 md:px-24 lg:px-40' : blurbLenght == 2 ? 'md:grid-cols-2' : blurbLenght == 3 ? 'md:grid-cols-3' : blurbLenght == 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-4 md:grid-cols-2'}`}>
            {content?.blurb?.map((item) => {
                return (
                    <div key={item?.rubrik + item?.text}>
                        <BackgroundColor bg="" color="" />
                            <div className="relative flex justify-center w-20 h-20 m-auto mb-4">
                                <HandleImage 
                                    imgLayout="fill"
                                    imgObjectFit='contain'
                                    imgAlt={item?.ikon?.altText}
                                    imgSrc={item?.ikon?.mediaItemUrl}
                                />
                            </div>
                        <div>
                            <h2 className="text-2xl text-center">{item?.rubrik}</h2>
                            <div className="text-center">
                                {handleParse(item?.text)}
                            </div>
                            <BackgroundColor bg="" color="" />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Blurb;