import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"
import {fadeIn, textVariant} from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_Link}) => {
  return(
    <motion.div variants={fadeIn("left", "spring",
    index * 0.5, 0.75)} >
      <Tilt
        options={{
          max: 45,
          scale: 1, 
          speed: 420
        }} 
        className= "bg-tertiary p-5 rounded-2xl sm:w[300px] w-full"/>
    </motion.div>
  )
}

const ProjectsDone = () => {
  return (
    <>
    <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
      <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-3 text-secondary text-[18px]
        max-w-3xl leading-[30px]">
        The following projects display my experience and skills through brief examples.
        Each project provided is briefly described with links to code repositories. In addition,
        each project shows my abilities with different technologies.
        </motion.p>
      </div>
      <div className="mt-20 flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key ={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(ProjectsDone, "ProjectsDone")