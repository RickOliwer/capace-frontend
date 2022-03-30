import Link from "next/link";
import handleParse from "../../../utils/parser";
import HandleImage from "../functions/handleImage";

const Karriar = ({content}) => {
    return (
        <div className="layout-top contain">
            <div>
                <h2  className="text-3xl lg:text-5xl">{content?.rubrik}<span className="capace-oranges">.</span></h2>
                {handleParse(content?.text)}
            </div>
            <div className="gap-10 mt-10 lg:grid lg:grid-cols-3">
                {content?.ledigaJobb?.map((job) => {
                    console.log('my jobs ==>', job);
                    return (
                        <Link href={job?.uri} key={job?.id}>
                            <a>
                                <div className="relative w-full mb-6 h-[45vh]">
                                    <div className="oranges-overlay"></div>
                                    <HandleImage 
                                        imgLayout="fill"
                                        imgObjectFit="cover"
                                        imgAlt={job?.featuredImage?.node?.altText}
                                        imgSrc={job?.featuredImage?.node?.mediaItemUrl}
                                    />
                                </div>
                                <div>
                                    <p className='mb-3 text-lg uppercase capace-oranges'>Heltid</p>
                                    <p  className="mb-3 text-2xl font-bold lowercase">{job?.title}<span className='capace-oranges'>.</span></p>
                                </div>
                            </a>
                        </Link>
                    )
                })}

            </div>
        </div>
    );
}
 
export default Karriar;