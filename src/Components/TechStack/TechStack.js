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
        <h3>Tools and technologies I've used</h3>
        <br />
        <p>Lorem ipsum dolors set amit lorem ipsdsffm dolor set oosdfem ipsum dolor setsd amit</p>
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