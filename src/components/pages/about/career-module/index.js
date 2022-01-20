import Link from 'next/link'
import Image from 'next/image';
import isEmpty from "lodash.isempty"

const AboutCareer = ({ career }) => {
    return ( 
        <div className="my-6 md:my-10 lg:my-28">
            <section className="lg:text-7xl text-5xl">
                <h2>{career?.aboutCareer[0]?.heading}<span className="capace-oranges">.</span></h2>
                <p className="text-lg">{career?.aboutCareer[0]?.excerpt}</p>
            </section>
            <section className="lg:grid lg:grid-cols-3 gap-10 mt-10">
                {
                    career?.aboutCareer?.map((job) => {

                        return job?.jobs?.map((post) => {

                            return <Link key={post?.id} href={post?.uri}>
                                        <a>
                                            <div className="mb-6 relative" style={{minHeight: '600px', maxHeight: '888px'}}>
                                            {isEmpty(post?.featuredImage?.node?.mediaItemUrl) ? (
                                                <div className='h-full w-full bg-capace'></div>

                                            ) : (

                                                <Image 
                                                layout="fill"
                                                objectFit='cover'
                                                alt={post?.altText}
                                                src={post?.featuredImage?.node?.mediaItemUrl}
                                            />
                                            )}
                                            </div>
                                            
                                            <div>
                                                <p className='capace-oranges mb-3 text-lg'>HELTID</p>
                                                <p className="text-3xl font-bold mb-3">{post?.title} <span className='capace-oranges'>.</span></p>
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