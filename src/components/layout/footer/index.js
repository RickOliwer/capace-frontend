import Image from "next/image";
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
                    <div className="flex flex-col justify-between py-10 md:flex-row layout">
                        <div className="mb-10 text-center md:text-left md:mb-0">
                            <Link href="mailto:info@capace.se">
                                <a>
                                    info@capace.se
                                </a>
                            </Link>
                        </div>
                        <div className="mb-10 text-center md:mb-0">010-20 70 570</div>
                        <div className="">
                            <Link  href="">
                                <a className="flex flex-col mb-10 text-center md:mb-0">
                                    <span>Västkustsvägen 19,</span> 
                                    <span>211 24 Malmö</span>
                                </a>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 mb-10 md:mb-0">
                            <Link href="https://www.facebook.com/capacemedia/">
                                <a className="ml-6">
                                    <Facebook className="m-auto" />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/capace_media/?hl=sv">
                                <a className="ml-6">
                                    <Instagram className="m-auto" />
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com">
                                <a className="ml-6">
                                    <Linkedin className="m-auto" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between py-10 text-center md:text-left md:flex-row layout">
                        <div className="mb-10 md:mb-0">© 2022 - Capace Media Group AB</div>
                        <div className="">Cookies Integritetspolicy</div>

                    </div>
                </div>
            </div>
            <BackgroundColor bg="white" color="" />
        </footer>
    )
}
 
export default Footer;