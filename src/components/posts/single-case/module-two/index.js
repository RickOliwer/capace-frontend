import isEmpty from "lodash.isempty";
import Image from "next/image";
import HandleImage from "../../../Blocks/functions/handleImage";

const SecondSection = ( { secondSection } ) => {
    return ( 
        <section className="my-6 md:my-10 lg:my-28 contain">
            <h2 className="text-5xl lg:text-7xl">{secondSection?.slutresultat[0]?.slutresultatTitle}<span className="text-capace-oranges">.</span></h2>
            <p className="mb-10 font-light">{secondSection?.slutresultat[0]?.slutresultatText}</p>

            <div className="grid gap-10 md:grid-cols-2">

                {
                    secondSection?.slutresultat[0]?.slutresultatImg?.map((img) => {
                        return (
                            <div key={img?.id} className="relative flex items-center justify-center w-full lg:h-[400px] md:h-[320px] h-[300px] shadow-xl">
                                <HandleImage 
                                imgLayout="fill"
                                imgObjectFit='contain'
                                imgAlt={img?.altText}
                                imgSrc={img?.mediaItemUrl}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
 
export default SecondSection;