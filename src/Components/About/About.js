import style from './About.module.css'

const About = () => {
  return (
    <div id="About" className={`${style.section} section`}>
      <div className={style.container}>
        <h2>🙋🏻‍♂️ About Me</h2>
        <div className={style.colcontainer}>
          <div className={style.col}>
            <h4>Hello again! <span className={style.wave}>👋🏻</span><br />My name is Ayush Dhingra</h4>
            <br />
            <p>Currently a final-year undergrad at Rajasthan Technical University. I love to tinker with code.</p>
            <br />
            <p>
              I have been building websites since 8th grade (made one as a science project lol). Started out as a wordpress developer and I'm still a no-code freelancer on the side. I have made lots using Notion and WordPress and making more using React now.
              I also play billiards so hit me up for a frame!
            </p>
            <br />
            <p><i>Always looking for opportunities to learn and build interesting stuff.</i></p>
            <br />
            <a href='https://drive.google.com/file/d/12sAqtcigRGFRmw31tdFWUqaWR1687NJ3/view?usp=sharing' target="_blank" rel="noreferrer"><button>📄 My resume</button></a>
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
