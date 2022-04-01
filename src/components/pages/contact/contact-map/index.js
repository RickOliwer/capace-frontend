import Map from "./map";
import { useLoadScript } from "@react-google-maps/api"


const ContactMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries: ["places"],
    })

    if(!isLoaded) return <div>Loading...</div>;
    return (
        <section className="gap-10 lg:grid lg:grid-cols-1 contain">
            <div className="">
                <h2 className="text-3xl lg:text-5xl">hitta till oss<span className="capace-oranges">.</span></h2>
                <p className="mb-3 w-[100%] md:w-[70%] lg:w-[50%]">Du hittar oss på markplan, med ingång från Nitgatan.
                    Här finns flera parkeringsmöjligheter för dig med bil. </p>
                <p className="mb-3 w-[100%] md:w-[70%] lg:w-[50%]">Åker du kollektivt till oss så tar du antingen stadsbuss 32 eller 34 (grön buss) eller regionbuss 130 (gul buss). Stadsbuss linje 32 går i riktning mot Norra hamnen, du går av på hållplats Lodgatan. Stadsbuss 34 går i riktning mot Stora Bernstorp, du går av på hållplats Sjölundaviadukten och regionbuss linje 130 går i riktning mot Lund och du går av på hållplats Sjölundaviadukten.</p>
                <p className="mb-3 w-[100%] md:w-[70%] lg:w-[50%]">Information samt tidtabell hittar du enklast på <a rel="noreferrer" href="https://www.skanetrafiken.se/" target="_blank" className="text-capace-oranges">Skånetrafikens hemsida</a> eller i deras app.</p>
            </div>
            <div className="my-10">
                <Map />
            </div>
        </section>
    );
}

 
export default ContactMap;