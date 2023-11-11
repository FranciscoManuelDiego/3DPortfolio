import {BallCanvas} from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap
    justify-center gap-8">
      {technologies.map((technolgy)=> (
        <div key={technolgy.name}
        className="lg:w-28 lg:h-28 md:w-24 md:h-24">
          <BallCanvas icon={technolgy.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech , "Tech")