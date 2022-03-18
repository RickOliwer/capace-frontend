import isEmpty from "lodash.isempty"
import { useEffect } from "react"

export const useBgBlack = (bgBlack) => {
    const handleScroll = (ref) => {
        if(window.scrollY >= ref?.current?.offsetTop - 200 && !(window.scrollY >= ref?.current?.offsetHeight + ref?.current?.offsetTop - 200)){
            return (

                document.body.style.setProperty('background-color', '#191919', 'important'),
                document.body.style.setProperty('color', '#fff', 'important')
            )

        }else{
             document.body.style.backgroundColor = ""
             document.body.style.color = ""
        }
    }

    useEffect(() => {

        if(bgBlack && bgBlack.current && bgBlack.current.offsetTop) {
            window.addEventListener('scroll', () =>handleScroll(bgBlack))
            }
        return () => removeEventListener('scroll', handleScroll)
        
    }, [bgBlack])
}
