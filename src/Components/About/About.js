import style from './About.module.css'

const About = () => {
  return (
    <div id="About" className={`${style.section} section`}>
      <div className={style.container}>
        <h2>🙋🏻‍♂️ About Me</h2>
        <div className={style.colcontainer}>
          <div className={style.col}>
            <h4>Hello again! 👋🏻<br />My name is Ayush Dhingra</h4>
            <br />
            <p>Currently a final-year undergrad at Rajasthan Technical University. I love to tinker with code.</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br />
            <p><i>Always looking for opportunities to learn and build interesting stuff.</i></p>
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
