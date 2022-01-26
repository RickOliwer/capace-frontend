import Image from 'next/image'
import isEmpty from "lodash.isempty"
import RCTypeWriting from '../../typewriting';


const Hero = ({ hero }) => {
    return (             
    
    <div className="hero">

 
        { isEmpty(hero?.featuredImage?.node?.mediaItemUrl) ? (
            <div className='w-full h-full bg-capace'></div>
        ) : 
        ( 
            <div 
            className="relative block w-screen h-screen"
            >
                <Image 
                layout="fill" 
                objectFit="cover" 
                alt={hero?.featuredImage?.node?.altText}
                src={hero?.featuredImage?.node?.mediaItemUrl} 
                priority />
            </div>
         ) }
        
        <div className="z-10 overlay">

            <div className="relative z-20 w-full h-full ">
                <div className="absolute bottom-0 right-0 p-10 mr-6 md:mr-10 lg:mr-28">
                    <h1 className="text-3xl font-semibold text-white pb-7 lg:text-8xl">
                        {hero?.uri == '/' ? (
                             <div className='start-heading'>

                                 <div className='start-heading1'>HEY<span className='capace-oranges'>.</span></div>
                                 <div className='start-heading2'>
                                     let&apos;s talk
                                     <span className='type-writer'>
                                         <RCTypeWriting />
                                     </span>
                                </div>
                             </div>

                        ) : (

                            <div>{hero?.title} <span>.</span></div>
                        )}
                    </h1>
                </div>

            {/* //Site title & taglines */}
            </div>
        </div>
    </div> 
    );
}
 
export default Hero;