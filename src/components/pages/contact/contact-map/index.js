const ContactMap = ( { maps } ) => {
    return (
        <section className="gap-10 lg:grid lg:grid-cols-2 contain">
            <div className="md:my-10 lg:my-28">
                <h2 className="text-3xl lg:text-5xl">{maps[0]?.heading}<span className="capace-oranges">.</span></h2>
                <p>{maps[0]?.excerpt}</p>
                <p>{maps[0]?.text}</p>
            </div>
            <div className="md:my-10 lg:my-28">
                map be here
            </div>
        </section>
    );
}
 
export default ContactMap;