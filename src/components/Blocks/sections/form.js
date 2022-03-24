import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import isEmpty from "lodash.isempty";

const Form = ({title}) => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const [isSubmitted, setSubmitted] = useState(false)

    async function onSubmitForm(values){
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
                setSubmitted(true)
                reset()
                
            }
        } catch (error) {
            console.log(error);
        }
        
    }


    return (
        <div className="contain">
        <h3 className="text-2xl">Vill du veta mer om <span className="text-capace-oranges">{title}?</span></h3>
        <p>Fyll formuläret nedan så kontaktar vi dig.</p>
        
        <form onSubmit={handleSubmit(onSubmitForm)} className="grid gap-3 my-10">
            {isSubmitted && isEmpty(errors) ? (
                <div className="w-full px-6 py-4 my-4 text-xl opacity-50 bg-capace-oranges text-capace-light">Meddelande har skickats</div>
            ) : null}
            <input 
                type="text" 
                defaultValue={title} 
                name="service" 
                hidden
                {...register("service", {
                    required: "Required",
                })}  />
            <div className="grid grid-cols-2 gap-3">

                <div>
                    <label htmlFor="name">Namn</label>
                    <input 
                    className="block w-full px-4 py-3 my-3 placeholder-gray-500 shadow focus:ring-capace-oranges focus:border-capace-oranges focus:outline-none focus:ring-2"
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
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input className="block w-full px-4 py-3 my-3 placeholder-gray-500 shadow focus:ring-capace-oranges focus:border-capace-oranges focus:outline-none focus:ring-2"
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
                    <label htmlFor="phone">Telefon</label>
                    <input className="block w-full px-4 py-3 my-3 placeholder-gray-500 shadow focus:ring-capace-oranges focus:border-capace-oranges focus:outline-none focus:ring-2"
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
                    <label htmlFor="message">Lämna ett valfritt meddelande</label>
                    <textarea className="block w-full px-4 py-3 my-3 placeholder-gray-500 shadow focus:ring-capace-oranges focus:border-capace-oranges focus:outline-none focus:ring-2"
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

                <input type="submit" name="submit" value="skicka" className="uppercase capace-button" />
            </div>
        </form>
    </div> 
    );
}
 
export default Form;