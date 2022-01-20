import Image from 'next/image'
const AboutTeam = ({ team }) => {
    
    return ( 
        <div className="my-6 md:my-10 lg:my-28">
            <div className="lg:text-7xl text-5xl">
                <h2>{team.aboutTeam[0].heading} <span className="capace-oranges">.</span></h2>
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-10'>
                {
                    team?.aboutTeam?.map((teams) => {
                        return teams?.team?.map((post) => {
                            
                            return post?.GQL_employeesContent?.employeeIntro?.map((emp) => { 
                                return <div className='team-card' key={post?.id}>
                                            <div className="mb-6 relative h-screen">
                                                <Image 
                                                    layout="fill"
                                                    objectFit='cover'
                                                    alt={`picture of ${emp?.namn}`}
                                                    src={emp?.image?.mediaItemUrl}
                                                />
                                            </div>
                                            
                                            <div>
                                                <p className='capace-oranges mb-3 text-lg'>{emp?.role}</p>
                                                <p className="text-3xl font-bold mb-3">{emp?.namn} <span className='capace-oranges'>.</span></p>
                                                <p className='text-lg capace-oranges'>{emp?.email}</p>
                                            </div>
                                       </div>
                                
                            })
                        })
                    })
                }
            </div>
        </div>
    );
}
 
export default AboutTeam;