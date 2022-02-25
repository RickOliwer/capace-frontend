import isEmpty from "lodash.isempty";
import { useEffect, useState } from "react";
import Form from "./form";

const Intro = ( { content, title } ) => {
    const [isGrid, setGrid] = useState(false)

    useEffect(() => {
        if(!isEmpty(content?.textGrid)){
            setGrid(true)
        }
    }, [content?.textGrid, setGrid])
    return (
        <div>

            <div className={`layout-top intro-block ${isGrid ? 'grid grid-cols-3 gap-10' : ''}`}>
                <div className={``}>
                    <h2 className="flex flex-col">
                        <span className="mb-2 text-2xl lg:text-3xl">{content?.rubrik1}</span>
                        <span className="text-4xl lg:text-6xl">{content?.rubrik2}<span className="capace-oranges">.</span></span>
                    </h2>

                    <p>{content?.utdrag}</p>
                </div>
                {!isEmpty(content?.textGrid) && (
                    <div className="grid grid-cols-2 col-span-2 gap-10 intro-grid">
                        {content?.textGrid?.map((grid, index) => {
                            return (
                                <div className="grid-item" key={`#€"%%${index}${grid?.text}`}>
                                    {!isEmpty(grid?.rubrik) && (
                                        <h3>{grid?.rubrik}</h3>
                                    )}
                                    <p>{grid?.text}</p>
                                    {!isEmpty(grid?.avslut) && (
                                        <p className="mt-4">{grid?.avslut}</p>
                                    )}
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