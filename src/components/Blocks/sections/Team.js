import Card from "../../pages/modules/card";
import { BackgroundColor } from "../functions/bg";

const Team = ({ content }) => {
    return ( 
        <div className="my-6 md:my-10 lg:my-28 contain">

            <div className="text-5xl lg:text-7xl">
            <BackgroundColor bg="#191919" color="white" />
                <h2>{content?.rubrik} <span className="capace-oranges">.</span></h2>
            </div>
            <div className='gap-10 lg:grid lg:grid-cols-2'>
                {
                        content?.anstallda?.map((post) => {
                            
                            return post?.GQL_employeesContent?.employeeIntro?.map((emp) => { 
                                return <Card 
                                            key={post?.id}
                                            imgAlt={`picture of ${emp?.namn}`} 
                                            imgSrc={emp?.image?.mediaItemUrl} f
                                            first={emp?.role} 
                                            second={emp?.namn} 
                                            third={emp?.email} 
                                        /> 
                            })
                    })
                }
                <BackgroundColor bg="#191919" color="white" />
            </div> 
        </div>
    );
}
 
export default Team;