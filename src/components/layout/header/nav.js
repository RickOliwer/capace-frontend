
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import isEmpty from "lodash.isempty"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
const Nav = ({ header, headerMenus }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [ isMenuScroll, setMenuScroll ] = useState(false)
    const [ isDropped, setDropped ] = useState(false)

    const links = useRef([])
    const createLinksRefs = (link, index) => {
        links.current[index] = link;
    }

    const logo = useRef()

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            if(isOpen) {
                setIsOpen(!isOpen)
            } else {
                return
            }
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    });
      

    useEffect(() => {
        if(isOpen == false) {
            if(isDropped == true){
                setDropped(!isDropped)
            }
        }
        const handleScroll = () => {
            if(window.pageYOffset > 20){
                setMenuScroll(true)
            }else{
                setMenuScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isOpen, isDropped])

 

    useEffect(() => {
        links.current.map((l, index) => {
        if(isDropped){
              l.style.animation = `LinksActive 0.5s ease forwards ${index / 7 + .2}s`
           
         } else{
             l.style.animation = ""
         }
     })
     if(isOpen){
        logo.current.style.animation = `LogoActive 0.5s ease forwards 1s`
     } else {
        logo.current.style.animation = ""
     }
    }, [isDropped, isOpen])

  


    if ( isEmpty( headerMenus ) ){
        return null;
    }

    
    return ( 
        <div className='fixed z-40 contain'>

            <nav className={`${ isMenuScroll ? 'bg-capace h-14' : ''} rounded-lg absolute z-40 w-16 h-14 md:right-[35px] 2xl:right-0 md:top-[24px] right-2 top-4 transition duration-1000 ease-in-out button-center`}>

                    <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'click' : '' } nav_button`} id="nav_button">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>



                    {headerMenus?.length ? (
                        <div className={`${isOpen ? 'items_active' : '' } link_items bg-capace`}>
                            <div className='relative h-full contain'>

                                <div ref={logo} className='absolute opacity-0 md:top-10 md:left-10 top-4 left-4'>
                                    {!isEmpty(header?.siteLogoUrl) ? (
                                                <div className='relative w-16 h-16 md:w-36 md:h-36'>
                                                    <Image 
                                                        layout="fill"
                                                        objectFit='contain'
                                                        alt="site logo"
                                                        src={header?.siteLogoUrl}
                                                        priority
                                                    />
                                                </div>
                                    ) : null}
                                </div>
                                <div className="item-position">
                                    {headerMenus?.map( menu => (
                                    
                                        isEmpty(menu?.node?.childItems?.edges) 
                                        ? 
                                            <Link key={menu?.node?.id} href={menu?.node?.path}>
                                                <a className='text-lg lg:text-2xl hover:text-capace-oranges' onClick={() => setIsOpen(!isOpen)}>{menu?.node?.label}</a>
                                            </Link>
                                        : 

                                            <div key={menu?.node?.id} className='child_link'>
                                                <p  onClick={() => setDropped(!isDropped)} className={`${isDropped ? 'services' : '' } lg:text-2xl text-lg cursor-pointer`}>{menu?.node?.label}</p>
                                                <div  className={`${isDropped} child_items`}>

                                                    {menu?.node?.childItems?.edges.map((child, index) => {
                                                        
                                                        return <li key={child.node.id} ref={(e) => createLinksRefs(e, index)}>
                                                                    <Link href={child?.node.path}>
                                                                        <a 
                                                                            onClick={() => setIsOpen(!isOpen)} 
                                                                            className="text-base"
                                                                        >
                                                                            {child?.node.label}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                    })}
                                                    
                                                </div>
                                            </div>
                        
                                    ))}

                                </div>
                            </div>
                        </div>
                    
                    ) : null}
                
    
            </nav>
        </div>
                     
    );
}
 
export default Nav;