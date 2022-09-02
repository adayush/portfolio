import Socialbtns from "../Socialbtns/Socialbtns"
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.section}>
        <p>Made by Ayush Dhingra</p>
        <Socialbtns />
      </div>
    </footer>
  )
}

export default Footer;
