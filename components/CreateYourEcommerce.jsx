import { Animation } from "./Animation"
export const CreateYourEcommerce = () => {
  return (
    <div className="bg-theme-light py-12 lg:py-28 text-theme-dark px-4 sm:px-8 md:px-16 lg:px-8 xl:px-24 ">
      <div className=" max-w-7xl mx-auto grid lg:grid-cols-2">
        <div className="leading-none">
          <h1 className="font-bold text-[40px] sm:text-5xl lg:text-[56px] xl:text-[60px] lg:leading-[56px]">
            ¿Has soñado con tener una tienda en línea que refleje perfectamente la visión de tu negocio? 
          </h1>
          <h2 className="font-extralight text-xl lg:text-[32px] xl:text-[36px] max-w-lg leading-snug lg:leading-none mt-4">
            Ahora puedes hacerlo realidad. Creemos juntos una tienda en línea personalizada que cumpla con tus necesidades y te ayude a alcanzar tus objetivos comerciales en línea. 
          </h2>
        </div>
        <div>
          <Animation />
          <p className="font-extralight text-xl lg:text-[32px] xl:text-[36px] max-w-lg leading-snug lg:leading-none mt-4 lg:mt-16 lg:text-right">
            ¡Haz realidad tu sueño de tener una tienda en línea impresionante y funcional hoy mismo!
          </p>
        </div>
      </div>

    </div>
  )
}