import { GithubIcon, InstagramIcon, LinkedInIcon } from "./Icons"

export const  Hero = () => {
  return (
    <div className="bg-theme-green pt-12 lg:pt-28 relative px-4 sm:px-8 md:px-16 lg:px-8 xl:px-24">
      <div className=" max-w-2xl lg:max-w-7xl mx-auto grid lg:grid-cols-2 relative z-10">
        <div className="text-theme-lime leading-none">
          <h1 className="font-extrabold text-[40px] sm:text-5xl lg:text-7xl xl:text-[80px]">
            Diseñador y desarrollador web senior 
          </h1>
          <h2 className="font-light text-xl lg:text-[40px] leading-snug lg:leading-none">
            ¿Necesitas una página web o tienes un proyecto? Contactame.
          </h2>
          <div className="flex mt-8">
            <a href="/cv.pdf" target="_blank" className="bg-theme-lime px-8 py-4 font-medium text-theme-dark rounded-full text-xl cursor-pointer">
              DESCARGA MI CV
            </a>
          </div>
        </div>
        <div className="relative">
          <img className="w-full max-w-lg justify-self-center lg:justify-self-start" src="/hero-image.png" alt="Sebastian Luna" />
          <div className="flex gap-4 justify-center absolute bottom-24 left-0 right-0">
            <a className="w-16 h-16 p-2 rounded-full bg-theme-lime flex justify-center items-center cursor-pointer">
              <InstagramIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sebasti%C3%A1n-luna-b2ab24263/" target="_blank" className="w-16 h-16 p-2 rounded-full bg-theme-lime flex justify-center items-center">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/sebastianluna-dev" target="_blank" className="w-16 h-16 p-2 rounded-full bg-theme-lime flex justify-center items-center">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-4/5 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 957 902"
          className=" h-full min-w-full"
        >
          <path
            fill="#1E2330"
            d="M427 300C444.6 136 559.167 31.333 613 0h344v902H.75c48-35 83.25-104 98.75-152S156 625.5 235 570.5 405 505 427 300z"
          ></path>
        </svg>
      </div>
      <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/5 2xl:w-1/4 bg-theme-dark">

      </div>
    </div>
  )
}