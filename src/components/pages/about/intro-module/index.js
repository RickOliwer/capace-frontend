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
            <section className="col-span-3">
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
                <div>
                    {
                        intro?.aboutIntro?.map((intro) => {
                            
                            intro?.subHeading?.map((sub) => {
                                
                                sub?.section?.map((item) =>{
                                    console.log('heading', item?.heading);
                                    console.log('text', item?.text);
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