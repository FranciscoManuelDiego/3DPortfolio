import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"
import {fadeIn, textVariant} from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {
  return(

    <motion.div variants={fadeIn("left", "spring",
    index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 0,
          scale: 1, 
          speed: 420
        }} 
        className= "bg-tertiary p-10 rounded-2xl w-full md:w-[400px] lg:w-[500px]">
        <div className="relative w-full h-[300px]">
          <img 
            src={image} 
            alt={name}
            className="h-full w-full object-cover rounded-2xl"/>
            <div className="absolute bottom-0 left-0  flex justify-end m-1 img_hover">
              <div
              className="black-gradient w-10 h-10
              rounded-full flex justify-center
              items-center">
                <img src={github}
                  alt={github}
                  className="w-10 h-10
                  object-contain"
                />
              </div>
            </div>
        </div> 
        {/* Description of the project goes here */}
        <div className="mt-5">
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
          <button 
            onClick={() => {
            window.open(source_code_link)
            }}
            class="mt-2 bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-2 px-4 rounded-full">
            Go to Repo
          </button>
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
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
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