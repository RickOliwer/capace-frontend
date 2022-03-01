import isEmpty from "lodash.isempty"
import { useEffect } from "react"

export const useBgOranges = (bgOranges) => {
    const handleScroll = (ref) => {
        if(window.scrollY >= ref?.current?.offsetTop - 200 && !(window.scrollY >= ref?.current?.offsetHeight + ref?.current?.offsetTop - 200)){

            console.log('hello oranges');
            return (

                document.body.style.setProperty('background-color', '#FF752E', 'important'),
                document.body.style.setProperty('color', '#fff', 'important')
            )
        } else {
            document.body.style.backgroundColor = ""
            document.body.style.color = ""
        }
    }

    useEffect(() => {
        //console.log('bgOranges',bgOranges);
        if(bgOranges && bgOranges.current && bgOranges.current.offsetTop) {
            window.addEventListener('scroll', () =>handleScroll(bgOranges))
            }
        return () => removeEventListener('scroll', handleScroll)
        
    }, [bgOranges])
}
