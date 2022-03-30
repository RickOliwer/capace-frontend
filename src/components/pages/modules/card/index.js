import isEmpty from "lodash.isempty";
//import Image from "next/image";
import Link from "next/link"
import { BackgroundColor } from "../../../Blocks/functions/bg";
import HandleImage from "../../../Blocks/functions/handleImage";

const Card = ({link, imgAlt, imgSrc, first, serv, second, third}) => {
    return ( 
        
        <div className='team-card'>
            {
                isEmpty(link) ? (
                    <>
                    <div className="relative h-screen mb-6">
                        <BackgroundColor bg="#191919" color="white" />
                        
                        <HandleImage 
                            imgLayout="fill"
                            imgObjectFit='cover'
                            imgAlt={imgAlt}
                            imgSrc={imgSrc}
                        />
                    </div>
                    
                    <div>
                        {!isEmpty(first) ? (
                            <p className='mb-3 text-base md:text-lg capace-oranges'>{first}</p>
                        ) : null}
                        {!isEmpty(serv) ? (
                            <p className='mb-3 text-base md:text-lg'>{serv}</p>
                        ) : null}
                        {!isEmpty(second) ? (
                            <p className="mb-3 text-2xl font-bold md:text-3xl">{second}<span className='capace-oranges'>.</span></p>
                        ) : null}
                        {!isEmpty(third) ? (
                            <p className='text-base md:text-lg capace-oranges'>{third}</p>
                        ) : null}
                        <BackgroundColor bg="#191919" color="white" />
                    </div>
                    </>
                    ) : (
                        
                        <Link href={link}>
                            <a>
                                <div className="relative h-screen mb-6">
                                    
                                    <HandleImage 
                                        imgLayout="fill"
                                        imgObjectFit='cover'
                                        imgAlt={imgAlt}
                                        imgSrc={imgSrc}
                                    />
                                </div>
                                
                                <div>
                                {!isEmpty(first) ? (
                                    <p className='mb-3 text-base md:text-lg capace-oranges'>{first}</p>
                                ) : null}
                                {!isEmpty(serv) ? (
                                    <p className='mb-3 text-base md:text-lg'>{serv}</p>
                                ) : null}
                                {!isEmpty(second) ? (
                                    <p className="mb-3 text-2xl font-bold md:text-3xl">{second}<span className='capace-oranges'>.</span></p>
                                ) : null}
                                {!isEmpty(third) ? (
                                    <p className='text-base md:text-lg capace-oranges'>{third}</p>
                                ) : null}
                                </div>
                            </a>
                        </Link>
                    )
            }
            
        </div> 
    );
}
 
export default Card;