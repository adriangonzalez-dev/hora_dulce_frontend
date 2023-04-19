import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 relative bottom-0">
        <div>
            <Link to='/'>
                <img src={logo} alt="logo" loading='lazy' className='w-10 h-10'/>
            </Link>
            <p className="font-bold">
                La Hora Dulce
            </p> 
            <p>Copyright © 2023</p>
            <p>Creado por <a href='https://adriangonzalez.tech' target='_blank' className='font-semibold'>Adrian Gonzalez Web</a></p>
        </div>
        <span className='fixed bg-social-300 right-4 bottom-4 w-10 h-10 text-white rounded-full text-2xl'>
            {/* floating button for whatsapp */}
            <a 
            href="https://wa.me/5491131234567" 
            target="_blank" 
            rel="noreferrer" >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </span> 
    </footer>
  )
}
