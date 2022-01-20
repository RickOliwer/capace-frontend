const AboutIntro = ({intro}) => {
    let headingTwo = intro[0].headingOne
    const newHeadingTwo = headingTwo.split(' ')

    return ( 
        <div className="lg:grid lg:grid-cols-5 lg:gap-36">
            <section className="lg:col-span-2">
                <h2 className="lg:text-7xl text-5xl page_title">
                    {
                        newHeadingTwo.map((h, index) => {
                            return <div key={`${index}aboutTitle`}>{h}</div>

                        })
                    }
                </h2>
            </section>
            <section className="lg:col-span-3 grid gap-10">
                <div>
                    {
                        intro?.map((text, index) => {
                            return <div className='text-lg' key={`${index}aboutIntroExcerpt`}>
                                <p className="mb-4 font-medium">{text?.excerpt}</p>
                                <p className='font-light'>{text?.text}</p>
                            </div>
                        })
                    }
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {
                        intro?.map((intro) => {
                            return intro?.subHeading?.map((sub) => {
                                
                                return sub?.section?.map((item, index) => {
                                    
                                    return <div className='text-lg' key={`${index}subHeading`}>
                                        <h3 className='text-2xl'>{item?.heading} <span className='text-orange-600'>.</span></h3>
                                        <p className='font-light'>{item?.text}</p>
                                    </div>
                                })

                            })
                        })
                    }
                </div>
            </section>
        </div>
    );
}
 
export default AboutIntro;