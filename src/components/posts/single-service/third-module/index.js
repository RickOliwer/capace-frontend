import Image from "next/image";

const ThirdModule = ( { facts } ) => {
    return (
        <section className="">
            <div className="grid gap-10 md:gap-20 lg:grid-cols-4 md:grid-cols-2">
                {facts?.map((fact) => {
                    return <Facts key={fact?.title} fact={fact} />
                })}
            </div>
        </section>
    );
}

export const Facts = ({fact}) =>{
    return (
        <div className="">
            <div className="relative w-20 h-20 m-auto mb-4">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={fact?.icone?.mediaItemUrl}
                    alt={fact?.icone?.altText}
                    priority

                />
            </div>
            <div className="text-center">
                <h3 className="text-2xl">{fact.title}</h3>
                <p>{fact.text}</p>
            </div>
        </div>
    )
}
 
export default ThirdModule;