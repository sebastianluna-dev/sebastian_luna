import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const Animation = () => {
  const [animation, setAnimation] = useState(1)
  // useEffect(() => {
  //   const interval = setInterval(changeAnimation, 4000)
  //   return () => { clearInterval(interval) }
  // }, [animation]);

  // const changeAnimation = () => {
  //   if (animation === 1) { setAnimation(2) }
  //   if (animation === 2) { setAnimation(1) }
  //   // if (animation === 3) { setAnimation(1) }
  // }
  return (
    <>
      <AnimatePresence>
        {
          animation === 1 &&
          <div className="flex xl:-mr-24 py-12 lg:py-0">
            <motion.img  className=" mx-auto h-40 sm:h-80 lg:h-60 xl:h-80 -mr-12 relative self-center" src="/animation-2.png" />
            <img
              className="max-w-[200px] lg:max-w-[250px] xl:max-w-[350px] sm:max-w-xs md:max-w-sm mx-auto object-contain" 
              src="/animation-1.png" 
            />
            <img className="mx-auto h-32 sm:h-60 lg:h-44 xl:h-60 -ml-24" src="/animation-3.png" />
          </div>
        }
        {
          animation === 2 &&
          <div className="grid max-w-sm items-center mx-auto">
            <img className=" rounded-2xl h-full object-cover" style={{gridArea: "1/1/2/2"}} src="/animation-4.png"/>
            <div style={{gridArea: "1/1/2/2"}} className="p-8">
              <img 
                className="mx-auto w-24 h-24 rounded-full object-cover" 
                src="/animation-1.png" 
              />
              <div className="text-center mt-8">
                <a className="block bg-theme-lime px-8 py-4 font-medium text-theme-dark rounded-full text-xl cursor-pointer">
                  Accesorios
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-xl mt-8">
                <div style={{ backgroundColor: "#E5DED0"}} className="h-40 flex justify-center items-center p-2 rounded-xl">
                  <motion.img className="h-full" src="animation-2.png"/>
                </div>
                <div style={{ backgroundColor: "#E5DED0"}} className="h-40 flex justify-center items-center p-2 rounded-xl">
                  <img className="h-full" src="animation-2.png"/>
                </div>
                <div style={{ backgroundColor: "#E5DED0"}} className="h-40 flex justify-center items-center p-2 rounded-xl">
                  <img className="h-full object-contain" src="animation-3.png"/>
                </div>
                <div style={{ backgroundColor: "#E5DED0"}} className="h-40 flex justify-center items-center p-2 rounded-xl">
                  <img className="h-full" src="animation-2.png"/>
                </div>
                <a className=" text-center col-span-2 bg-theme-lime px-8 py-4 font-medium text-theme-dark rounded-full text-xl cursor-pointer">
                  Accesorios
                </a>
              </div>
            </div>
          </div>
        }
      </AnimatePresence>
    </>
  )
}