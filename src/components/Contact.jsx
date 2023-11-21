import { useState, useRef } from "react"
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import {styles} from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
const Contact = () => {
  const formRef = useRef()

  const[form , setForm] = useState({
    name: "",
    email: "",
    message: ""
})

const [loading , setLoading] = useState(false)

// This will handle the way our form will work
const handleChange = (e) =>{}

const handleSubmit = (e) => {}

  return (
    <div className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-10
    overflow-hidden">
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-1 bg-black-100 p-8
      rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex-col gap-8 ">
          <label className="flex flex-col">
            <span className="text-slate-50
            font-medium mb-4 ">Your Name</span>
            <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-tertiary py-4
            px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-noine font-medium"
            >
            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-slate-50
            font-medium mb-4 mt-4">Your Email</span>
            <input type="text"
            name="name"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="bg-tertiary py-4
            px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-noine font-medium"
            >
            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-slate-50
            font-medium mb-4 mt-4">Your Message</span>
            <textarea 
            rows="5" //This means that the textarea will provide five lines to write
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="bg-tertiary py-4
            px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-noine font-medium">
            </textarea>
          </label>
          <button type="submit"
            className="bg-tertiary py-2 px-5 mt-4
            outline-none w-fit text-whit font-bold
            shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto
      md:h-[550px] h-[450px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper( Contact, "contact")