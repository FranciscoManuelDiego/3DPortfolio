import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"
// Section Wrapper works as a high order animation loader
const SectionWrapper = (Component , idName) => 
function HOC(){
    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7x1
        mx-auto relative z-0 `}>
            <span className="hash-span" id={idName}>
                    &nbsp;
            </span>
            <Component>
            </Component>
        </motion.section>
    )
}

export default SectionWrapper