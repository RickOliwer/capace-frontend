import handleParse from "../../../utils/parser";
import { Quotes } from "../../icons";
import { BackgroundColor } from "../functions/bg";

const GoogleReviews = ({content}) => {
    return (
        <div className="layout-top contain">
            <div>
                <BackgroundColor bg="" color="" />
                <h2 className="flex flex-col space-y-1">
                    <span className="text-4xl lg:text-6xl">{content?.rubrik1}</span>
                    <span className="text-5xl lg:text-7xl">{content?.rubrik2}<span className="capace-oranges">.</span></span>
                </h2>
                {handleParse(content?.text)}
            </div>
            {content?.andvandGoogleApi !== true ? (

                <div className="grid gap-10 lg:grid-cols-2">
                    {content?.omdomen?.map((review) => {
                        return (
                            <div key={review?.omdome}>
                                <div className="relative">
                                {handleParse(review?.omdome)}
                                <Quotes className="absolute -left-[49px] scale-50 rotate-180 -top-[56px] -z-10" />
                                <Quotes className="absolute -bottom-[119px] scale-50 -z-10 -right-[38px] rotate-180" />

                                </div>
                            </div>
                        )
                    })}

                </div>
            ) : (
                <div>Google api</div>
            )}
            <div className="mt-16">
                <h3 className='text-2xl'>är du kund hos oss men inte lämnat ett omdöme?</h3>
                <p className="">Lämna ett omdöme genom att klicka på knappen nedan.</p>
                <a href="https://g.page/r/CSU0mxRNRCvnEAg/review" rel="noreferrer" target="_blank" className='inline-block p-5 my-6 font-bold uppercase border-2 border-orange-400 capace-oranges'>Lämna omdöme</a>
            </div>
        </div>
    );
}
 
export default GoogleReviews;