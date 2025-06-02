import { motion } from "framer-motion"
import { styles } from "../styles"
import ProgrammerDrawing from "../assets/ProgrammerDrawing.webp"
// import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="w-full m-auto ">
      <div className={`${styles.paddingX}
      relative
      top-[130px] mx-auto flex
      flex-cik items-start gap-2`}>
        <div className="flex flex-col  md:flex-inline-block
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-LogoColor"/>
          <div className="w-1 sm:h-80 h-40
          violet-gradient"/>
          {/* This is rendering a little circle plus line format */}
        </div>
        <div >
          <h1 className= {`${styles.heroHeadText} text-slate-50`}> Hi, I&apos;m <span className="text-LogoColor">
            Francisco,</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Web applications and Interface Developer
              </p>
        </div>
        <div className=" lg:h-[600px] lg:w-[600px] md:h-[500px] md:w-[500px] sm:h-[400px] sm:w-[400px] h-[300px] w-[300px]">
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
      <div className="relative xl:mt-[20px] md:mt-[120px] sm:mt-[120px] mt-[120px]
      w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="absolute w-[35px] h-[64px]
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
