import isEmpty from "lodash.isempty"

const ContactHours = ( { hours } ) => {
    const opening = []
    hours?.map((item) => {
        item?.contacts?.map((i) => {
            opening.push(i)
        })
    })

    return (
        <section>
            <div className="lg:text-5xl text-3xl md:my-10 lg:my-28">
                <h3>{hours[0]?.heading}<span className="capace-oranges">.</span></h3>
            </div>
            <div className="lg:grid lg:grid-cols-4 gap-10">
                {
                    !isEmpty(opening) ? (
                        opening?.map((open) => {
                            console.log('open', open);
                                return <div key={open?.heading}>
                                    <h4>{open?.heading}<span className="capace-oranges">.</span></h4>
                                    { !isEmpty(open.time) ? (
                                        open.time.map((t) => {
                                            return <div key={`${open?.heading}${t.day}`} className="my-4">
                                                <p>{t.day}</p>
                                                <p>{t.hours}</p>
                                            </div>
                                        })
                                    ) : null}
                                    { !isEmpty(open.info) ? (
                                        <p>{open.info}</p>
                                    ) : null}
                                </div>
                        })
                    ) : null
                }
            </div>

        </section>
    );
}
 
export default ContactHours;