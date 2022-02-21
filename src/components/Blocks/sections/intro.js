import isEmpty from "lodash.isempty";
import { useEffect, useState } from "react";

const Intro = ( { content } ) => {
    console.log('intro', content);
    const [isGrid, setGrid] = useState(false)

    useEffect(() => {
        if(!isEmpty(content?.textGrid)){
            setGrid(true)
        }
    }, [content?.textGrid, setGrid])
    return (
        <div className={`layout-top ${isGrid ? 'grid grid-cols-3 gap-10' : ''}`}>
            <div>
                <h2 className="flex flex-col">
                    <span className="mb-2 text-3xl lg:text-4xl">{content?.rubrik1}</span>
                    <span className="text-4xl lg:text-6xl">{content?.rubrik2}<span className="capace-oranges">.</span></span>
                </h2>

                <p>{content?.utdrag}</p>
            </div>
            {!isEmpty(content?.textGrid) && (
                <div className="grid grid-cols-2 intro-grid">
                    {content?.textGrid?.map((grid, index) => {
                        return (
                            <div key={`#€"%%${index}${grid?.text}`}>
                                {!isEmpty(grid?.rubrik) && (
                                    <h3>{grid?.rubrik}</h3>
                                )}
                                <p>{grid?.text}</p>
                                {!isEmpty(grid?.avslute) && (
                                    <p>{grid?.text}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

        </div>
    );
}
 
export default Intro;