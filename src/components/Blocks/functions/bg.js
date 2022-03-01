import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const BackgroundColor = ({bg, color}) => {
    const [ref, inView] = useInView({
        threshold: .2,
    })
    useEffect(() => {
        if(inView){

            document.body.style.setProperty('background-color', bg, 'important'),
            document.body.style.setProperty('color', color, 'important')
        }
    })
    return (
        <div ref={ref}></div>
    )
}
