import isEmpty from "lodash.isempty";
import Image from "next/image";
import Link from "next/link";

const Cases = ({content}) => {

    if(isEmpty(content)){
        return null
    }
    return (
        <div className="layout-top">
            <h2 className="text-4xl">{content.rubrik}<span className="text-capace-oranges">.</span></h2>
            {!isEmpty(content.text) && (
                <p>{text}</p>
            )}
            <div className="gap-10 lg:grid lg:grid-cols-2">
                {
                    content?.case?.map((item) => {
                        return (
                            <div key={item?.id} className='team-card'>

                                <Link key={item?.id} href={item?.uri}>
                                    <a>
                                        <div className="relative mb-6 h-90vh">
                                            <Image
                                                layout="fill"
                                                objectFit='cover'
                                                src={item?.featuredImage?.node?.mediaItemUrl}
                                                alt={item?.featuredImage?.node?.altText}
                                                priority
                                            />

                                        </div>
                                        <div>
                                            {item?.GQL_casesContent?.tjanster.map((serv) => {
                                                const joinServ = serv.services.join(' / ')
                                                return (
                                                    <p key={serv.services} className='mb-3 text-lg'>{joinServ}</p>
                                                )
                                            })}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Cases;