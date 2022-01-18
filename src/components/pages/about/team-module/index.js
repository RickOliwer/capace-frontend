import Image from 'next/image'
const AboutTeam = ({ team }) => {
    
    return ( 
        <div>
            <div>
                {team?.aboutTeam?.map((title, index) => {
                    return <h2 key={`${index}teamTitle`}>{title?.heading} <span className="capace-oranges">.</span></h2>
                })}
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-10'>
                {
                    team?.aboutTeam?.map((teams) => {
                        return teams?.team?.map((post) => {
                            
                            return post?.GQL_employeesContent?.employeeIntro?.map((emp, index) => {
                                console.log(post);
                                return <div className='team-card' key={post?.id}>
                                
                                            
                                            <div className="relative h-screen">
                                                <Image 
                                                    layout="fill"
                                                    objectFit='cover'
                                                    src={emp?.image?.mediaItemUrl}
                                                />
                                            </div>
                                            
                                            <div>
                                                <p className='capace-oranges'>{emp?.role}</p>
                                                <p>{emp?.namn} <span className='capace-oranges'>.</span></p>
                                                <p className='capace-oranges'>{emp?.email}</p>

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