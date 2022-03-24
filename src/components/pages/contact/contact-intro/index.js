import isEmpty from "lodash.isempty"
import Image from "next/image"
import find from "../../../../../public/hitta.gif"
import phone from "../../../../../public/telefon.gif"
import mail from "../../../../../public/mejla.gif"
import { BackgroundColor } from "../../../Blocks/functions/bg"

const ContactIntro = ( { intro } ) => {
    const address = []
    intro?.map((item) => {
        item?.address?.map((i) => {
            address.push(i)
        })
    })
    return (
        <section className="gap-10 my-6 md:my-10 lg:my-28 lg:grid lg:grid-cols-4 contain">
            <div className="text-5xl lg:text-7xl md:my-10 lg:my-28">
                <BackgroundColor bg="" color="" />
                <h2>{intro[0]?.heading}<span className="capace-oranges">.</span></h2>
                <p className="text-lg">{intro[0]?.text}</p>
            </div>
            <div className="my-6 md:my-10 lg:my-28">
                { !isEmpty(address) ? (

                    
                    address.map((ad) =>{
                        return <div key={ad?.zipCodeCity} className="text-center">
                            <div className="relative w-20 h-20 m-auto mb-5">
                                <Image src={find} layout="fill" alt="pin icon" priority />
                            </div>
                            <p>{ad?.street}</p>
                            <p>{ad?.zipCodeCity}</p>
                        </div>
                    })
                 ) : null }
            </div>
            <div className="my-6 md:my-10 lg:my-28">
                <div className="text-center">
                    <div className="relative w-20 h-20 m-auto mb-5">
                        <Image src={phone} layout="fill" alt="phone icon" priority />
                    </div>
                    <p>{intro[0]?.phone}</p>
                    
                </div>
            </div>
            <div className="my-6 md:my-10 lg:my-28">
                <div className="text-center">
                    <div className="relative w-20 h-20 m-auto mb-5">
                        <Image src={mail} layout="fill" alt="mail icon" priority />
                    </div>
                    <p>{intro[0]?.mail}</p>
                    
                </div>
            </div>
        </section>
    );
}
 
export default ContactIntro;