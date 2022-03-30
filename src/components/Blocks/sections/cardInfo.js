import isEmpty from "lodash.isempty";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";
import HandleImage from "../functions/handleImage";

const CardInfo = ({ content }) => {
    const cardLenght = content?.kort?.length
    if(isEmpty(content?.kort)){
        return null
    }
    return (
        <div className={`grid layout-top contain grid-cols-1 gap-10 ${cardLenght > 1 ? 'md:grid-cols-2' : ''}`}>
            {content?.kort?.map((item) => {
                return (
                    <div key={item?.rubrik}>
                        {!isEmpty(item?.bild?.mediaItemUrl) && (
                            <div className="relative w-full h-50vh">
                                <BackgroundColor bg="#191919" color="white" />
                                <HandleImage
                                    imgLayout="fill"
                                    imgObjectFit='cover'
                                    imgSrc={item?.bild?.mediaItemUrl}
                                    imgAlt={item?.bild?.altText || item?.rubrik}
                                />
                            </div>
                        )}
                        <div className="my-10">
                            <h2 className="text-2xl">{item?.rubrik}</h2>
                            {handleParse(item?.text)}
                        </div>
                        <BackgroundColor bg="#191919" color="white" />
                    </div>
                )
            })}
        </div>
    );
}
 
export default CardInfo;