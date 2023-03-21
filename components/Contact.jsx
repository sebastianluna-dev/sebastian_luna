import { motion } from "framer-motion"
export const Contact = () => {
  return (
    <motion.div layout className="bg-theme-lavender py-28 relative px-4 sm:px-8 md:px-16 lg:px-8 xl:px-24">
      <div className=" max-w-2xl lg:max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10 items-center">
        <div className="text-white lg:text-theme-pink leading-none">
          <h2 className="font-bold text-[40px] sm:text-5xl lg:text-[56px] xl:text-[60px] lg:leading-[56px] text-center">
            Contáctame
          </h2>
          <p className="font-extralight text-xl lg:text-[32px] xl:text-[36px] lg:max-w-lg leading-snug lg:leading-none mt-4 text-center">
            ¡Estoy ansioso por trabajar contigo! Si deseas discutir 
            un proyecto o tienes alguna pregunta sobre mi servicios, 
            por favor contáctame. Me encantaría ayudarte a dar vida a 
            tu visión digital.
          </p>
        </div>
        <div className="max-w-md mx-auto w-full">
          <label className="mb-1 hidden">Name:</label>
          <div className="border-2 bg-white border-white p-2 rounded-md mb-3">
            <input type="text" className="w-full bg-transparent focus:outline-none" placeholder="Nombre"/>
          </div>
          <label className="mb-1 hidden">Email:</label>
          <div className="border-2 bg-white border-white p-2 rounded-md mb-3">
            <input type="text" className="w-full bg-transparent focus:outline-none" placeholder="Email"/>
          </div>
          <label className="mb-1 hidden">Message:</label>
          <div className="border-2 bg-white border-white p-2 rounded-md">
            <textarea className="w-full bg-transparent focus:outline-none h-32" placeholder="Message"/>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-theme-lavender py-4 px-6 rounded-full text-lg font-medium text-white">
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-2/3 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 957 902"
          className=" h-full min-w-full"
        >
          <path
            fill="#02ACC4"
            d="M427 300C444.6 136 559.167 31.333 613 0h344v902H.75c48-35 83.25-104 98.75-152S156 625.5 235 570.5 405 505 427 300z"
          ></path>
        </svg>
      </div>
      <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/5 2xl:w-1/4 bg-theme-cyan">

      </div>
    </motion.div>
  )
}