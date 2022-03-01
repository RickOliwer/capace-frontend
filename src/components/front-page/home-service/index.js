import Link from "next/link";
import { BackgroundColor } from "../../Blocks/functions/bg";

const HomeService = ( { serv } ) => {
    return (
        <section className={`text-center my-96`}>
            <h2 className={`text-5xl lg:text-9xl text-capace-oranges border-text`}>{serv[0]?.heading}.</h2>
            <p>{serv[0]?.excerpt}</p>
            <BackgroundColor bg="#FF752E" color="white" />
            <h3 className="my-6 text-2xl lg:text-5xl">WEBB / MARKNADSFÖRING / GRAFISKT / TRYCK</h3>
            <Link href="/tjanster"><a className="capace-button">se alla tjänster</a></Link>
        </section>
    );
}
 
export default HomeService;