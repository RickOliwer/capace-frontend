const ContactMap = ( { maps } ) => {
    return (
        <section className="lg:grid lg:grid-cols-2 gap-10">
            <div className="md:my-10 lg:my-28">
                <h2 className="lg:text-5xl text-3xl">{maps[0]?.heading}<span className="capace-oranges">.</span></h2>
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