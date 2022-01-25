import Link from "next/link"
import Image from "next/image"
import isEmpty from "lodash.isempty"

const ServicePage = ( { servicePage } ) => {
    const myServ = []
    servicePage?.map((item) => {
        item?.services?.map((i) => {
            myServ.push(i)
        })
    })

    const theTitle = servicePage[0]?.heading
    let title = theTitle.split(" ");
    console.log('my title', title);

    console.log('myServ', myServ);
    return (
        <div className="services_wrapper">
            <div className="title-container">
                <h2 className="text-5xl lg:text-7xl service-title">
                    {title?.map((t) => {
                        return <div key={t}>{t}</div>
                    })}
                </h2>
            </div>
            {myServ?.map((serv) => {
                return <div  key={serv?.id}><Link href={serv?.uri} ><a className="relative inline-block w-full h-full">
                    {!isEmpty(serv?.featuredImage) ? (

                        
                            <Image
                                layout="fill"
                                objectFit='cover'
                                alt={serv?.featuredImage?.node?.altText}
                                src={serv?.featuredImage?.node?.mediaItemUrl}
                                priority
                            />

                    ) : null}
                        <h3 className="title">{serv?.title}</h3>
                    </a></Link></div>
            })}
        </div>
    );
}
 
export default ServicePage;