
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
const Nav = ({header, headerMenus}) => {

    

    return ( 
        <nav className="fixed z-40 w-full">
            <div className={`w-full transition duration-1000 ease-in-out flex justify-between relative inset-x-0 `}>

                <div>
                    {/* Site Logo */}
 
                </div>



                {headerMenus?.length ? (
                    <ul>
                    {headerMenus?.map( menu => (
                        
                        <li key={menu?.node?.id}>
                            <Link href={menu?.node?.url}>
                                {menu?.node?.label}
                            </Link>
                        </li>
                        
                    ))}
                    </ul>
                
                ) : null}
            </div>
 
        </nav>
                     
    );
}
 
export default Nav;