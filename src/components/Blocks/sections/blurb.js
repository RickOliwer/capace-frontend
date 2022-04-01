import isEmpty from "lodash.isempty";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";
import HandleImage from "../functions/handleImage";

const Blurb = ( { content } ) => {
    const blurbLenght = content?.blurb?.length
    if(isEmpty(content?.blurb)){
        return null
    }
    return (
        <div className="layout-top contain">
            {!isEmpty(content?.rubrik1) || !isEmpty(content?.rubrik2) || !isEmpty(content?.rubrik3) ? (

                <h3 className="flex flex-col pb-10">
                        {!isEmpty(content?.rubrik1) && (
                            <span className="mb-2 text-2xl lg:text-5xl">{content?.rubrik1}{isEmpty(content?.rubrik3) && isEmpty(content?.rubrik2) && (
                                <span className="text-capace-oranges">.</span>
                            )} </span>
                        )}
                        {!isEmpty(content?.rubrik2) && (
                            <span className="mb-2 text-2xl lg:text-5xl">{content?.rubrik2}{isEmpty(content?.rubrik3) && (
                                <span className="text-capace-oranges">.</span>
                            )} </span>
                        )}
                        {!isEmpty(content?.rubrik3) && (
                            <span className="text-4xl lg:text-6xl caveat capace-oranges">{content?.rubrik3}.</span>
                        )}
                </h3>
            ) : null}

            <div className={`grid grid-cols-1 gap-20 ${blurbLenght === 1 ? 'grid-cols-1 md:px-24 lg:px-40' : blurbLenght == 2 ? 'md:grid-cols-2' : blurbLenght == 3 ? 'md:grid-cols-3' : blurbLenght == 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-4 md:grid-cols-2'}`}>
                {content?.blurb?.map((item) => {
                    return (
                        <div key={item?.rubrik + item?.text}>
                            <BackgroundColor bg="" color="" />
                            {item?.ikon?.mediaItemUrl ? (

                                <div className="relative flex justify-center w-20 h-20 m-auto mb-4">
                                    <HandleImage 
                                        imgLayout="fill"
                                        imgObjectFit='contain'
                                        imgAlt={item?.ikon?.altText}
                                        imgSrc={item?.ikon?.mediaItemUrl}
                                    />
                                </div>
                            ) : null}
                            <div>
                                <h2 className="text-2xl text-center">{item?.rubrik}</h2>
                                <div className="blurb-parse">
                                    {handleParse(item?.text)}
                                </div>
                                <BackgroundColor bg="" color="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Blurb;