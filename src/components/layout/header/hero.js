import Image from 'next/image'
import isEmpty from "lodash.isempty"
import RCTypeWriting from '../../typewriting';
import Link from 'next/link';
import { BackgroundColor } from '../../Blocks/functions/bg';
import { useRouter } from 'next/router';


const Hero = ({ hero, logo, googleTitle }) => {
    const router = useRouter()
    return (             
    
    <div className={`hero ${hero?.uri == '/' ? '' : 'not-start'}`}>

 
        { isEmpty(hero?.featuredImage?.node?.mediaItemUrl) ? (
            <div className='w-full h-full bg-capace'></div>
        ) : 
        ( 
            <div 
            className="relative block w-full h-full"
            >
                <Image 
                layout="fill" 
                objectFit="cover" 
                alt={hero?.featuredImage?.node?.altText}
                src={hero?.featuredImage?.node?.mediaItemUrl} 
                priority />
            </div>
         ) }

            <div className="z-10 overlay contain">
                <div className='hero-content'>

                    <div className='inline-block hero-logo'>

                        {!isEmpty(logo) ? (
                            <Link href="/">
                                <a>

                                    <div className='relative w-20 h-20 md:w-36 md:h-36'>
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

                    <div className="hero-text">

                        {hero?.uri == '/' ? (

                        <h1 className="font-semibold text-white">
                                <div className='start-heading1'>hey<span className='capace-oranges'>.</span></div>
                                <div className='start-heading2'>let&apos;s talk<span className='type-writer'><RCTypeWriting /></span></div>
                                </h1>

                        ) : (
                            <h1 className="text-2xl font-semibold text-white lowercase pb-7 lg:text-7xl">
                                <div>{hero?.title}<span className='text-capace-oranges'>.</span></div>
                            </h1>
                        )}

                    {/* //Site title & taglines */}
                    </div>
                </div>
            </div>

    </div> 
    );
}
 
export default Hero;