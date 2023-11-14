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
        className= "bg-tertiary p-5 rounded-2xl sm:w[300px] lg:w-2/4 md:w-3/4">
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name}
            className=" h-full object-contain rounded-2xl"/>
            <div className="absolute inset-0 flex justify-end m-3 img_hover">
              <div
              onClick={() => {
                window.open(source_code_Link, "_blank")
              }}
              className="black-gradient w-10 h-10
              rounded-full flex justify-center
              items-center cursor pointer">
                <img src={github}
                  alt={github}
                  className="w-10 h-10
                  object-contain"
                />
              </div>
            </div>
        </div> 
        {/* Description of the project goes here */}
        <div className="mt-5 ">
            <h3 className="text-slate-50 font-bold
            text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary
            text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p kay={tag.name}
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
        </div>
        </Tilt>
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