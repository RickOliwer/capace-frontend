import Nav from "./nav";

const Header = ({header, headerMenus}) => {

    return ( 
        <header id="front" className="h-screen bg-black ">
            <div className="overlay">
                <Nav header={header} headerMenus={headerMenus} />
                {/* Site title & taglines */}
                <div className="flex items-center justify-center w-full h-full text-center">
                    <div className="flex flex-col justify-start p-10 text-center lg:items-center">
                        <h1 className="text-3xl font-semibold pb-7 bg_dark_text lg:text-8xl">{header?.siteTitle}</h1>
                        <p className="font-semibold bg_dark_text lg:text-2xl">{header?.siteTagLine}</p>
                    </div>

                {/* //Site title & taglines */}
                </div>
            </div>
        </header>
    );
}
 
export default Header;