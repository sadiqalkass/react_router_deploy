import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const handleRsize = () =>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    handleRsize()

    window.addEventListener('resize', handleRsize)
    return () =>   window.removeEventListener('resize', handleRsize);
  },[])

  return windowSize
}

export default useWindowSize
