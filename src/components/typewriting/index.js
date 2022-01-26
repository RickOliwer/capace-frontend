import { useTyping } from "./useTyping";




const typing = ['ideas', 'brand', 'design', 'code']

const RCTypeWriting = () => {
    const myTyping = useTyping(typing)

    return (
        <span>{myTyping}</span>
    );
}
 
export default RCTypeWriting;