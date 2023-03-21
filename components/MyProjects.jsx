import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Flickity from 'react-flickity-component'

const carouselData = [
  {
    image: "filmers.jpg",
    title: "filmers",
    description: "Filmers es un proyecto diseñado por Pozas Creative y desarrollador por mi, es una página donde puedes encontrar los diferentes proyectos audiovisuales que ha llevado a cabo la empresa.",
    link: "https://www.filmers.mx/"
  },
  {
    image: "vallarta.jpg",
    title: "filmers",
    description: "Vallarta WKND es una empresa mexicana que ayuda a personas del extranjero a tener la mejor experiencia viajando por nuestro país. trabaje junto a esta compañía y creamos un diseño divertido y relajado donde se exponen todos los servicios asi como imagenes de los destinos.",
    link: "https://vallartawknd.com/"
  },
  {
    image: "humind.jpg",
    title: "filmers",
    description: "Humind.care es una página donde puedes encontrar recursos gratuitos sobre salud mental. Ayude a esta empresa a crear un espacio que apoye la marca y donde posibles clientes potenciales tengan la capacidad de contactarlos y encontrar la ayuda profesional que necesitan.",
    link: "https://www.humind.care/"
  },
  {
    image: "exam-social.jpg",
    title: "filmers",
    description: "Exam social es una red social donde los usuarios pueden crear y resolver exámenes y compartirlos con la comunidad, el objetivo de esta red es poder medir tu progreso de estudio y poder compartir los exámenes de la forma más fácil posible.",
    link: "https://exam-social.vercel.app/"
  }
]

const variants = {
  enter: (direction) => ({
    x: 300 * direction,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: -300 * direction,
    opacity: 0
  })
}

const CarouselItem = ({ image, description, link }) => (
  <motion.div className="grid sm:grid-cols-5 lg:grid-cols-2 items-center mb-8 gap-4 lg:gap-8 px-4 w-3/4 sm:w-full">
    <img src={image} className="rounded-xl sm:col-span-2 lg:col-span-1 h-60 sm:h-auto w-full object-cover"/>
    <div className="sm:col-span-3 lg:col-span-1">
      <p className="font-extralight sm:text-lg md:text-xl text-center sm:text-left">{description}</p>
      <div className="flex justify-center sm:justify-start">
        <a href={link} target="_blank" className="bg-theme-lime text-theme-dark px-6 py-4 rounded-full inline-block lg:mt-4">
          Ver proyecto
        </a>
      </div>
    </div>
  </motion.div>
)

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
}

const Carousel = ({ carouselData }) => {
  return(
    <div className="w-full md:max-w-lg lg:max-w-2xl mx-auto">
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {
          carouselData.map((item) => {
            return(
              <CarouselItem
                image={item.image}
                description={item.description}
                link={item.link}
              />  
            )
          })
        }
      </Flickity>
    </div>
  )
}

// const Carousel = ({ carouselData }) => {
//   const [[carouselPage, direction], setCarouselState] = useState([1, -1])

//   const nextCarouselItem = () => {
//     if (carouselPage === carouselData.length) {
//       setCarouselState([1, 1])
//     } else {
//       setCarouselState([carouselPage+1, 1])
//     }
//   }
//   const prevCarouselItem = () => {
//     if (carouselPage === 1) {
//       setCarouselState([carouselData.length, -1])
//     } else {
//       setCarouselState([carouselPage-1, -1])
//     }
//   }

//   const setCarouselPage = (page) => {
//     setCarouselState([page, 1])
//   }

//   const project = carouselData[carouselPage - 1]

//   return(
//     <div layout="position" className="grid grid-cols-8 md:gap-12 lg:px-36 items-center justify-center">
//       <div layout="position" onClick={prevCarouselItem} className="md:p-2 h-8 w-8 md:h-16 md:w-16 relative z-10 cursor-pointer flex justify-center items-center  mx-auto">
//         <svg layout="position"  className="fill-white rotate-180 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
//           <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
//         </svg>
//       </div>
//       <div layout className="col-span-6 overflow-hidden">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             layout="position"
//             key={carouselPage}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//                duration: 0.3 
//             }}
//             className="min-h-[600px] grid lg:grid-cols-2 lg:items-center gap-4 lg:gap-8 lg:min-h-[500px]"
//           >
//             <motion.img layout="position" src={project.image} className="rounded-xl h-60 lg:h-auto w-full object-cover"/>
//             <motion.div layout>
//               <motion.p layout className="font-extralight sm:text-lg md:text-xl text-center lg:text-left">{project.description}</motion.p>
//               <motion.div layout className="flex justify-center lg:justify-start">
//                 <a 
//                   href={project.link} 
//                   target="_blank"
//                   className="bg-theme-lime text-theme-dark px-6 py-4 rounded-full inline-block mb-8 lg:mt-4"
//                 >
//                   Ver proyecto
//                 </a>
//               </motion.div>
//             </motion.div>
//             <div></div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <div onClick={nextCarouselItem} className="md:p-2 h-8 w-8 md:h-16 md:w-16 relative z-10 mx-auto cursor-pointer flex justify-center items-center">
//         <svg  className="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
//           <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
//         </svg>
//       </div>
//       <motion.div layout="position" className="col-span-8 flex justify-center gap-4">
//         {
//           carouselData.map((item, index) => (
//             <motion.div 
//               layout="position"
//               onClick={() => setCarouselPage(index + 1)}
//               className={`w-4 h-4 rounded-full bg-white duration-150 cursor-pointer ${carouselPage !== index+1 && 'bg-opacity-30'} `} 
//             />
//           ))
//         }
//       </motion.div>
//     </div>
//   )
// }

export const MyProjects = () => {
  return (
    <div layout className="bg-theme-dark text-white py-12 lg:py-28 px-4 sm:px-8 md:px-16 lg:px-8 xl:px-24">
      <div layout className="max-w-7xl mx-auto pt-8">
        <h2 layout className="font-bold text-[40px] sm:text-5xl lg:text-[56px] xl:text-[60px] lg:leading-[56px] max-w-2xl leading-none">
          ¡El éxito de mis clientes es mi éxito!
        </h2>
        <p layout="position" className="font-extralight text-xl lg:text-[32px] xl:text-[36px] leading-snug lg:leading-none mt-4">
          Me enorgullece mostrar mi portfolio, lleno 
          de proyectos que he creado para empresas de 
          diferentes industrias. Desde sitios web de 
          comercio electrónico hasta páginas de destino 
          y sitios web corporativos, diseños que están 
          a la vanguardia de la innovación y el estilo.
        </p>
        <h3 layout className="font-bold text-[40px] sm:text-5xl lg:text-[56px] xl:text-[60px] lg:leading-[56px] text-center my-8 md:my-16">Proyectos</h3>
        <Carousel carouselData={carouselData} />
      </div>

    </div>
  )
}