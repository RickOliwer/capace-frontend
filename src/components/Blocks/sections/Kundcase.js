import Card from "../../pages/modules/card"
import { useState } from "react";

const Kundcase = ({content, taxMenu}) => {
    const myProjects = []

    console.log('content ====>', content);
    content?.projekt?.map((q)=>{
            myProjects.push(q)

    })

    

    const [menuItem, setMenuItem] = useState(myProjects)
    const [button, setButton] = useState(taxMenu)
    const [activeFilter, setActiveFilter] = useState('')



    return (
        <div className="contain">
            <div className="p-40 ">
                <ul className="flex justify-between">
                    {
                        button?.map((t) => {
                            return <li 
                                    onClick={() => setActiveFilter(t.node.name)} 
                                    key={t?.node?.id} 
                                    className={`${activeFilter ? '': ''} cursor-pointer text-4xl font-bold`}
                                    >
                                        {t?.node?.name}
                                    
                                    </li>
                        })
                    }
                </ul>
            </div>
            <div className='gap-10 lg:grid lg:grid-cols-2'>
                
                {
                    menuItem?.filter((item, index) => {
                        if(!activeFilter){
                            return true
                        } else {

                            const projectCat = item.gQLCaseCategories.edges.map((i) => {
                                    return i.node.name
                            })
                            if(projectCat.includes(activeFilter)){
                                return true
                            }
                        }
                    }).map((val) => {
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
        </div>
    );
}
 
export default Kundcase;