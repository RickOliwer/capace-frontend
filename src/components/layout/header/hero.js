import Image from 'next/image'

const Hero = ({ hero }) => {

    const hasImg = hero?.featuredImage && hero?.featuredImage?.node?.mediaItemUrl ? true : false
    return (             
    
    <div className="hero">

        {hasImg && 
            <div 
            className="relative block w-screen h-screen"
            >
                <Image 
                layout="fill" 
                objectFit="cover" 
                src={hero?.featuredImage?.node?.mediaItemUrl} 
                priority />
            </div>
        } 
        
        <div className="overlay">

            <div className="relative w-full h-full">
                <div className="absolute bottom-0 right-0 p-10 mr-6 md:mr-10 lg:mr-28">
                    <h1 className="text-3xl font-semibold text-white pb-7 lg:text-8xl">{hero?.title} <span>.</span></h1>
                </div>

            {/* //Site title & taglines */}
            </div>
        </div>
    </div> 
    );
}
 
export default Hero;