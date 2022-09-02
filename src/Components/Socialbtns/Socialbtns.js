import style from './Socialbtns.module.css'

const Socialbtns = () => {
  return (
    <div className={style.socialbtns}>
      <a href="https://twitter.com/ayush_dhingra_" target="_blank" rel="noreferrer">
        <img src={require("../../assets/images/twitter.png")} alt="twitter" />
      </a>
      <a href="https://linkedin.com/in/ayush-dhingra/" target="_blank" rel="noreferrer">
        <img src={require("../../assets/images/linkedin.png")} alt="twitter" />
      </a>
      <a href="https://github.com/adayush" target="_blank" rel="noreferrer">
        <img src={require("../../assets/images/github.png")} alt="twitter" />
      </a>
      <a href="https://instagram.com/ayush.dhingra/" target="_blank" rel="noreferrer">
        <img src={require("../../assets/images/instagram.png")} alt="twitter" />
      </a>
    </div>
  )
}

export default Socialbtns;
