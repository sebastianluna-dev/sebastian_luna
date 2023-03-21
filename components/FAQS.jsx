import { useState } from "react"
import { LayoutGroup, motion } from "framer-motion"

const QuestionsData = [
  {
    question: "¿Qué tipo de sitios web puedo obtener con tu servicio?",
    answer: "Ofrezco una amplia variedad de servicios de diseño y desarrollo web, desde sitios web corporativos hasta sitios web de comercio electrónico y páginas de destino. Cada sitio web que creo se personaliza según las necesidades de mis clientes para asegurarme de que refleje su visión única."
  },
  {
    question: "¿Cómo trabajas con los clientes para diseñar su sitio web?",
    answer: "Trabajo estrechamente con cada cliente para asegurarme de que comprenda sus necesidades y visión para su sitio web. Utilizo una variedad de herramientas y recursos para ayudar a los clientes a visualizar y diseñar su sitio web. Además, proporciono actualizaciones regulares y retroalimentación durante todo el proceso de diseño y desarrollo."
  },
  {
    question: "¿Cuánto tiempo lleva construir un sitio web?",
    answer: "El tiempo que lleva construir un sitio web depende de la complejidad y la cantidad de páginas que requiere el sitio web. Una vez que entiendo las necesidades y visión del cliente para su sitio web, puedo proporcionar un cronograma más preciso."
  },
  {
    question: "¿Qué tan importante es el SEO en mi sitio web?",
    answer: "El SEO (Search Engine Optimization) es esencial para el éxito en línea de cualquier negocio. Siempre me aseguro de que cada sitio web que cree esté diseñado con las mejores prácticas de SEO, lo que ayudará a aumentar la visibilidad y el tráfico del sitio web."
  },
  {
    question: "¿Ofreces servicios de mantenimiento y actualización de sitios web?",
    answer: "Sí, ofrezco servicios de mantenimiento y actualización de sitios web para asegurarme de que cada sitio web que cree siga siendo funcional y relevante con el tiempo. Ofrezco diferentes opciones de mantenimiento, desde actualizaciones de contenido hasta solución de problemas técnicos."
  }
]

const Question = ({ question, answer}) => {
  const [questionState, setQuestionState] = useState(false)

  const toggleQuestion = () => setQuestionState(!questionState)
  return(
    <motion.div 
      layout
      onClick={toggleQuestion}
      className="bg-black bg-opacity-30 p-8 lg:p-12 mb-8 rounded-2xl lg:rounded-3xl font-light cursor-pointer"
    >
      <motion.h4 layout="position" className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold"> {question}</motion.h4>
      {questionState && 
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl"
          layout="position" 
          initial={{opacity: 0}} 
          animate={{opacity:1}}
        > 
          {answer}
        </motion.p>}
      
    </motion.div>
  )
}

export const FAQS = () => {
  return(
    <motion.div layout className="min-h-screen bg-theme-maroon text-theme-pink py-12 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-8 xl:px-24">
      <div>
        <motion.h3 layout="position" className="leading-none font-bold text-[40px] sm:text-5xl lg:text-[56px] xl:text-[60px] lg:leading-[56px] text-center my-16">
          Preguntas <br/>frecuentes
        </motion.h3>
        <LayoutGroup>
          {
            QuestionsData.map((question, index) => {
              return (
                <Question 
                  key={index}
                  question={question.question} 
                  answer={question.answer}
                />
              )
            })
          }
        </LayoutGroup>
      </div>
    </motion.div>
  )
}