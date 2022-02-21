import isEmpty from "lodash.isempty";
import Form from "./form";

const FirstModule = ({ intro, theServ }) => {

    if(isEmpty(intro)){
        return null
    }
    const introTitle = intro?.introTitle
    const title = introTitle.split(' ')
    
    return (
        <section className="grid gap-10 md:gap-20 md:grid-cols-6">
            <div className="col-span-2 pr-10 ">
                {title ? (

                    <h2 className="text-5xl lg:text-7xl post_title">
                        {title?.map((t, index) => {
                            return <span key={`${t}${index}`}>{t} </span>
                        })}
                    </h2>
                ) : (
                    <h2>{introTitle}</h2>
                )} 

            </div>
            <div className="grid col-span-4 gap-10">
                <div className="">
                    <p className="font-light">{intro?.introText}</p>
                </div>
                <div className="grid gap-10 md:gap-20 md:grid-cols-2">
                    {isEmpty(intro?.underRubriker) ? null : (
                        intro?.underRubriker?.map((under) => {
                            return <div key={under?.title} className="">
                                <h3 className="text-2xl">{under?.title}</h3>
                                <p className="font-light">{under?.text}</p>
                            </div>
                        })
                    )}
                </div>
                <div>
                    <Form theServ={theServ} />
                </div>

            </div>
        </section>
    );
}
 
export default FirstModule;