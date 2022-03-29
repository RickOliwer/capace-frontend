import isEmpty from "lodash.isempty";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import handleParse from "../../../utils/parser";
import { BackgroundColor } from "../functions/bg";
import Form from "./form";


const Intro = ( { content, title, ort } ) => {



    if(isEmpty(content)){
        return null
    }
    return (
        <div className="contain">
            <BackgroundColor bg="" color="" />
            {content?.installningar == "bild" ? (
                <SettingImg content={content} title={title} />
            ) : content?.installningar == "text_grid" ? (
                <SettingGrid content={content} title={title} ort={ort} />
            ) : (
                <SettingEmpty content={content} title={title}/>
            )}
            
            <BackgroundColor bg="" color="" />
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
                        <div className="relative w-full lg:w-full lg:h-full h-50vh">
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
            <BackgroundColor bg="" color="" />
            {content.fieldGroupName == 'GqlService_GqlFlexibleContent_Sektion_Intro' && (
                <div className="my-28">

                    <Form title={title} />
                </div>
            )}
        </>
    )
}

export const SettingGrid = ({content, title, ort}) => {
    const [isGrid, setGrid] = useState(false)
    const gridLength = content?.textGrid?.length
    useEffect(() => {
        if(!isEmpty(content?.textGrid)){
            setGrid(true)
        }
    }, [content?.textGrid, setGrid])
    return (
        <>
        <div className={`layout-top intro-block ${isGrid ? 'grid md:grid-cols-3 gap-10 grid-cols-1' : ''}`}>
        <div className={`pr-10`}>
            <h2 className="flex flex-col">
                {!isEmpty(content?.rubrik1) && (
                    <span className="text-2xl md:mb-2 lg:text-4xl">{content?.rubrik1}</span>
                )}
                {!isEmpty(content?.rubrik2) && (
                    <span className="text-2xl md:mb-2 lg:text-4xl">{content?.rubrik2}</span>
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
                    
                
            <div className={`${gridLength <= 2 ? 'min-items' : 'max-items'}`}>
                {content?.textGrid?.map((grid, index) => {
                    let ortText
                    if(grid?.text?.includes("%ort%") && ort !== undefined){
                        ortText = grid?.text?.replace("%ort%", `i ${ort?.ort}`)
                    }else if (grid?.text?.includes("%ort%") && ort === undefined){
                        ortText = grid?.text?.replace("%ort%", "")
                    } else {
                        ortText = grid?.text
                    }
                    return (
                        <div className="grid-item" key={`#€"%%${index}${grid?.text}`}>
                            {/* {!isEmpty(grid?.rubrik) && (
                                <h3>{grid?.rubrik}</h3>
                            )} */}
                            <div className="intro-grids">

                                {handleParse(ortText)}
                            </div>
                        </div>
                    )
                })}
            </div>
            
        )}

    </div>
    <BackgroundColor bg="" color="" />
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
            <BackgroundColor bg="" color="" />
            {content.fieldGroupName == 'GqlService_GqlFlexibleContent_Sektion_Intro' && (
                <div className="my-28">

                    <Form title={title} />
                </div>
            )}
        </>
    )
}
export default Intro;