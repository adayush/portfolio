import style from './Nav.module.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className={`${style.header} ${style.section}`}>
      <div className={style.logo}>
        <Link to='/' className={style.link}>
          HOME
        </Link>
      </div>
      <div className={style.navlink_container}>
        <NavLink to='/projects' className={style.link}>
          PROJECTS
        </NavLink>
        <NavLink to='/about' className={style.link}>
          ABOUT ME
        </NavLink>
        <NavLink to='/contact' className={style.link}>
          CONTACT
        </NavLink>
      </div>
    </header>
  )
}

export default Nav;
