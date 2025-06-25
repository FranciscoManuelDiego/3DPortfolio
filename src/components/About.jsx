import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import ProfileCard from "../blocks/ProfileCard"
import {styles} from "../styles"
import Tech from "./Tech"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from "../hoc"


// eslint-disable-next-line react/prop-types
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full bg-gradient-to-b from-LogoColor to-indigo-700
      p-[1px] rounded-[20px] shadow-card">
        <div
        // eslint-disable-next-line react/no-unknown-property
        options= {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[200px] flex justify-evenly
        items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px
            text-center font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div className="flex flex-wrap">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText}>General Information</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mb-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
        >
          I&apos;m a software developer with experience in
          Javascript and its frameworks like React, Node.js
          and Three.js. Also I included languages like Python.
          Currently, I&apos;m focused on web development,
          creating user interfaces and web applications.
          Let&apos;s work together to give life
          to your projects.
          <Tech />
        </motion.p>
        <ProfileCard className="md:w-1/3 w-full"
          name="DiegoFrancisco"
          title="Software Developer"
          handle="Diego Francisco"
          contactText="Contact Me"
          avatarUrl="/FranProfile.png"
          showUserInfo={true}
          innerGradient={false}
          behindGradient={false}
          enableTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about")