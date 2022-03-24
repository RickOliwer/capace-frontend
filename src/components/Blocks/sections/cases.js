import isEmpty from "lodash.isempty";
import Image from "next/image";
import Link from "next/link";
import { BackgroundColor } from "../functions/bg";

const Cases = ({content}) => {

    if(isEmpty(content)){
        return null
    }
    return (
        <div className="layout-top background_black contain">
            <h2 className="text-5xl uppercase lg:text-7xl">{content.rubrik}<span className="text-capace-oranges">.</span></h2>
            {!isEmpty(content.text) && (
                <p>{text}</p>
            )}
             <BackgroundColor bg="#191919" color="white" />
            <div className="gap-10 lg:grid lg:grid-cols-2">
                {
                    content?.case?.map((item) => {
                        return (
                            <div key={item?.id} className='team-card'>
                                 <BackgroundColor bg="#191919" color="white" />

                                <Link key={item?.id} href={item?.uri}>
                                    <a>
                                        <div className="relative mb-6 h-90vh team-card-img">
                                            <div className="overlay"></div>
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
                                            <p className="text-2xl font-bold">{item?.title}<span className="text-capace-oranges">.</span></p>
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