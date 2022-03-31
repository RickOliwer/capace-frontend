import { useEffect, useState } from "react"

export const Phase = {
     Typing: "Typing",
     Pausing: "Pausing",
     Deleting: "Deleting"
}

const TYPING_INTERVAL = 150
const PAUSE_MS = 1000
const DELETING_INTERVAL = 50
/**
 * logic for typewriting 
 * @param {*} texts 
 * @returns typed
 */
export const useTyping = (texts) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(Phase.Typing)
    const [typed, setTyped] = useState('')

    useEffect(() => {
        switch (phase) {
            case Phase.Typing: {
                const nextTyped = texts[selectedIndex].slice(
                    0,
                    typed.length + 1
                )
        
                if(nextTyped == typed) {
                    setPhase(Phase.Pausing)
                    return
                }
        
                const timeout = setTimeout(() => {
                    setTyped(
                        nextTyped
                    )
                }, TYPING_INTERVAL)
                return () => clearTimeout(timeout)

            }
            case Phase.Deleting: {
                if(!typed) {
                    const nextIndex = selectedIndex + 1
                    setSelectedIndex(texts[nextIndex] ? nextIndex : 0)
                    setPhase(Phase.Typing)
                    return
                }
                const nextRemaining = texts[selectedIndex].slice(
                    0,
                    typed.length - 1
                )
        
        
                const timeout = setTimeout(() => {
                    setTyped(
                        nextRemaining
                    )
                }, DELETING_INTERVAL)
                return () => clearTimeout(timeout)

            }
            case Phase.Pausing:
            default:
                const timeout = setTimeout(() =>{
                    setPhase(Phase.Deleting)
                }, PAUSE_MS)
                return () => clearTimeout(timeout)
        }
        


    }, [texts, typed, phase, selectedIndex])

    return typed
}
 
