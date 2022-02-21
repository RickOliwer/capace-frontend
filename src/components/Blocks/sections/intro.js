const Intro = ( { content } ) => {
    console.log(content);
    return (
        <div className="layout-top">
            <h2 className="flex flex-col ">
                <span className="mb-2 text-3xl lg:text-4xl">{content?.heading1}</span>
                <span className="text-4xl lg:text-6xl">{content?.heading2}<span className="capace-oranges">.</span></span>
            </h2>

            <p>{content?.text}</p>
        </div>
    );
}
 
export default Intro;