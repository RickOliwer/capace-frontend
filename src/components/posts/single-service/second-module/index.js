import isEmpty from "lodash.isempty";
import Image from "next/image";

const SecondModule = ( { info } ) => {
    return (
        <section className="my-6 md:my-10 lg:my-28">
            <div className="">
                <h2 className="text-2xl">{info?.infoTitle}</h2>
                <p>{info?.infoExcerpt}</p>
            </div>
            <div className="">
                <div className="grid lg:grid-cols-2 gap-10">
                    {isEmpty(info?.cards) ? null : (
                        info?.cards?.map((card) => {
                            return <div key={card?.bild?.id}>
                                    <Image
                                        layout="responsive"
                                        objectFit="contain"
                                        src={card?.bild?.mediaItemUrl}
                                        alt={card?.bild?.altText}
                                        priority
                                        width="100%"
                                        height="100%"
                                    />

                                    <div>
                                        <h3 className="text-xl">{card?.title}</h3>
                                        <p className="text-light">{card?.text}</p>
                                    </div>
                                </div>
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
 
export default SecondModule;