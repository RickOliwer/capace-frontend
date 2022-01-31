import isEmpty from "lodash.isempty";

const FirstModule = ({ intro, theServ }) => {
    const introTitle = intro?.introTitle
    const title = introTitle.split(' ')   
    return (
        <section className="grid gap-10 md:gap-20 md:grid-cols-6">
            <div className=" col-span-2 pr-10">
                <h2 className="text-5xl lg:text-7xl post_title">
                    {title?.map((t, index) => {
                        return <span key={`${t}${index}`}>{t} </span>
                    })}
                </h2>
            </div>
            <div className="col-span-4 grid gap-10">
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

                <div className="">
                    <h3 className="text-2xl">Vill du veta mer om <span className="text-capace-oranges">{theServ}?</span></h3>
                    <p>Fyll formuläret nedan så kontaktar vi dig.</p>
                    <form action="" className="my-10 grid gap-3">
                        <input type="text" defaultValue={theServ} name="service" hidden />
                        <div className="grid grid-cols-2 gap-3">

                            <div>
                                <label htmlFor="name">Namn</label>
                                <input 
                                className="block w-full my-3 shadow py-3 px-4 placeholder-gray-500 focus:ring-capace-oranges focus:border-capace-oranges  focus:outline-none focus:ring-2"
                                type="text" 
                                name="name"/>
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input className="block w-full shadow py-3 px-4 my-3 placeholder-gray-500 focus:ring-capace-oranges focus:border-capace-oranges  focus:outline-none focus:ring-2"
                                type="email" 
                                name="email" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="phone">Telefon</label>
                                <input className="block w-full shadow py-3 px-4 my-3 placeholder-gray-500 focus:ring-capace-oranges focus:border-capace-oranges  focus:outline-none focus:ring-2"
                                type="text" 
                                name="phone" />
                            </div>
                            
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <label htmlFor="message">Lämna ett valfritt meddelande</label>
                                <textarea className="block w-full shadow py-3 px-4 my-3 placeholder-gray-500 focus:ring-capace-oranges focus:border-capace-oranges  focus:outline-none focus:ring-2"
                                type="textarea" 
                                name="message" 
                                rows="4"/>
                            </div>

                            <input type="submit" name="submit" value="skicka" className="uppercase capace-button" />
                        </div>
                    </form>
                </div> 
            </div>
        </section>
    );
}
 
export default FirstModule;