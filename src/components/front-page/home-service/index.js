import Link from "next/link";

const HomeService = ( { serv } ) => {
    return (
        <section className="text-center my-28 text-capace-dark">
            <h2 className="text-5xl lg:text-9xl text-capace-oranges border-text">{serv[0]?.heading}.</h2>
            <p>{serv[0]?.excerpt}</p>
            <h3 className="my-6 text-2xl lg:text-5xl">WEBB / MARKNADSFÖRING / GRAFISKT / TRYCK</h3>
            <Link href="/tjanster"><a className="capace-button">se alla tjänster</a></Link>
        </section>
    );
}
 
export default HomeService;