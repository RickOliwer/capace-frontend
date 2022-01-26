
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
    }, [isDropped])

  


    if ( isEmpty( headerMenus ) ){
        return null;
    }

    
    return ( 
        <nav className="fixed z-40 w-full">
            <div className={`${ isMenuScroll ? 'bg-capace h-24' : ''}relative inset-x-0 flex justify-between w-full h-24 transition duration-1000 ease-in-out`}>

                {/* Site Logo */}
                {!isEmpty(header?.siteLogoUrl) ? (

                    <Link href="/">
                        <a
                            className={`relative block h-16 w-16 z-50 my-4 ml-6 md:ml-10 lg:ml-28 cursor-pointer`}
                        >
                            <Image 
                                layout='fill'
                                alt='logo'
                                src={header?.siteLogoUrl}
                                priority
                            />
                        </a>
                    </Link>
                ): null}
 
      

                <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'click' : '' } nav_button mr-6 md:mr-10 lg:mr-28 my-auto`} id="nav_button">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>



                {headerMenus?.length ? (
                    <div className={`${isOpen ? 'items_active' : '' } ${isMenuScroll ? 'link_scroll' : 'link_not_scroll'} link_items bg-capace`}>
                        <div className="item-position">
                            {headerMenus?.map( menu => (
                            
                                isEmpty(menu?.node?.childItems?.edges) 
                                ? 
                                    <Link key={menu?.node?.id} href={menu?.node?.path}>
                                        <a className='text-2xl' onClick={() => setIsOpen(!isOpen)}>{menu?.node?.label}</a>
                                    </Link>
                                : 
                                    // <Link key={menu?.node?.id} href={menu?.node?.path}>
                                    //     <a className=''>{menu?.node?.label}</a>
                                    // </Link>
                                    <div key={menu?.node?.id} className='child_link'>
                                        <p  onClick={() => setDropped(!isDropped)} className={`${isDropped ? 'services' : '' } text-2xl cursor-pointer`}>{menu?.node?.label}</p>
                                        <div  className={`${isDropped ? 'show' : '' } child_items`}>
                                            {menu?.node?.childItems?.edges.map((child, index) => {
                                                return <li key={child.node.id} ref={(e) => createLinksRefs(e, index)}>
                                                    <Link href={child?.node.path}><a onClick={() => setIsOpen(!isOpen)} className="text-base">{child?.node.label}</a></Link>
                                                </li>
                                            })}
                                            
                                        </div>
                                    </div>
                
                            ))}

                        </div>
                    </div>
                
                ) : null}
            </div>
 
        </nav>
                     
    );
}
 
export default Nav;