import Nav from "./nav";
import {isEmpty} from 'lodash'

const Header = ({header, headerMenus, page}) => {
    if( isEmpty(headerMenus)){
        return null;
    }
    //const hasImg = page?.featuredImage && page?.featuredImage?.node?.mediaItemUrl ? true : false
    return ( 
        <header id="front" className="w-full">
                <Nav header={header} headerMenus={headerMenus} />
                {/* <div className="hero">

                    {hasImg && 
                        <div 
                        className="relative block w-screen h-screen"
                        >
                            <Image 
                            layout="fill" 
                            objectFit="cover" 
                            src={page?.featuredImage?.node?.mediaItemUrl} 
                            priority />
                        </div>
                    } 

                    <div className="overlay">

                        <div className="relative w-full h-full">
                            <div className="absolute bottom-0 right-0 p-10 mr-6 md:mr-10 lg:mr-28">
                                <h1 className="text-3xl font-semibold text-white pb-7 lg:text-8xl">{page?.title} <span>.</span></h1>
                            </div>

                        
                        </div>
                    </div>
                </div> */}
        </header>
    );
}
 
export default Header;