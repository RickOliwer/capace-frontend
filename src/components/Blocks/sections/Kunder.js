import isEmpty from "lodash.isempty";
import { BackgroundColor } from "../functions/bg";
import HandleImage from "../functions/handleImage";

const Kunder = ({content}) => {

    return (
        <section className="layout-top contain">
            <BackgroundColor bg="#191919" color="white" />
            <h2 className="text-5xl lg:text-7xl">{content?.rubrik}<span className="capace-oranges">.</span></h2>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                {!isEmpty(content?.logotyper) && (
                    content?.logotyper?.map((logos) => {
                        return (
                            <div key={logos?.logo?.id} className="relative w-40 h-40 m-auto">
                                <HandleImage
                                    imgLayout="fill"
                                    imgObjectFit='contain'
                                    imgAlt={logos?.logo?.altText}
                                    imgSrc={logos?.logo?.mediaItemUrl}
                                />
                            </div>
                        )
                    })
                )}
            </div>
            <BackgroundColor bg="#191919" color="white" />
        </section>
    );
}
 
export default Kunder;