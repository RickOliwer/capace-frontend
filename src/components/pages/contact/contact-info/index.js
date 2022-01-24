import isEmpty from "lodash.isempty"
import Link from "next/link"

const ContactInfo = ( { info } ) => {
    const contacts = []
    info?.map((item) => {
        item?.contacts?.map((i) =>{
            contacts.push(i)
        })
    })
    return (
        <section>
            <div className="lg:text-6xl text-4xl md:my-10 lg:my-28">
                <h3>{info[0]?.heading}<span className="capace-oranges">.</span></h3>
            </div>
            <div className="lg:grid lg:grid-cols-4 gap-10">
                {!isEmpty(contacts) ? (
                    contacts.map((contact) => {
                        return <div key={contact?.heading}>
                            <h4>{contact?.heading}<span className="capace-oranges">.</span></h4>
                            <p> E-Post: 
                                <Link href={`mailto:${contact.email}`} >
                                    <a className="underline capace-oranges">{contact.email}</a>
                                </Link>
                            </p>
                            <p>Telefon: {contact.phone}</p>
                            <p>{contact.info}</p>
                        </div>
                    })
                ) : null}
            </div>

        </section>
    );
}
 
export default ContactInfo;