import isEmpty from "lodash.isempty";
import Image from "next/image";

const SecondSection = ( { secondSection } ) => {
    return ( 
        <section className="my-6 md:my-10 lg:my-28">
            <h2 className="text-5xl lg:text-7xl">{secondSection?.slutresultat[0]?.slutresultatTitle}<span className="text-capace-oranges">.</span></h2>
            <p className="mb-10 font-light">{secondSection?.slutresultat[0]?.slutresultatText}</p>

            <div className="grid gap-10 md:grid-cols-2">

                {!isEmpty(secondSection?.slutresultat[0]?.slutresultatImg) ? (
                    secondSection?.slutresultat[0]?.slutresultatImg?.map((img) => {
                        return <Image
                                key={img?.id} 
                                layout="responsive"
                                objectFit="contain"
                                src={img?.mediaItemUrl}
                                alt={img?.altText}
                                priority
                                width="100%" 
                                height="100%" 
                                className="img-shadow"
                                
                            />
                       
                    })
                ) : null}
            </div>
        </section>
    );
}
 
export default SecondSection;