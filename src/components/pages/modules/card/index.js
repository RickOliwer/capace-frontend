import isEmpty from "lodash.isempty";
import Image from "next/image";
import Link from "next/link"

const Card = ({link, imgAlt, imgSrc, first, second, third}) => {
    return ( 
        
        <div className='team-card'>
            {
                isEmpty(link) ? (
                    <>
                    <div className="mb-6 relative h-screen">
                        <Image 
                            layout="fill"
                            objectFit='cover'
                            alt={imgAlt}
                            src={imgSrc}
                        />
                    </div>
                    
                    <div>
                        {!isEmpty(first) ? (
                            <p className='capace-oranges mb-3 text-lg'>{first}</p>
                        ) : null}
                        {!isEmpty(second) ? (
                            <p className="text-3xl font-bold mb-3">{second} <span className='capace-oranges'>.</span></p>
                        ) : null}
                        {!isEmpty(third) ? (
                            <p className='text-lg capace-oranges'>{third}</p>
                        ) : null}
                    </div>
                    </>
                    ) : (
                        
                        <Link href={link}>
                            <a>
                                <div className="mb-6 relative h-screen">
                                    <Image 
                                        layout="fill"
                                        objectFit='cover'
                                        alt={imgAlt}
                                        src={imgSrc}
                                    />
                                </div>
                                
                                <div>
                                {!isEmpty(first) ? (
                                    <p className='capace-oranges mb-3 text-lg'>{first}</p>
                                ) : null}
                                {!isEmpty(second) ? (
                                    <p className="text-3xl font-bold mb-3">{second} <span className='capace-oranges'>.</span></p>
                                ) : null}
                                {!isEmpty(third) ? (
                                    <p className='text-lg capace-oranges'>{third}</p>
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