import Socialbtns from '../Socialbtns/Socialbtns'
import style from './Home.module.css'

const Home = () => {
  return (
    <main className={`${style.section} section`}>
      <div className={style.container}>
        <div className={style.col}>
          <div>
            <h1>Hi, I am</h1>
            <h1>Ayush Dhingra</h1>
          </div>
          <p>
            I'm a final-year undergrad who's passionate about tech.
            Skilled in React.js, Python, ML, Data Structures and SQL.<br />
            Also No-code freelancer on the side (Notion, WordPress).
          </p>
          <button><img src={require("../../assets/images/mail.png")} alt="mail icon" /> adayush0@gmail.com</button>
          <Socialbtns />
        </div>
        <div className={style.col}>
          <img src={require('../../assets/images/man_using_laptop.png')} alt="Man using laptop" />
        </div>
      </div>
    </main>
  )
}

export default Home;
