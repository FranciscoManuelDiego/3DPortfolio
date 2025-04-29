import { BrowserRouter } from "react-router-dom"
import {About, Contact,
Hero,  Navbar,
Tech, ProjectsDone, StarsCanvas } from "./components"
function App() {
    return (
    <BrowserRouter>
    <div className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover
        bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
        </div>
            <About/>    
            <Tech />
            <ProjectsDone />
            {/* <Feedbacks /> */}
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
    </div>
    </BrowserRouter>
    )
}

export default App
