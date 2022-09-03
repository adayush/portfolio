import style from './TechStack.module.css'
import { techstack } from "../../assets/techstack"

const Domain = ({ name, tiles }) => {
  return (
    <div className={style.domain}>
      <h4>{name}</h4>
      <div className={style.tiles}>
        {/* map tiles of each domain */}
        {tiles.map((tile, i) => (
          <div className={style.tile} key={i}>
            <img src={require(`../../assets/images/${tile.icon}`)} alt={tile.name} />
            <p>{tile.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const TechStack = () => {
  //console.log(techstack)
  return (
    <div className={`${style.section} section`}>
      <div className={style.container}>
        <h3>🛠 Tools and technologies that I use</h3>
        <br />
        <p>Always eager to expand my toolbox and learn something new 💪</p>
        <div className={style.techstack}>
          <Domain name="Web" tiles={techstack.web} />
          <br />
          <Domain name="Machine Learning" tiles={techstack.ml} />
          <br />
          <Domain name="Other" tiles={techstack.other} />
        </div>
      </div>
    </div>
  )
}

export default TechStack;