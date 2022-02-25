import isEmpty from "lodash.isempty";
import Image from "next/image";
import handleParse from "../../../utils/parser";

const CardInfo = ({ content }) => {
    const cardLenght = content?.kort?.length
    if(isEmpty(content?.kort)){
        return null
    }
    return (
        <div className={`grid layout-top grid-cols-1 gap-10 ${cardLenght > 1 ? 'md:grid-cols-2' : ''}`}>
            {content?.kort?.map((item) => {
                return (
                    <div key={item?.rubrik}>
                        {!isEmpty(item?.bild?.mediaItemUrl) && (
                            <div className="relative w-full h-50vh">
                                <Image 
                                    layout="fill"
                                    objectFit="cover"
                                    src={item?.bild?.mediaItemUrl}
                                    alt={item?.bild?.altText || item?.rubrik}
                                    priority
                                />
                            </div>
                        )}
                        <div className="my-10">
                            <h2 className="text-2xl">{item?.rubrik}</h2>
                            {handleParse(item?.text)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default CardInfo;