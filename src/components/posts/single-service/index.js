import FirstModule from "./first-module";

const ServicePost = ( { singleService, theServ } ) => {
    
    return (
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">
            <FirstModule intro={singleService?.servicesIntro[0]} theServ={theServ} />
        </main>
    );
}
 
export default ServicePost;