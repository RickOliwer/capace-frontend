import { useEffect } from "react"

export const useBgBlack = (bgBlack) => {
    const handleScroll = (ref) => {
        if(window.scrollY >= ref?.current?.offsetTop - 200 && !(window.scrollY >= ref?.current?.offsetHeight + ref?.current?.offsetTop - 200)){
            document.body.style.transition = "all ease-in .2s"
            document.body.style.backgroundColor = "#191919"
            document.body.style.color = "white"
        }else {
            document.body.style.backgroundColor = ""
            document.body.style.color = ""
        }
    }

    useEffect(() => {
        //console.log('bgBlack',bgBlack);
        if(bgBlack && bgBlack.current && bgBlack.current.offsetTop) {
            window.addEventListener('scroll', () =>handleScroll(bgBlack))
            }
        return () => removeEventListener('scroll', handleScroll)
        
    }, [bgBlack])
}
