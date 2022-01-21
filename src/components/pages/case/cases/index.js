
import { useState } from "react";
import Card from "../../modules/card";


const myProjects = []

const Case = ({ cases, taxMenu}) => {
    cases.map((q)=>{
        q.projects.map((r) =>{
            myProjects.push(r)
        })
    })
    const [menuItem, setMenuItem] = useState(myProjects)
    const [button, setButton] = useState(taxMenu)

    

    const filters = (button) => {
        const filterData = myProjects.filter(item => item.gQLCaseCategories.edges.map((ite) => {
            ite.node.name === button
        }))
        
        setMenuItem(filterData)
        
        
    }

    return (
        <div>
            <div>
                <ul>
                    {
                        button?.map((t) => {
                            return <li 
                                    onClick={() => filters(t?.node?.name)} 
                                    key={t?.node?.id} 
                                    className=" cursor-pointer"
                                    >
                                        {t?.node?.name}
                                    
                                    </li>
                        })
                    }
                </ul>
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-10'>
                
                {
                    menuItem?.map((val) => {
 
                            
                            return val?.GQL_casesContent?.tjanster?.map((serv) => { 
                            
                                return (<Card 
                                            key={val?.id}
                                            link={val?.uri}
                                            imgAlt={val?.featuredImage?.node?.altText}
                                            imgSrc={val?.featuredImage?.node?.mediaItemUrl}
                                            first={serv?.services}
                                            second={val?.title}
                                        />)
                            })
                        })
                    
                }
            </div>
        </div>
    );
}

 
export default Case;