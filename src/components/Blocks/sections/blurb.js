import isEmpty from "lodash.isempty";
import Image from "next/image";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";

const Blurb = ( { content } ) => {
    const blurbLenght = content?.blurb?.length
    
    if(isEmpty(content?.blurb)){
        return null
    }
    return (
        <div className={`grid layout-top grid-cols-1 gap-20 ${blurbLenght === 1 ? 'grid-cols-1 md:px-24 lg:px-40' : blurbLenght == 2 ? 'md:grid-cols-2' : blurbLenght == 3 ? 'md:grid-cols-3' : blurbLenght == 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-4 md:grid-cols-2'}`}>
            {content?.blurb?.map((item) => {
                return (
                    <div key={item?.rubrik + item?.text}>
                        <BackgroundColor bg="" color="" />
                        {!isEmpty(item?.ikon?.mediaItemUrl) && (
                            <div className="relative flex justify-center w-20 h-20 m-auto mb-4">
                                <Image 
                                    layout="fill"
                                    objectFit="contain"
                                    src={item?.ikon?.mediaItemUrl}
                                    alt={item?.ikon?.altText}
                                    priority
                                />
                            </div>
                        )}
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