const AboutIntro = ({intro}) => {
    let headingTwo = intro?.aboutIntro[0].headingOne
    const newHeadingTwo = headingTwo.split(' ')

    return ( 
        <div>
            <section>
                <h2>
                    {
                        newHeadingTwo.map((h) => {
                            return <div key={h} >{h}</div>

                        })
                    }
                </h2>
            </section>
            <section>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>

                </div>
            </section>
        </div>
    );
}
 
export default AboutIntro;