import Card from "../../pages/modules/card"

const HomeCase = ( { cases } ) => {
    const myProjects = []
    cases.map((q)=>{
        q.projects.map((r) =>{
            myProjects.push(r)
        })
    })
    return (
        <section>
            <div>
                <h2>{cases[0]?.heading}</h2>
            </div>
            <div className="gap-10 lg:grid lg:grid-cols-2">
                {
                    myProjects?.map((val) =>{
                        return val?.GQL_casesContent?.tjanster?.map((serv) => {
                            const joinServ = serv.services.join(' / ')
                            
                            return (<Card 
                                        key={val?.id}
                                        link={val?.uri}
                                        imgAlt={val?.featuredImage?.node?.altText}
                                        imgSrc={val?.featuredImage?.node?.mediaItemUrl}
                                        serv={joinServ}
                                        second={val?.title}
                            />)
                        })
                    })
                }
            </div>
        </section>
    );
}
 
export default HomeCase;