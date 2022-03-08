import { BackgroundColor } from "../../../Blocks/functions/bg";

const IntroCase = ({ intro }) => {
    return (
        <section className="lg:col-span-2">
                <h2 className="text-5xl lg:text-7xl page_title">
                    <BackgroundColor bg="" color="" />
                    {intro[0]?.heading} <span className="capace-oranges">.</span>
                </h2>
                <p>{intro[0]?.excerpt}</p>
                <p>{intro[0]?.text}</p>
                <BackgroundColor bg="" color="" />
        </section>
    );
}
 
export default IntroCase;