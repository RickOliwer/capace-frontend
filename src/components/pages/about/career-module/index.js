import Link from 'next/link'
import Image from 'next/image';
import isEmpty from "lodash.isempty"

const AboutCareer = ({ career }) => {
    return ( 
        <div className="my-6 md:my-10 lg:my-28">
            <section className="text-5xl lg:text-7xl">
                <h2>{career[0]?.heading}<span className="capace-oranges">.</span></h2>
                <p className="text-lg">{career[0]?.excerpt}</p>
            </section>
            <section className="gap-10 mt-10 lg:grid lg:grid-cols-3">
                {
                    career?.map((job) => {

                        return job?.jobs?.map((post) => {

                            return <Link key={post?.id} href={post?.uri}>
                                        <a>
                                            <div className="relative w-full mb-6 h-45vh">
                                            {isEmpty(post?.featuredImage?.node?.mediaItemUrl) ? (
                                                <div className='w-full h-full bg-capace'></div>

                                            ) : (

                                                <Image 
                                                layout="fill"
                                                objectFit='cover'
                                                alt={post?.altText}
                                                src={post?.featuredImage?.node?.mediaItemUrl}
                                                priority
                                            />
                                            )}
                                            </div>
                                            
                                            <div>
                                                <p className='mb-3 text-lg capace-oranges'>HELTID</p>
                                                <p className="mb-3 text-3xl font-bold">{post?.title} <span className='capace-oranges'>.</span></p>
                                            </div>
                                        </a>
                                    </Link>
                        })
                    })
                }
            </section>
        </div>
    );
}
 
export default AboutCareer;