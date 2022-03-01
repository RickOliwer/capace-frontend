import isEmpty from "lodash.isempty"
import Image from "next/image"
import { BackgroundColor } from "../../Blocks/functions/bg"
import Card from "../../pages/modules/card"

const HomeCase = ( { cases, customers } ) => {

    const myProjects = []
    cases.map((q)=>{
        q.projects.map((r) =>{
            myProjects.push(r)
        })
    })

    const kunder = []

    customers?.map((customer) => {
        customer?.kunder?.map((kund) => {
            kunder.push(kund)
        })
    })
    return (
        <section className=" mt-80">
            <div>
                <h2 className="text-5xl lg:text-7xl">{cases[0]?.heading}<span className="capace-oranges">.</span></h2>
            </div>
            
            <div className="gap-10 lg:grid lg:grid-cols-2">
                {
                    myProjects?.map((val) =>{
                        return val?.GQL_casesContent?.tjanster?.map((serv) => {
                            const joinServ = serv.services.join(' / ')
                            
                            return (<Card 
                                        key={val?.id}
                                        link={val?.uri}
                                        imgAlt={val?.featuredImage?.node?.altText}
                                        imgSrc={val?.featuredImage?.node?.mediaItemUrl}
                                        serv={joinServ}
                                        second={val?.title}
                            />)
                        })
                    })
                }
            </div>
            <div className="my-6 md:my-10 lg:my-28">
                <BackgroundColor bg="black" color="white" />

                <div>
                    <h2 className="text-5xl lg:text-7xl">{customers[0]?.heading}<span className="capace-oranges">.</span></h2>
                </div>
                <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                    {!isEmpty(kunder) ? (
                        kunder?.map((img) => {
                            return <div key={img?.id} className="relative w-40 h-40 m-auto">
                                <Image 
                                    src={img?.mediaItemUrl}
                                    alt={img?.altText}
                                    layout="fill"
                                    className=""
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                        })
                    ) : null}

                </div>
            </div>
        </section>
    );
}
 
export default HomeCase;