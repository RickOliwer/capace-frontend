import FirstModule from "./first-module";
import ServiceCase from "./fourth-module";
import SecondModule from "./second-module";
import ThirdModule from "./third-module";

const ServicePost = ( { singleService, theServ } ) => {
    console.log('hello there', singleService);
    
    return (
        <main className="mx-6 my-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">
            <FirstModule intro={singleService?.servicesIntro[0]} theServ={theServ} />
            <SecondModule info={singleService?.servicesInfo[0]}/>
            <ThirdModule facts={singleService?.servicesShortFacts} />
            <ServiceCase cases={singleService?.servicesCase[0]} /> 
        </main>
    );
}
 
export default ServicePost;