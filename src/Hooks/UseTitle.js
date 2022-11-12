import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title = `${title} - Artihc-Photography`
    },[title])
}

export default useTitleHook;