import FirstModule from "./first-module";
import SecondModule from "./second-module";
import ThirdModule from "./third-module";

const ServicePost = ( { singleService, theServ } ) => {
    
    return (
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">
            <FirstModule intro={singleService?.servicesIntro[0]} theServ={theServ} />
            <SecondModule info={singleService?.servicesInfo[0]}/>
            <ThirdModule facts={singleService?.servicesShortFacts} />
        </main>
    );
}
 
export default ServicePost;