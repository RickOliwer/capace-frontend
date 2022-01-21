const IntroCase = ({ intro }) => {
    return (
        <section className="lg:col-span-2">
                <h2 className="lg:text-7xl text-5xl page_title">
                    {intro[0]?.heading} <span className="capace-oranges">.</span>
                </h2>
                <p>{intro[0]?.excerpt}</p>
                <p>{intro[0]?.text}</p>
        </section>
    );
}
 
export default IntroCase;