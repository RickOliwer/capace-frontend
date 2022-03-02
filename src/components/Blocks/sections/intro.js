import isEmpty from "lodash.isempty";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";
import Form from "./form";


const Intro = ( { content, title } ) => {

    if(isEmpty(content)){
        return null
    }
    console.log('my content', content);
    return (
        <div>
            <BackgroundColor bg="" color="" />
            {content?.installningar == "bild" ? (
                <SettingImg content={content} title={title} />
            ) : content?.installningar == "text_grid" ? (
                <SettingGrid content={content} title={title} />
            ) : (
                <SettingEmpty content={content} title={title}/>
            )}
            

        </div>
    );
}

export const SettingImg = ({content, title}) => {
    return (
        <>
        
            <div className="grid grid-cols-2 layout-top lg:grid-cols-5 lg:gap-36">
                <div className="col-span-2 font-light lg:col-span-2 text-capace-dark py-28">
                    <h2 className="flex flex-col text-5xl lg:text-7xl">
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

                    <Link href={content?.knapp?.url?.uri}>
                        <a className="capace-button">
                            {content?.knapp.text}
                        </a>
                    </Link>
                    <BackgroundColor bg="" color="" />
                </div>
                <div className="col-span-2 lg:col-span-3">
                    {!isEmpty(content?.bild?.mediaItemUrl) && (
                        <div className="relative w-full h-full">
                        <Image 
                            layout="fill"
                            objectFit='cover'
                            alt={content?.bild?.altText}
                            src={content?.bild?.mediaItemUrl}
                            priority
                        />
                    </div>
                    )}
                </div>
            </div>
            {content.fieldGroupName == 'GqlService_GqlFlexibleContent_Sektion_Intro' && (
                <div className="my-28">

                    <Form title={title} />
                </div>
            )}
        </>
    )
}

export const SettingGrid = ({content, title}) => {
    const [isGrid, setGrid] = useState(false)
    const gridLength = content?.textGrid?.length
    useEffect(() => {
        if(!isEmpty(content?.textGrid)){
            setGrid(true)
        }
    }, [content?.textGrid, setGrid])
    return (
        <>
        <div className={`layout-top intro-block ${isGrid ? 'grid grid-cols-3 gap-10' : ''}`}>
        <div className={`pr-10`}>
            <h2 className="flex flex-col pb-10">
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
    {content.fieldGroupName == 'GqlService_GqlFlexibleContent_Sektion_Intro' && (
        <div className="my-28">

            <Form title={title} />
        </div>
    )}
    </>
    )
}

export const SettingEmpty = ({content, title}) => {
    return (
        <>
            <div className={`pr-10 layout-top`}>
                <h2 className="flex flex-col pb-10">
                    {!isEmpty(content?.rubrik1) && (
                        <span className="mb-2 text-2xl lg:text-5xl">{content?.rubrik1}{isEmpty(content?.rubrik3) && isEmpty(content?.rubrik2) && (
                            <span className="text-capace-oranges">.</span>
                        )} </span>
                    )}
                    {!isEmpty(content?.rubrik2) && (
                        <span className="mb-2 text-2xl lg:text-5xl">{content?.rubrik2}{isEmpty(content?.rubrik3) && (
                            <span className="text-capace-oranges">.</span>
                        )} </span>
                    )}
                    {!isEmpty(content?.rubrik3) && (
                        <span className="text-4xl lg:text-6xl caveat capace-oranges">{content?.rubrik3}.</span>
                    )}
                </h2>

                {!isEmpty(content?.utdrag) && (
                    handleParse(content?.utdrag)
                )}
            </div>
            {content.fieldGroupName == 'GqlService_GqlFlexibleContent_Sektion_Intro' && (
                <div className="my-28">

                    <Form title={title} />
                </div>
            )}
        </>
    )
}
export default Intro;