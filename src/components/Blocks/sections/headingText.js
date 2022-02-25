import isEmpty from "lodash.isempty";

const HeadingText = ( { content } ) => {
    return (
        <div className="layout-top">
            {!isEmpty(content?.rubrik) && (
                <h3 className="text-xl">{content?.rubrik}</h3>
            )}
            {!isEmpty(content?.textBox) && (
                content?.textBox?.map((text) => {
                    return (
                        <p className="mb-4" key={text?.text}>{text?.text}</p>
                    )
                } )
            )}

            {!isEmpty(content?.lista) && (
                <ul className="list-inside">
                    {content?.lista?.map((li) => {
                        return (
                            <li key={li?.text} className="mb-1 list-disc">{li?.text}</li>
                        )
                    })}
                </ul>
            )}
            
        </div>
    );
}
 
export default HeadingText;