const AboutIntro = ({intro}) => {
    let headingTwo = intro?.aboutIntro[0].headingOne
    const newHeadingTwo = headingTwo.split(' ')

    return ( 
        <div className="grid grid-cols-5 gap-4">
            <section className="col-span-2">
                <h2 className="text-7xl">
                    {
                        newHeadingTwo.map((h) => {
                            return <div key={h}>{h}</div>

                        })
                    }
                </h2>
            </section>
            <section className="col-span-3 grid gap-4">
                <div>
                    {
                        intro?.aboutIntro?.map((text) => {
                            return <div key="1">
                                <p>{text?.excerpt}</p>
                                <p>{text?.text}</p>
                            </div>
                        })
                    }
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {
                        intro?.aboutIntro?.map((intro) => {
                            return intro?.subHeading?.map((sub) => {
                                
                                return sub?.section?.map((item, index) => {
                                    
                                    return <div key={`${index}subHeading`}>
                                        <h3>{item?.heading}</h3>
                                        <p>{item?.text}</p>
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