import isEmpty from "lodash.isempty";
import { useEffect, useState } from "react";
import handleParse from "../../../utils/parser";
import Form from "./form";

const Intro = ( { content, title } ) => {
    const [isGrid, setGrid] = useState(false)
    const gridLength = content?.textGrid.length
    console.log('grid lenght', gridLength);

    useEffect(() => {
        if(!isEmpty(content?.textGrid)){
            setGrid(true)
        }
    }, [content?.textGrid, setGrid])
    if(isEmpty(content)){
        return null
    }
    return (
        <div>

            <div className={`layout-top intro-block ${isGrid ? 'grid grid-cols-3 gap-10' : ''}`}>
                <div className={``}>
                    <h2 className="flex flex-col">
                        {!isEmpty(content?.rubrik1) && (
                            <span className="mb-2 text-2xl lg:text-5xl">{content?.rubrik1}</span>
                        )}
                        {!isEmpty(content?.rubrik2) && (
                             <span className="mb-2 text-2xl lg:text-5xl">{content?.rubrik2}</span>
                        )}
                        {!isEmpty(content?.rubrik3) && (
                             <span className="text-4xl lg:text-6xl caveat capace-oranges">{content?.rubrik3}.</span>
                        )}
                    </h2>

                    {!isEmpty(content?.utdrag) && (
                        handleParse(content?.utdrag)
                    )}
                </div>
                {!isEmpty(content?.textGrid) && (
                    <div className={`grid col-span-2 gap-10 intro-grid ${gridLength === 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {content?.textGrid?.map((grid, index) => {
                            return (
                                <div className="grid-item" key={`#€"%%${index}${grid?.text}`}>
                                    {!isEmpty(grid?.rubrik) && (
                                        <h3>{grid?.rubrik}</h3>
                                    )}
                                    {handleParse(grid?.text)}
                                </div>
                            )
                        })}
                    </div>
                )}

            </div>
            {content.fieldGroupName == 'GqlService_GqlServicescontent_Sektion_Intro' && (
                <div className="my-28">

                    <Form title={title} />
                </div>
            )}
        </div>
    );
}
 
export default Intro;