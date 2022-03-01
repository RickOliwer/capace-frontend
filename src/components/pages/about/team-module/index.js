import Card from '../../modules/card';
const AboutTeam = ({ team }) => {

    return ( 
        <div className="my-6 md:my-10 lg:my-28">
            <div className="text-5xl lg:text-7xl">
                <h2>{team[0]?.heading} <span className="capace-oranges">.</span></h2>
            </div>
            <div className='gap-10 lg:grid lg:grid-cols-2'>
                {
                    team?.map((teams) => {
                        return teams?.team?.map((post) => {
                            
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
                    })
                }
            </div>
        </div>
    );
}
 
export default AboutTeam;