const ContactMap = () => {
    return (
        <section className="gap-10 lg:grid lg:grid-cols-2 contain">
            <div className="md:my-10 lg:my-28">
                <h2 className="text-3xl lg:text-5xl">hitta till oss<span className="capace-oranges">.</span></h2>
                <p>Du hittar oss på markplan, Östra Varvsgatan 42 i Malmö Västra hamnen. Här finns cykelställ i nära anslutning till entrén och flera parkeringsmöjligheter för bil. Vårt närmaste parkeringshus är P-huset Fullriggaren.</p>
                <p>Åker du kollektivt till oss så tar du MalmöExpressen, stadsbuss linje 5 som går i riktning mot Fullriggaren, Västra hamnen och går av på hållplats Ubåtshallen. För mer information samt tidtabell besök Skånetrafikens hemsida: https://www.skanetrafiken.se/</p>
            </div>
            <div className="md:my-10 lg:my-28">
                map be here
            </div>
        </section>
    );
}
 
export default ContactMap;