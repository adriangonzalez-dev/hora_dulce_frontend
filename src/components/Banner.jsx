import letters from '../assets/images/letras.png'
import { ButtonLink } from './ButtonLink'

export const Banner = () => {
  return (
      <section
          className="overflow-hidden bg-gradient-to-b from-primary-200 to-primary-300 w-full"
      >
              <div className="text-center p-4 flex flex-col items-center justify-between">
                  <img src={letters} alt="banner_letters" loading='lazy' className='m-auto '/>

                  <p
                      className="hidden text-center md:block text-md font-semibold text-primary-100 mt-4 w-4/5"
                  >
                      ¿Quieres deleitarte con los postres más deliciosos y personalizados? ¡Visítanos ahora y ordena tus pasteles y dulces favoritos! Te aseguramos sabores únicos y frescos, con opciones para todos los gustos y necesidades. ¡Hace tu pedido ahora y sorprende a tus seres queridos con lo mejor de la repostería!
                  </p>

              <div className="mt-8 ">
                  
                <ButtonLink content='Ver Productos!'/>
              </div>
              </div>

      </section>

  )
}
