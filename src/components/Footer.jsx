import React from 'react'
import {Link} from 'react-router-dom'
import'../css/footer.css'

const Footer = () => {
  return (

<div className="container">
  <div className="contact-info">
    <p><strong>MegaMuebles</strong></p>
    <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
    <p>Teléfono: +123 456 7890</p>
    <p>Email: contacto@megamuebles.com</p>
  </div>
  <div className="social-links">
    <Link to="https://www.facebook.com/MegaMuebles" target="_blank" title="Facebook">📘</Link>
    <Link to="https://twitter.com/MegaMuebles" target="_blank" title="Twitter">🐦</Link>
    <Link to="https://www.instagram.com/MegaMuebles" target="_blank" title="Instagram">📸</Link>
    <Link to="https://www.linkedin.com/company/megamuebles" target="_blank" title="LinkedIn">🔗</Link>
  </div>
  <div className="links">
    <Link to="#">Política de Privacidad</Link>
    <Link to="#">Términos y Condiciones</Link>
    <Link to="#">Devoluciones</Link>
    <Link to="#">Envíos</Link>
  </div>
  <div className="copyright">
    <p>© 2024 MegaMuebles. Todos los derechos reservados.</p>
  </div>
</div>


  )
}

export default Footer