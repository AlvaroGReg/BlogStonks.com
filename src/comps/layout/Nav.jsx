import {NavLink} from 'react-router-dom';
export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink href="/inicio">Inicio</NavLink></li>
        <li><NavLink href="/articulos">Articulos</NavLink></li>
        <li><NavLink href="/crear">Crear artículos</NavLink></li>
      </ul>
    </nav>
  )
}
