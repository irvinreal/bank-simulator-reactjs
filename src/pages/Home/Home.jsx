import { useState } from 'react'
import BackgroundImage from '../../components/BackgroundImage'
import Navbar from '../../components/Navbar/Navbar'

const backgroundImage =
  'https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const altBackgroundImage = 'Dos personas abrazadas contemplado un gran paisaje'

function Home() {
  const [formEntrarIsOpen, setFormEntrarIsOpen] = useState(false)

  const handleOpenFormButton = () => {
    setFormEntrarIsOpen(true)
  }
  return (
    <section className='w-full h-full flex flex-col justify-center items-center'>
      <Navbar />
      <BackgroundImage src={backgroundImage} alt={altBackgroundImage} />
      <div className='w-full h-[40vh] flex justify-center items-end'>
        <h1
          className={`font-bold tracking-wider text-3xl md:text-6xl drop-shadow-[0_2px_3px_#000000C2] transition-transform duration-100 ease-linear ${
            formEntrarIsOpen ? 'duration-1000 top-5' : ''
          }`}
        >
          <span className='block'>Bienvenido</span> a tu Banco en Línea
        </h1>
      </div>

      <div className='py-4 w-full max-w-[90%] h-[60vh] '>
        <button
          className={`w-[70%] tracking-wider ${
            formEntrarIsOpen
              ? 'animate-[desapear_.6s_ease-in-out_forwards]'
              : 'animate-none'
          }`}
          onClick={handleOpenFormButton}
        >
          Entrar a mi cuenta
        </button>
        <form
          className={` bg-slate-100/70 h-[50vh] rounded-2xl delay-1000 ${
            formEntrarIsOpen
              ? 'animate-[apear_.9s_ease-in-out_forwards]'
              : 'animate-none hidden'
          } px-4`}
        >
          <h2 className='ps-10 text-start text-xl text-gray-800 font-semibold py-4 pt-10'>
            Mi cuenta
          </h2>
          <input
            className='h-12 w-full mt-4 px-2'
            placeholder='Ingrese su correo de registro'
          />
          <input
            className='h-12 w-full mt-6 px-2'
            placeholder='Ingrese su contraseña'
          />
          <button className='h-12 mt-4 text-gray-500' type='submit'>
            Ingresar
          </button>
        </form>
      </div>
      <a></a>
    </section>
  )
}

export default Home
