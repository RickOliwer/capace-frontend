import isEmpty from "lodash.isempty";
import Image from "next/image";
import Link from "next/link";
const HomeIntro = ( { intro } ) => {
    let headingTwo = intro[0].heading
    const newHeadingTwo = headingTwo.split(' ')
    return (
        <section className="grid grid-cols-2 lg:grid-cols-5 lg:gap-36">
            <div className="col-span-2 font-light lg:col-span-2 text-capace-dark py-28">
                <h2 className="text-5xl lg:text-7xl page_title">
                    {
                        newHeadingTwo.map((h, index) => {
                            return <div key={`${index}aboutTitle`}>{h}</div>

                        })
                    }
                </h2>
                <p>{intro[0]?.excerpt}</p>
                <p className="my-6 ">{intro[0]?.text}</p>
                <Link href="/">
                    <a className="capace-button">
                        boka ett möte
                    </a>
                </Link>
            </div>
            <div className="col-span-2 lg:col-span-3">
             {!isEmpty(intro[0]?.image) ? (

                <div className="relative w-full h-full">
                    <Image 
                        layout="fill"
                        objectFit='cover'
                        alt={intro[0]?.image?.altText}
                        src={intro[0]?.image?.mediaItemUrl}
                        priority
                    />
                </div>
             ) : null}

            </div>
        </section>
    );
}
 
export default HomeIntro;