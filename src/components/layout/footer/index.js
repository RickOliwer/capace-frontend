import Link from "next/link";
import { BackgroundColor } from "../../Blocks/functions/bg";
import { Facebook, FooterImg, Instagram, Linkedin } from "../../icons";

const Footer = ({ footer, footerMenus }) => {

    return (
        <footer className=" text-capace-light">
            <FooterImg />
            <BackgroundColor bg="white" color="" />
            <div className="bg-capace-dark">
                <div className="contain">

                    <div className="grid grid-cols-1 gap-20 py-10 layout lg:grid-cols-3">
                        <div className="">
                            <p className="text-3xl font-bold text-capace-oranges">C.</p>
                            <p>
                                Välkommen ner, redo för att ta dig upp?
                                Vi bygger i grunden vår webbyrå på att alltid ligga steget före. Såväl det gäller webbutveckling, digital marknadsföring eller grafisk design strävar vi alltid efter de idéer som formar morgondagens digitala kommunikation. Med vår kompetens och vårt breda nätverk skapar vi målinriktade tillväxtstrategier för såväl etablerade såsom nya företag och varumärken. Vi anser att alla företag förtjänar en stilren digital silhuett!
                            </p>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="flex flex-col justify-between py-8 md:flex-row layout border-b-[0.5px]">
                        <div className="mb-10 text-center transition duration-500 ease-in-out md:text-left md:mb-0 hover:scale-110">
                            <a href="mailto:info@capace.se">
                                info@capace.se
                            </a>
                        </div>
                        <div className="mb-10 text-center transition duration-500 ease-in-out md:mb-0 hover:scale-110">
                            <a href="tel:0102070570">010-20 70 570</a>
                        </div>
                        <div className="transition duration-500 ease-in-out hover:scale-110">
                            
                            <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/V%C3%A4stkustv%C3%A4gen+19,+211+24+Malm%C3%B6/@55.614204,13.031279,16z/data=!4m5!3m4!1s0x4653a3c25acc49ab:0xc8736b1d0e008d86!8m2!3d55.6142037!4d13.0312788?hl=sv" className="flex flex-col mb-10 text-center md:mb-0">
                                <span>Västkustsvägen 19,</span> 
                                <span>211 24 Malmö</span>
                            </a>
                            
                        </div>
                        <div className="flex items-baseline space-x-6">
                        
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/capacemedia/">
                                <Facebook className="transition duration-500 ease-in-out scale-75 hover:scale-100" />
                            </a>
                        
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/capace_media/?hl=sv">
                                <Instagram className="transition duration-500 ease-in-out scale-75 hover:scale-100" />
                            </a>
                        
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
                                <Linkedin className="transition duration-500 ease-in-out scale-75 hover:scale-100" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between py-5 text-center md:text-left md:flex-row layout">
                        <div className="mb-10 text-sm md:mb-0">© 2022 - Capace Media Group AB</div>
                        <div className="text-sm">Cookies Integritetspolicy</div>

                    </div>
                </div>
            </div>
            <BackgroundColor bg="white" color="" />
        </footer>
    )
}
 
export default Footer;