import isEmpty from "lodash.isempty";
import Link from "next/link";

const FirstSection = ( {firstSection} ) => {
    return (
        <section className="grid gap-10 md:gap-20 md:grid-cols-2 contain">
                <div className="">
                    <h2 className="text-5xl lg:text-7xl">{firstSection?.case[0]?.caseTitle}<span className="text-capace-oranges">.</span></h2>
                    <p className="mb-10 font-light">{firstSection?.case[0]?.caseExcerpt}</p>
                    <p className="font-light">{firstSection?.case[0]?.caseText}</p>
                </div>
                <div className="">
                    <div className="">
                        <h4 className="font-light">{firstSection?.tjanster[0]?.servicesTitle}</h4>
                        <ul className="flex flex-wrap flex-list text-capace-oranges">
                            { ! isEmpty(firstSection?.tjanster[0]?.services) ? (
                                firstSection?.tjanster[0]?.services.map((serv)=>{
                                    return <li className="text-xl font-medium" key={serv}>{serv}</li>
                                })
                                
                            ) : null}
                            
                        </ul>
                    </div>
                    <div className="mt-10">
                        <h4 className="font-light">{firstSection?.bransch[0]?.branschTitle}</h4>
                        <p className="text-xl font-medium text-capace-oranges">{firstSection?.bransch[0]?.branschBransch}</p>
                        { ! isEmpty(firstSection?.bransch[0]?.branschUrl) ? (
                            <Link href={firstSection?.bransch[0]?.branschUrl}><a className="my-6 capace-button border-capace-oranges text-capace-oranges">besök sidan</a></Link>

                        ) : null}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-5xl lg:text-7xl">{firstSection?.uppdraget[0]?.uppdragetTitle}<span className="text-capace-oranges">.</span></h2>
                    <p className="font-light">{firstSection?.uppdraget[0]?.uppdragetText}</p>
                </div>
                <div className="">
                    <h2 className="text-5xl lg:text-7xl">{firstSection?.processen[0]?.processenTitle}<span className="text-capace-oranges">.</span></h2>
                    <p className="font-light">{firstSection?.processen[0]?.processenText}</p>
                </div>

            </section>
    );
}
 
export default FirstSection;