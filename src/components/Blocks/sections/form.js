import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import isEmpty from "lodash.isempty";

const Form = ({title}) => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const [isSubmitted, setSubmitted] = useState(false)
    const [isLoading, setLoading] = useState(false)

    async function onSubmitForm(values){
        setLoading(true)
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        }

        try {
            const response = await axios(config);
            if(response.status == 200){
                console.log('message sent');
                setLoading(false)
                setSubmitted(true)
                reset()
                
            }
        } catch (error) {
            console.log(error);
        }
        
    }


    return (
        <div className="contain mb-[100px]">
        <h3 className="text-2xl">Vill du veta mer om <span className="text-capace-oranges">{title}?</span></h3>
        <p>Fyll formuläret nedan så kontaktar vi dig.</p>
        
        <form onSubmit={handleSubmit(onSubmitForm)} className="grid gap-3 my-10">
            {isSubmitted && isEmpty(errors) ? (
                <div className="w-full px-6 py-4 my-4 text-xl opacity-50 bg-capace-oranges text-capace-light">Tack för ditt Meddelande!</div>
            ) : null}
            <input 
                type="text" 
                defaultValue={title} 
                name="service" 
                hidden
                {...register("service", {
                    required: "Required",
                })}  />
            <div className="grid grid-cols-2 gap-5">

                <div className="col-span-2 md:col-span-1">
                    <input 
                    className="block w-full px-4 py-3 my-3 h-[50px] border-capace-dark border-b-[1px] placeholder-capace-dark focus:ring-capace-oranges focus:border-b-transparent focus:outline-none focus:ring-2"
                    placeholder="Namn"
                    type="text"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Obligatoriskt',
                        },
                        minLength: {
                            value: 2,
                            message: 'Namnet är för kort',
                        },
                        maxLength: {
                            value: 15,
                            message: "Namnet är för långt",
                        },
                        pattern: {
                            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                            message: "Symboler som 123-#€&%/ är inte tillåtet"
                        }
                    })} 
                    name="name"/>
                    {errors.name ? (
                        <span className="text-capace-oranges">{errors.name.message}</span>
                    ) : null}
                    
                    
                </div>
                <div className="col-span-2 md:col-span-1">
                    <input className="block w-full px-4 py-3 h-[50px] my-3 border-capace-dark border-b-[1px] placeholder-capace-dark focus:ring-capace-oranges focus:border-b-transparent focus:outline-none focus:ring-2"
                    placeholder="E-mail"
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Obligatoriskt',
                        },
                        minLength: {
                            value: 10,
                            message: 'E-mailet är för kort',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "exemple@exemple.test"
                        }
                    })}  
                    name="email" />
                    {errors.email ? (
                        <span className="text-capace-oranges">{errors.email.message}</span>
                    ) : null}
                </div>
                <div className="col-span-2">
                    <input className="block w-full px-4 h-[50px] py-3 my-3 border-capace-dark border-b-[1px] placeholder-capace-dark focus:ring-capace-oranges focus:border-b-transparent focus:outline-none focus:ring-2"
                    placeholder="Telefon"
                    {...register("phone", {
                        minLength: {
                            value: 10,
                            message: 'numret är för kort',
                        },
                        maxLength: {
                            value: 15,
                            message: "numtet är för långt",
                        },
                        pattern: {
                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Detta är inte ett giltigt telefonnummer"
                        }
                    })} 
                    type="text" 
                    name="phone" />
                    {errors.phone ? (
                        <span className="text-capace-oranges">{errors.phone.message}</span>
                    ) : null}
                </div>
                
            </div>
            <div className="grid gap-4">
                <div>
                    <textarea className="block w-full px-4 py-3 my-3 h-[50px] border-capace-dark border-b-[1px] placeholder-capace-dark focus:ring-capace-oranges focus:border-b-transparent focus:outline-none focus:ring-2"
                    placeholder="Lämna ett valfritt meddelande"
                    {...register("message", {
                        required: {
                            value: true,
                            message: 'Obligatoriskt',
                        },
                        minLength: {
                            value: 10,
                            message: 'meddelandet är för kort',
                        },
                        maxLength: {
                            value: 350,
                            message: "meddelandet är för långt",
                        },
                    })} 
                    type="textarea" 
                    name="message" 
                    rows="4"/>
                    {errors.message ? (
                        <span className="text-capace-oranges">{errors.message.message}</span>
                    ) : null}
                </div>

                <button type="submit" name="submit" className="uppercase border-2 min-w-[103px] max-w-[133px] flex justify-center items-center text-center border-capace-oranges text-capace-oranges py-2 text-[14px] font-bold rounded-[20px] px-10 hover:bg-capace-oranges hover:text-capace-light transition ease-in-out duration-700">
                {isLoading && <span>Skickar...</span>}
                {!isLoading && <span>Skicka</span>}
                </button>
            </div>
        </form>
    </div> 
    );
}
 
export default Form;