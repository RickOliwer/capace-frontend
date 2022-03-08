import Link from 'next/link'
import { BackgroundColor } from '../../../Blocks/functions/bg';
const AboutReview = ({review}) => {
    
    return (
        <div className="my-6 md:my-10 lg:my-28">
            <section className="">
            <BackgroundColor bg="" color="" />
                <h2 className="text-5xl lg:text-7xl">{review[0]?.heading}<span className="capace-oranges">.</span></h2>
            </section>
            <section className="grid gap-10 text-lg lg:grid-cols-2">
                {
                    review?.map((rev) => {
                        return rev?.reviews.map((r) => {
                            return <div className="" key={r.heading}>
                                        <h3 className='text-2xl'>{r?.heading}</h3>
                                        <p>{r?.text}</p>
                                </div>
                            
                        })
                    })
                }
            </section>
            <section className="mt-16">
                <h3 className='text-2xl'>är du kund hos oss men inte lämnat ett omdöme?</h3>
                <p className="">Lämna ett omdöme genom att klicka på knappen nedan.</p>
                <Link href="https://g.page/r/CSU0mxRNRCvnEAg/review"><a className='inline-block p-5 my-6 font-bold uppercase border-2 border-orange-400 capace-oranges'>Lämna omdöme</a></Link>
            </section>
        </div>
    );
}
 
export default AboutReview;