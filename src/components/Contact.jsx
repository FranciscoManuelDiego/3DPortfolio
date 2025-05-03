import { useState, useRef } from "react"
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import {styles} from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

// bxk8HJ4vTG4bNnoCN Public Key
// template_evvm3df This is the emailjs id
// service_x8nwbns This is the service id
const Contact = () => {
  const formRef = useRef()

  const[form , setForm] = useState({
    name: "",
    email: "",
    message: ""
})

const [loading , setLoading] = useState(false)
const [cooldown , setCooldown] = useState(false)

// This will handle the way our form will work
const handleChange = (e) =>{
  const { name, value } = e.target;
  setForm({...form , [name]: value})
}

const handleSubmit = (e) => {
  // This will prevent the default behavior of the form to reset
  e.preventDefault();
  
  //This checks if the states turns true, if so, it will not allow the user to send another message until the cooldown is over
  if(cooldown){
    alert("Please wait 30 seconds before sending another message.");
    return;
  }

  setLoading(true);
  emailjs.send("service_fzx7u38",
  "template_evvm3df",
  {
    from_name: form.name,
    to_name: "Francisco",
    to_email: "franddiego@gmail.com",
    message: form.message
  },
  "bxk8HJ4vTG4bNnoCN")
  .then(() => {
    setLoading(false);
    alert("Thanks for sending the message! I'll respond as soon as possible.");
    setForm({
      name: "",
      email: "",
      message: "",
    });

    // Set cooldown to true and reset it after 30 seconds
    setCooldown(true);
    setTimeout(() => setCooldown(false), 30000); // 30 seconds cooldown
  })
  .catch((error) => {
    setLoading(false);
    console.log(error);
    alert("Something went wrong");
  });
}

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
            name="email"
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
      h-[450px] h-[450px] md:w-[340px] w-[340px]
      ">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper( Contact, "contact")