import style from './Nav.module.css'

const Nav = () => {
  return (
    <header id="Home" className={`${style.header} section`}>
      <div className={style.logo}>
        <div className={style.link}>
          <a href='#Home'>HOME</a>
        </div>
      </div>
      <div className={style.link_container}>
        <div className={style.link}>
          <a href='#Projects'>PROJECTS</a>
        </div>
        <div className={style.link}>
          <a href='#About'>ABOUT ME</a>
        </div>
        <div className={style.link}>
          <a href='#Contact'>CONTACT</a>
        </div>
      </div>
    </header>
  )
}

export default Nav;
