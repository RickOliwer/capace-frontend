import isEmpty from "lodash.isempty"
import Image from "next/image"

const HomeCustomer = ( { customers } ) => {
    const kunder = []
    customers?.map((customer) => {
        customer?.kunder?.map((kund) => {
            kunder.push(kund)
        })
    })

    console.log('mina kunder', kunder);
    return (
        <section className="my-6 md:my-10 lg:my-28">
            <div>
                <h2 className="text-5xl lg:text-7xl">{customers[0]?.heading}<span className="capace-oranges">.</span></h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 bg-capace-dark">
                {!isEmpty(kunder) ? (
                    kunder?.map((img) => {
                        return <div key={img?.id} className="relative w-40 h-40 m-auto img-array">
                            <Image 
                                src={img?.mediaItemUrl}
                                alt={img?.altText}
                                layout="fill"
                                className="image"
                                priority
                            />
                        </div>
                    })
                ) : null}

            </div>
        </section>
    );
}
 
export default HomeCustomer;