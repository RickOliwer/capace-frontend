import Image from 'next/image'
import isEmpty from "lodash.isempty"
import RCTypeWriting from '../../typewriting';
import Link from 'next/link';


const Hero = ({ hero, logo }) => {
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
            <div className='absolute top-6 left-6'>

                {!isEmpty(logo) ? (
                    <Link href="/">
                        <a>

                            <div className='relative w-36 h-36'>
                                <Image 
                                    layout="fill"
                                    objectFit='contain'
                                    alt="site logo"
                                    src={logo}
                                    priority
                                />
                            </div>
                        </a>
                    </Link>
                ) : null}
            </div>

            <div className="absolute bottom-0 right-0 mr-6 md:mr-10 lg:mr-28">
                        {hero?.uri == '/' ? (

                        <h1 className="text-3xl font-semibold text-white pb-7 lg:text-8xl">
                                 <div className='start-heading1'>hey<span className='capace-oranges'>.</span></div>
                                 <div className='start-heading2'>let&apos;s talk<span className='type-writer'><RCTypeWriting /></span></div>
                                 </h1>

                        ) : (
                            <h1 className="text-3xl font-semibold text-white pb-7 lg:text-8xl">
                            <div>{hero?.title} <span>.</span></div>
                            </h1>
                        )}

            {/* //Site title & taglines */}
            </div>
        </div>
    </div> 
    );
}
 
export default Hero;