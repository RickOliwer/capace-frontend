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
                <div className="flex justify-between py-10 layout">
                    <div className="">
                        <Link href="mailto:info@capace.se">
                            <a>
                                info@capace.se
                            </a>
                        </Link>
                    </div>
                    <div className="text-center">010-20 70 570</div>
                    <div className="">
                        <Link  href="">
                            <a className="flex flex-col text-center">
                                <span>Västkustsvägen 19,</span> 
                                <span>211 24 Malmö</span>
                            </a>
                        </Link>
                    </div>
                    <div className="grid grid-cols-3">
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
                <div className="flex justify-between py-10 layout">
                    <div className="">© 2022 - Capace Media Group AB</div>
                    <div className="">Cookies Integritetspolicy</div>

                </div>
            </div>

        </footer>
    )
}
 
export default Footer;