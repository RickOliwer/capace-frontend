import Card from "../../pages/modules/card"
import { useState } from "react";

const Kundcase = ({content, taxMenu}) => {
    const myProjects = []
    content?.projekt?.map((q)=>{
            myProjects.push(q)

    })
    const [menuItem, setMenuItem] = useState(myProjects)
    const [button, setButton] = useState(taxMenu)
    const [activeFilter, setActiveFilter] = useState('allt')


    console.log('what is active ===>', activeFilter);
    return (
        <div className="contain">
            <div className="md:p-40 ">
                <ul className="flex flex-col justify-between space-y-2 md:space-y-0 md:flex-row">
                    {
                        button?.map((t) => {
                            
                            return <li 
                                    onClick={() => setActiveFilter(t.node.name)} 
                                    key={t?.node?.id} 
                                    className={` cursor-pointer md:text-4xl text-3xl hover:text-capace-dark hover:underline transition ease-in-out duration-700 hover:decoration-4 hover:decoration-capace-oranges hover:underline-offset-4 font-bold ${activeFilter === t.node.name ? 'text-capace-dark underline decoration-capace-oranges underline-offset-4 decoration-4': 'text-[#999]'}`}
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