import { motion } from "framer-motion"
import { styles } from "../styles"
import ProgrammerDrawing from "../assets/ProgrammerDrawing.webp"
// import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="w-full m-auto ">
      <div className={`${styles.paddingX} relative
      top-[130px] mx-auto flex
      flex-row items-start gap-2`}>
        <div className="flex flex-col 2
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-LogoColor"/>
          <div className="w-1 sm:h-80 h-40
          violet-gradient"/>
          {/* This is rendering a little circle plus line format */}
        </div>
        <div className="flex-1">
          <h1 className= {`${styles.heroHeadText} text-slate-50`}> Hi, I&apos;m <span className="text-LogoColor">
            Francisco,</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Web applications and Interface Developer
              </p>
        </div>
        <div className=" lg:h-[600px] lg:w-[600px] ">
          <img
            src={ProgrammerDrawing}
            alt="Programmer Drawing"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/*<div className="mt-20 flex justify-center
      items-center xs:mt-40">
        <ComputersCanvas/>
      </div>*/}
      <div className="relative xl:mb-20 sm:mb-10 mt-10 
      w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.div animate={{
              y: [0, 24, 0]
            }}
              transition={{
                duration: 2.0,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1">
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
