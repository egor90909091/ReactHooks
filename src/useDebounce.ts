import { useRef } from "react"

export const useDebounce = () => {
    const timer = useRef<number | null>(null)
    const debounceHandler=(callback:()=>void)=>
    {
        if(timer.current){
            clearTimeout(timer.current)
            timer.current = null
        }
        timer.current = setTimeout(() => {
            callback()
        },1000)
    }
    
    return debounceHandler
}