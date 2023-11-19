import { useState } from 'react'
import CloseIcon from './Icons/CloseIcon'
import ListIcon from './Icons/ListIcon'
import NavItem from './NavItem'

const navbarListItems = [
  'Aperturar Cuenta',
  'Tarjetas de crédito',
  'Prestamos',
  'Ahorro',
  'Inversiones',
  'Nómina',
  'Hipotecas',
  'Seguros',
  'Contacto'
]

function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)
  return (
    <header className='absolute z-50 top-0 left-0 w-full h-24 flex md:px-20 bg-gray-900'>
      <div className='absolute z-50 top-0 left-0 w-full h-24 flex bg-gray-900'>
        <div className='h-full flex flex-col justify-center items-center px-10'>
          <span className='text-4xl font-bold tracking-widest mb-1'>Bank</span>
          <span className='w-24 h-1 bg-white'></span>
        </div>
        <div className='h-full flex md:hidden justify-end items-center absolute top-0 right-0'>
          <button
            className={`${
              navbarIsOpen ? 'hidden' : 'block'
            } flex md:block place-items-center gap-1 text-xl`}
            type='button'
            onClick={() => setNavbarIsOpen(true)}
          >
            Menu
            <ListIcon />
          </button>
          <button
            className={`${
              navbarIsOpen ? 'block' : 'hidden'
            } flex place-items-center gap-1 text-xl`}
            type='button'
            onClick={() => setNavbarIsOpen(false)}
          >
            Cerrar
            <CloseIcon />
          </button>
        </div>
      </div>

      <section
        className={`bg-gray-800 absolute z-20 top-0 left-0 right-0 w-full h-screen transition-transform duration-300 ease-linear pt-24 ${
          navbarIsOpen
            ? 'translate-y-0'
            : 'duration-500 delay-300 -translate-y-full'
        }`}
      >
        <nav
          className={`${
            navbarIsOpen
              ? 'block'
              : 'animate-[hidden_1s_ease-in-out_forwards] md:block'
          }`}
        >
          <ul className='flex flex-col justify-start items-start pt-4'>
            {navbarListItems.map((item) => (
              <NavItem key={item} onNavbarIsOpen={navbarIsOpen}>
                {item}
              </NavItem>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Navbar
