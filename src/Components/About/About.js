import style from './About.module.css'

const About = () => {
  return (
    <div id="About" className={`${style.section} section`}>
      <div className={style.container}>
        <h2>About Me</h2>
        <div className={style.colcontainer}>
          <div className={style.col}>
            <h4>My name is Ayush Dhingra</h4>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <button>Resume</button>
          </div>
          <div className={style.col}>
            <img src={require("../../assets/images/ayush.png")} alt="Ayush Dhingra" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
