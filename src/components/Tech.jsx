// import {BallCanvas} from "./canvas"
import {Icons} from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap
    justify-center gap-8">
      {technologies.map((technolgy)=> (
        <div key={technolgy.name}
        className="lg:w-24 lg:h-24 md:w-20 md:h-20">
          <Icons icon={technolgy.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech , "Tech")